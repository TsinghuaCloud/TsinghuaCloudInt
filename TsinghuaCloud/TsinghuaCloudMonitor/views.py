from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from django.shortcuts import render_to_response
from TsinghuaCloudMonitor.models import User
from TsinghuaCloudMonitor.models import Service
from TsinghuaCloudMonitor.models import HostStatus
from TsinghuaCloudMonitor.models import Host
from django.template.defaulttags import csrf_token
from django.db.models import Count, Max
from django.template import RequestContext
from django.http import HttpResponseRedirect
import re
import time

import json
# Create your views here.

def homepage(request):
    return render(request,'TsinghuaCloudMonitor/homepage.html')

def mapchart(request):
    return render(request,'TsinghuaCloudMonitor/mapchart.html')
    
def start_system(request):
    return render(request,'TsinghuaCloudMonitor/start_system.html')

def start_input(request):
    return render(request,'TsinghuaCloudMonitor/start_input.html')
	
def timestamp_datetime(value):
    format = '%Y-%m-%d %H:%M:%S'
    value = time.localtime(value)
    dt = time.strftime(format, value)
    return dt
   
def monitor(request):
    maxservice=Service.objects.all().values('ServiceName','HostName').annotate(max=Max('LastCheck'))
    service = []
    for k in range(0,len(maxservice)):
        temp = Service.objects.filter(HostName=maxservice[k].get('HostName'),ServiceName=    maxservice[k].get('ServiceName'),LastCheck=maxservice[k].get('max'))
        for i in range(0,len(temp)):
            
            service.append(temp[i])
    print service
    return render(request,'TsinghuaCloudMonitor/monitor.html',{'service':service})     

def doSearch(request):
    select_service = request.POST.get('service')
    select_host = request.POST.get('host')
    print select_service
    maxservice=Service.objects.all().values('ServiceName','HostName').annotate(max=Max('LastCheck'))
    service_1 = []
    for k in range(0,len(maxservice)):
        temp = Service.objects.filter(HostName=maxservice[k].get('HostName'),ServiceName=    maxservice[k].get('ServiceName'),LastCheck=maxservice[k].get('max'))
        for i in range(0,len(temp)):
            if temp[i].HostName == select_host and temp[i].ServiceName == select_service:
               
               service_1.append(temp[i])
    print service_1
    
    return render_to_response('TsinghuaCloudMonitor/monitor.html',{'service':service_1})  
    
    
def hoststatus(request):
    host=[]
    maxhost=HostStatus.objects.all().values('HostName').annotate(max=Max('LastCheck'))
    for i in range(0,len(maxhost)):
        temp = HostStatus.objects.filter(HostName=maxhost[i].get('HostName'),LastCheck=maxhost[i].get('max'))  
        for i in range(0,len(temp)):
            
            host.append(temp[i])
       
    return render(request,'TsinghuaCloudMonitor/hoststatus.html',{'host':host})

