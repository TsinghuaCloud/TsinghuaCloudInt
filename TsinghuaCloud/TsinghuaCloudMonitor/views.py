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

import json
# Create your views here.

def homepage(request):
    return render(request,'TsinghuaCloudMonitor/homepage.html')
	
    
def monitor(request):
    maxservice=Service.objects.all().values('ServiceName','HostName').annotate(max=Max('LastCheck'))
    service = []
    for k in range(0,len(maxservice)):
        temp = Service.objects.filter(HostName=maxservice[k].get('HostName'),ServiceName=    maxservice[k].get('ServiceName'),LastCheck=maxservice[k].get('max'))
        for i in range(0,len(temp)):
            service.append(temp[i])
            print temp[i]
    return render(request,'TsinghuaCloudMonitor/monitor.html',{'service':service})     
    
def hoststatus(request):
    host=HostStatus.objects.all()
    return render(request,'TsinghuaCloudMonitor/hoststatus.html',{'host':host,})

def hostdetail(request,serviceid):
    service = get_object_or_404(Service, pk=serviceid)
    print service.HostName
    host = get_object_or_404(Host, HostName=service.HostName)
    memory = Service.objects.filter(HostName=service.HostName, ServiceName='MemoryUsage')
    p = re.compile(r'\d+')
    memory_total= []
    memory_used = []
    for k in range(len(memory)-1,0,-1):
        memory_total.append(p.findall(memory[k].PerformanceData)[0])
        if k==(len(memory)-1):
           memory_used.append(p.findall(memory[k].PerformanceData)[1])
        else: 
           if p.findall(memory[k].PerformanceData)[1]!=p.findall(memory[k+1].PerformanceData)[1]:
              memory_used.append(p.findall(memory[k].PerformanceData)[1])
        
    print memory_used
    cpuload = Service.objects.filter(HostName=service.HostName, ServiceName='cpuload')
    p = re.compile(r'(\d+)\.(\d*)')
    cpu_one= []
    cpu_five = []
    for k in range(len(cpuload)-1,0,-1):
        if k==(len(cpuload)-1):
           cpu_one.append('.'.join(p.findall(cpuload[k].PerformanceData)[0]))
           cpu_five.append('.'.join(p.findall(cpuload[k].PerformanceData)[3]))
        else: 
           if '.'.join(p.findall(cpuload[k].PerformanceData)[0])!='.'.join(p.findall(cpuload[k+1].PerformanceData)[0]):
              cpu_one.append('.'.join(p.findall(cpuload[k].PerformanceData)[0]))
              cpu_five.append('.'.join(p.findall(cpuload[k].PerformanceData)[3]))

        
    print cpu_one
    print cpu_five
    
    disk = Service.objects.filter(HostName=service.HostName, ServiceName='disk')
    p = re.compile(r'\d+')
    diskuse= []
    for k in range(len(disk)-1,0,-1):
        if k==(len(disk)-1):
           diskuse.append(p.findall(disk[k].PerformanceData)[0])
        else: 
           if p.findall(disk[k].PerformanceData)[0]!=p.findall(disk[k+1].PerformanceData)[0]:
              diskuse.append(p.findall(disk[k].PerformanceData)[0])
        
    print diskuse
    
    process = Service.objects.filter(HostName=service.HostName, ServiceName='total-procs')
    p = re.compile(r'\d+')
    pro = []
    for k in range(len(process)-1,0,-1):
          pro.append(p.findall(process[k].PerformanceData)[0])
        
    print pro
    if host:
        return render_to_response('TsinghuaCloudMonitor/hostdetail.html', {'host': host,'memory_total':memory_total,'memory_used':memory_used,'cpu_one':cpu_one,'cpu_five':cpu_five,'diskuse':diskuse,'pro':pro })
    else:
        return HttpResponse("ERROR")
 
 
def hostdetailmore(request,hostid):
    hoststatus = get_object_or_404(HostStatus, pk=hostid)
    host = get_object_or_404(Host, HostName=hoststatus.HostName)
    print host.HostName
    return render_to_response('TsinghuaCloudMonitor/hostdetailmore.html', {'host': host})
     
    
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
  
def alogout(request):  
    logout(request)  
    return HttpResponseRedirect('/index') 
    
  
