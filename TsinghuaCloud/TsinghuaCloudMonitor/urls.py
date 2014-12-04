from django.conf.urls import patterns, url
from TsinghuaCloudMonitor import views

urlpatterns = patterns('',
    
    url(r'^monitor/hostdetail/$', views.hostdetail, name='hostdetail'),
    url(r'^hoststatus/$', views.hoststatus, name='hoststatus'),
    url(r'^hostdetail/([0-9]+)/$', views.hostdetail, name='hostdetail'),
    url(r'^hostdetailmore/([0-9]+)/$', views.hostdetailmore, name='hostdetailmore'),



)
