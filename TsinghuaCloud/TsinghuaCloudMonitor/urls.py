from django.conf.urls import patterns, url
from cloudclient import views

urlpatterns = patterns('',
    url(r'^homepage/$', views.homepage, name='homepage'),
    url(r'^homepage/login/$', views.login, name='login'),
    url(r'^homepage/login/monitor/$', views.monitor, name='monitor'),

)