def totalcompare(request):
    memoryuse_name=[]
    memoryuse_used=[]
    memoryuse=Service.objects.all().values('ServiceName','HostName').annotate(max=Max('LastCheck')).filter(ServiceName='MemoryUsage')
    print memoryuse
    size = len(memoryuse)
    p = re.compile(r'\d+')
    for k in range(0,size):
        temp_first=Service.objects.all().filter(HostName=memoryuse[k].get('HostName'),ServiceName='MemoryUsage',LastCheck=memoryuse[k].get('max'))
        if len(temp_first)>1:
            temp=temp_first[0]  
        else:     
            temp=get_object_or_404(Service,HostName=memoryuse[k].get('HostName'),ServiceName='MemoryUsage',LastCheck=memoryuse[k].get('max'))
        memoryuse_name.append(temp.HostName)  
        if temp.PerformanceData == '':
           memoryuse_used.append(0)
        else:
             memoryuse_used.append(p.findall(temp.PerformanceData)[1])  
    print memoryuse_name
    print memoryuse_used
    cpuloaduse_name=[]
    cpuloaduse_used=[]
    cpuloaduse=Service.objects.all().values('ServiceName','HostName').annotate(max=Max('LastCheck')).filter(ServiceName='cpuload')
    print cpuloaduse
    size = len(cpuloaduse)
    p = re.compile(r'\d+')
    for k in range(0,size):
        temp=get_object_or_404(Service,HostName=cpuloaduse[k].get('HostName'),ServiceName='cpuload',LastCheck=cpuloaduse[k].get('max'))
        cpuloaduse_name.append(temp.HostName)  
        if temp.PerformanceData == '':
           cpuloaduse_used.append(0)
        else:
           cpuloaduse_used.append(p.findall(temp.PerformanceData)[3])  
    diskusage_name=[]
    diskusage_used=[]
    diskusage=Service.objects.all().values('ServiceName','HostName').annotate(max=Max('LastCheck')).filter(ServiceName='disk')
    size = len(diskusage)
    p = re.compile(r'\d+')
    for k in range(0,size):
        temp=get_object_or_404(Service,HostName=diskusage[k].get('HostName'),ServiceName='disk',LastCheck=diskusage[k].get('max'))
        diskusage_name.append(temp.HostName)  
        if temp.PerformanceData == '':
           diskusage_used.append(0)
        else:
           diskusage_used.append(p.findall(temp.PerformanceData)[0]) 
    pro_name=[]
    pro_used=[]
    prousage=Service.objects.all().values('ServiceName','HostName').annotate(max=Max('LastCheck')).filter(ServiceName='total-procs')
    size = len(prousage)
    p = re.compile(r'\d+')
    for k in range(0,size):
        temp=get_object_or_404(Service,HostName=prousage[k].get('HostName'),ServiceName='total-procs',LastCheck=prousage[k].get('max'))
        pro_name.append(temp.HostName)  
        if temp.PerformanceData == '':
           pro_used.append(0)
        else:
           pro_used.append(p.findall(temp.PerformanceData)[0])    
    return render(request,'TsinghuaCloudMonitor/totalcompare.html',{'memoryuse_name':memoryuse_name,'memoryuse_used':memoryuse_used,'cpuloaduse_name':cpuloaduse_name,'cpuloaduse_used':cpuloaduse_used,'diskusage_name':diskusage_name,
    'diskusage_used':diskusage_used,'pro_name':pro_name,'pro_used':pro_used}) 



