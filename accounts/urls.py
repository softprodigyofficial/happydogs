from django.urls import path
from .views import *


urlpatterns = [

### auth functions
		## url using for login an admin
		path('login_admin/',LoginAdminView.as_view(),name = "LoginAdminView"),
		##end here url using for login an admin

		###url using for logout an admin
		path('logout_admin/',LogoutAdminView.as_view(),name = "LogoutAdminView"),
		### ends here url using for logout an admin
### auth functions ends here



]
