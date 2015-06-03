from django.conf.urls import patterns, url
from TsinghuaCloudMonitor import views

urlpatterns = patterns('',
    
    url(r'^monitor/hostdetail/$', views.hostdetail, name='hostdetail'),
    url(r'^tenants/$', views.gettenants,name='gettenants'),
    url(r'^subnets/$', views.getsubnets,name='getsubnets'), 
    url(r'^instances/$', views.getinstances,name='getinstances'), 
    url(r'^memory_physical/$', views.memory_physical,name='memory_physical'), 
    url(r'^memory_virtual/$', views.memory_virtual,name='memory_virtual'), 
    url(r'^cpu_physical/$', views.cpu_physical,name='cpu_physical'),
    url(r'^cpu_virtual/$', views.cpu_virtual,name='cpu_virtual'), 
    url(r'^pro_physical/$', views.pro_physical,name='pro_physical'),
    url(r'^pro_virtual/$', views.pro_virtual,name='pro_virtual'), 
    url(r'^disk_physical/$', views.disk_physical,name='disk_physical'),
    url(r'^disk_virtual/$', views.disk_virtual,name='disk_virtual'), 
    url(r'^eth_virtual/$', views.eth_virtual,name='eth_virtual'),
    url(r'^eth_physical/$', views.eth_physical,name='eth_physical'),  
    url(r'^hoststatus/$', views.hoststatus, name='hoststatus'),
    url(r'^hostdetail/([0-9]+)/$', views.hostdetail, name='hostdetail'),
    url(r'^hostdetailmore/([0-9]+)/$', views.hostdetailmore, name='hostdetailmore'),
    url(r'^mapchart/$', views.mapchart, name='map'),
    url(r'^request/([a-zA-Z0-9]+)/$', views.request, name='request'),
    url(r'^totalcompare/$', views.totalcompare, name='totalcompare'),
    url(r'^download_first/$', views.download_first, name='views.download_first'),
    url(r'^download_second/$', views.download_second, name='views.download_second'),
    url(r'^download_third/$', views.download_third, name='views.download_third'),
    url(r'^monitor/doSearch/$', views.doSearch, name='doSearch'),
    

)