def hostdetail(request,serviceid):
    service = get_object_or_404(Service, pk=serviceid)
    host = get_object_or_404(Host, HostName=service.HostName)
    memory = Service.objects.filter(HostName=service.HostName, ServiceName='MemoryUsage')
    p = re.compile(r'\d+')
    memory_total= []
    memory_used = []
    memory_timestamp = []
    for k in range(len(memory)-1,0,-1):
        if p.findall(memory[k].PerformanceData):
           memory_total.append(p.findall(memory[k].PerformanceData)[0])
           if k==(len(memory)-1):
              memory_used.append(p.findall(memory[k].PerformanceData)[1])
              memory_timestamp.append(memory[k].LastCheck)
           else: 
                 if memory[k].PerformanceData == '':
                    print 'ssss'
                    memory_used.append(0)
                    memory_timestamp.append(memory[k].LastCheck)
                 else: 
                      if (memory[k+1].PerformanceData!='') and (p.findall(memory[k].PerformanceData)[1]!=p.findall(memory[k+1].PerformanceData)[1]) :
                         memory_used.append(p.findall(memory[k].PerformanceData)[1])
                         memory_timestamp.append(memory[k].LastCheck)
    print memory_timestamp
    print memory_used
    cpuload = Service.objects.filter(HostName=service.HostName, ServiceName='cpuload')
    p = re.compile(r'(\d+)\.(\d*)')
    cpu_one= []
    cpu_five = []
    cpu_timestamp = []
    for k in range(len(cpuload)-1,0,-1):
        if k==(len(cpuload)-1):
           cpu_one.append('.'.join(p.findall(cpuload[k].PerformanceData)[0]))
           cpu_five.append('.'.join(p.findall(cpuload[k].PerformanceData)[3]))
           cpu_timestamp.append(cpuload[k].LastCheck)
        else:
             if cpuload[k].PerformanceData == '':
                print 'dddd'
                cpu_one.append(0)
                cpu_five.append(0)
                cpu_timestamp.append(cpuload[k].LastCheck)                
        
        
             else: 
                  if (cpuload[k+1].PerformanceData!='') and ('.'.join(p.findall(cpuload[k].PerformanceData)[0])!='.'.join(p.findall(cpuload[k+1].PerformanceData)[0])):
                     cpu_one.append('.'.join(p.findall(cpuload[k].PerformanceData)[0]))
                     cpu_five.append('.'.join(p.findall(cpuload[k].PerformanceData)[3]))
                     cpu_timestamp.append(cpuload[k].LastCheck)

    disk = Service.objects.filter(HostName=service.HostName, ServiceName='disk')
    p = re.compile(r'\d+')
    diskuse= []
    disk_timestamp = []
    for k in range(len(disk)-1,0,-1):
        if k==(len(disk)-1):
           diskuse.append(p.findall(disk[k].PerformanceData)[0])
           disk_timestamp.append(disk[k].LastCheck)
        else: 
             if disk[k].PerformanceData == '':
                diskuse.append(0)
                disk_timestamp.append(disk[k].LastCheck)   
             else: 
                  if (disk[k+1].PerformanceData!='') and (p.findall(disk[k].PerformanceData)[0]!=p.findall(disk[k+1].PerformanceData)[0]):
                     diskuse.append(p.findall(disk[k].PerformanceData)[0])
                     disk_timestamp.append(disk[k].LastCheck)

    process = Service.objects.filter(HostName=service.HostName, ServiceName='total-procs')
    p = re.compile(r'\d+')
    pro = []
    pro_timestamp = []
    for k in range(len(process)-1,0,-1):
          if process[k].PerformanceData == '':
             pro.append(0)
             pro_timestamp.append(process[k].LastCheck)

          else:
               pro.append(p.findall(process[k].PerformanceData)[0])
               pro_timestamp.append(process[k].LastCheck)

    if host:
        return render_to_response('TsinghuaCloudMonitor/hostdetail.html', {'host': host,'memory_total':memory_total,'memory_used':memory_used,'memory_timestamp':memory_timestamp,'cpu_one':cpu_one,'cpu_five':cpu_five,'cpu_timestamp':cpu_timestamp,'diskuse':diskuse,'disk_timestamp':disk_timestamp,'pro':pro,'pro_timestamp':pro_timestamp })
    else:
        return HttpResponse("ERROR")
 
 
def hostdetailmore(request,hostid):
    hoststatus = get_object_or_404(HostStatus, pk=hostid)
    host = get_object_or_404(Host, HostName=hoststatus.HostName)
    memory = Service.objects.filter(HostName=host.HostName, ServiceName='MemoryUsage')
    p = re.compile(r'\d+')
    memory_total= []
    memory_used = []
    memory_timestamp = []
    for k in range(len(memory)-1,0,-1):
        if p.findall(memory[k].PerformanceData):
           memory_total.append(p.findall(memory[k].PerformanceData)[0])
           if k==(len(memory)-1):
              memory_used.append(p.findall(memory[k].PerformanceData)[1])
              memory_timestamp.append(memory[k].LastCheck)
           else: 
              if p.findall(memory[k].PerformanceData)[1]!=p.findall(memory[k+1].PerformanceData)[1]:
                 memory_used.append(p.findall(memory[k].PerformanceData)[1])
                 memory_timestamp.append(memory[k].LastCheck)
    test = []
    
    print memory_used
    print memory_timestamp
    cpuload = Service.objects.filter(HostName=host.HostName, ServiceName='cpuload')
    p = re.compile(r'(\d+)\.(\d*)')
    cpu_one= []
    cpu_five = []
    cpu_timestamp = []
    for k in range(len(cpuload)-1,0,-1):
        if k==(len(cpuload)-1):
           cpu_one.append('.'.join(p.findall(cpuload[k].PerformanceData)[0]))
           cpu_five.append('.'.join(p.findall(cpuload[k].PerformanceData)[3]))
           cpu_timestamp.append(cpuload[k].LastCheck)
        else: 
           if '.'.join(p.findall(cpuload[k].PerformanceData)[0])!='.'.join(p.findall(cpuload[k+1].PerformanceData)[0]):
              cpu_one.append('.'.join(p.findall(cpuload[k].PerformanceData)[0]))
              cpu_five.append('.'.join(p.findall(cpuload[k].PerformanceData)[3]))
              cpu_timestamp.append(cpuload[k].LastCheck)
        
    print cpu_one
    print cpu_five
    
    disk = Service.objects.filter(HostName=host.HostName, ServiceName='disk')
    p = re.compile(r'\d+')
    diskuse= []
    disk_timestamp = []
    for k in range(len(disk)-1,0,-1):
        if k==(len(disk)-1):
           diskuse.append(p.findall(disk[k].PerformanceData)[0])
           disk_timestamp.append(disk[k].LastCheck)
        else: 
           if p.findall(disk[k].PerformanceData)[0]!=p.findall(disk[k+1].PerformanceData)[0]:
              diskuse.append(p.findall(disk[k].PerformanceData)[0])
              disk_timestamp.append(disk[k].LastCheck)
        
    print diskuse
    
    process = Service.objects.filter(HostName=host.HostName, ServiceName='total-procs')
    p = re.compile(r'\d+')
    pro = []
    pro_timestamp = []
    for k in range(len(process)-1,0,-1):
          pro.append(p.findall(process[k].PerformanceData)[0])
          pro_timestamp.append(process[k].LastCheck)

    print pro
    if host:
        return render_to_response('TsinghuaCloudMonitor/hostdetail.html', {'host': host,'memory_total':memory_total,'memory_used':memory_used,'memory_timestamp':memory_timestamp,'cpu_one':cpu_one,'cpu_five':cpu_five,'cpu_timestamp':cpu_timestamp,'diskuse':diskuse,'disk_timestamp':disk_timestamp,'pro':pro,'pro_timestamp':pro_timestamp})
    else:
        return HttpResponse("ERROR")
     
    
