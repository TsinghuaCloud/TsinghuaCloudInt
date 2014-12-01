
from django.conf.urls import patterns, include, url

from django.contrib import admin


from TsinghuaCloudMonitor import views
admin.autodiscover()
urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^homepage/$', views.homepage, name='homepage'),
    url(r'^register/$', views.register, name='register'),
    url(r'^login/$', views.login, name='login'),
    url(r'^monitor/$', views.monitor, name='monitor'),
    url(r'^database/$', views.database, name='monitor'),

)
