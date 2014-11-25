from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from django.template.defaulttags import csrf_token
import json
# Create your views here.

def homepage(request):
    return render(request,'cloudclient/homepage.html')
	
def login(request):
    return render(request,'cloudclient/login.html')
    
def monitor(request):
    return render(request,'cloudclient/monitor.html')