def login(request): 
    errors= []  
    account=None  
    password=None  
    if request.method == 'POST' :  
        if not request.POST.get('account'):  
            errors.append('Please Enter account')  
        else:  
            account = request.POST.get('account')  
        if not request.POST.get('password'):  
            errors.append('Please Enter password')  
        else:  
            password= request.POST.get('password')  
        if account and password :  
             user = User.objects.filter(username = account,password = password)  
             if user:  
                  return HttpResponseRedirect('/monitor')
                
             else :  
                  errors.append('invaild user')
                  return HttpResponseRedirect('/login')
                  
    return render_to_response('TsinghuaCloudMonitor/login.html', {'errors': errors}) 
     
def register(request): 
    errors= []  
    account=None  
    password=None  
    password2=None  
    CompareFlag=False  
  
    if request.method == 'POST':  
        if not request.POST.get('account'):  
            errors.append('Please Enter account')  
        else:  
            account = request.POST.get('account')  
        if not request.POST.get('password'):  
            errors.append('Please Enter password')  
        else:  
            password= request.POST.get('password')  
        if not request.POST.get('password2'):  
            errors.append('Please Enter password2')  
        else:  
            password2= request.POST.get('password2')  
        
        if password  and password2 :  
            if password == password2:  
                CompareFlag = True  
            else :  
                errors.append('password2 is diff password ')  
  
  
        if account  and password  and password2  and CompareFlag :  
            user=User(username=account,password=password)   
            user.save()  
            return  HttpResponseRedirect('/login')  
  
    return render_to_response('TsinghuaCloudMonitor/register.html', {'errors': errors}) 
    
def start_input(request): 
    ip=None  
    hostname=None  
    if request.method == 'POST':  
        if not request.POST.get('ip'):  
            errors.append('Please Enter IP address')  
        else:  
            ip = request.POST.get('ip') 
            print('dd') 
        if not request.POST.get('hostname'):  
            errors.append('Please Enter hostname')  
        else:  
            hostname = request.POST.get('hostname')  
        print hostname
        host=Host(IP=ip,HostName=hostname,Owner='nagios',Info='UP') 
        host.save()  
        return  HttpResponseRedirect('/monitor')  
  
    return render_to_response('TsinghuaCloudMonitor/start_input.html') 
  
def alogout(request):  
    logout(request)  
    return HttpResponseRedirect('/index') 
    
  

