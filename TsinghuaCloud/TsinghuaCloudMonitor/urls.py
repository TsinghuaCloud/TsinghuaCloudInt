from django.conf.urls import patterns, url
from TsinghuaCloudMonitor import views

urlpatterns = patterns('',
    
    url(r'^monitor/hostdetail/$', views.hostdetail, name='hostdetail'),
    url(r'^tenants/$', views.gettenants,name='gettenants'),
    url(r'^subnets/$', views.getsubnets,name='getsubnets'), 
    url(r'^instances/$', views.getinstances,name='getinstances'), 
    url(r'^hoststatus/$', views.hoststatus, name='hoststatus'),
    url(r'^hostdetail/([0-9]+)/$', views.hostdetail, name='hostdetail'),
    url(r'^hostdetailmore/([0-9]+)/$', views.hostdetailmore, name='hostdetailmore'),
    url(r'^mapchart/$', views.mapchart, name='map'),
    url(r'^request/([a-zA-Z0-9]+)/$', views.request, name='request'),
    url(r'^totalcompare/$', views.totalcompare, name='totalcompare'),
    url(r'^download_first/$', views.download_first, name='views.download_first'),
    url(r'^download_second/$', views.download_second, name='views.download_second'),
    url(r'^download_third/$', views.download_third, name='views.download_third'),
    url(r'^start_system/$', views.start_system, name='start_system'),
    url(r'^monitor/doSearch/$', views.doSearch, name='doSearch'),
    

)
