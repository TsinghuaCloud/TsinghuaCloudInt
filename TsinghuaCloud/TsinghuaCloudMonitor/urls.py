from django.conf.urls import patterns, url
from TsinghuaCloudMonitor import views

urlpatterns = patterns('',
    url(r'^homepage/$', views.homepage, name='homepage'),
    url(r'^register/$', views.register, name='register'),
    url(r'^login/$', views.login, name='login'),
    url(r'^monitor/$', views.monitor, name='monitor'),
    url(r'^database/$', views.database, name='monitor'),

)
