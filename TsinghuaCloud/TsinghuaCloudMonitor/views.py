from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from django.shortcuts import render_to_response
from TsinghuaCloudMonitor.models import User
from django.template.defaulttags import csrf_token
from django.template import RequestContext
from django.http import HttpResponseRedirect

import json
# Create your views here.

def homepage(request):
    return render(request,'TsinghuaCloudMonitor/homepage.html')
	
    
def monitor(request):
    return render(request,'TsinghuaCloudMonitor/monitor.html')

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
    
def database(request):
    
    user=User.objects.all();
    return render(request,'TsinghuaCloudMonitor/database.html',{'user':user})     
