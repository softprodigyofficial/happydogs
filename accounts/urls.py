from django.urls import path
from .views import *
from .utility import UserRequired

urlpatterns = [

### auth functions
		## url using for login an admin
		path('login_admin/',LoginAdminView.as_view(),name = "LoginAdminView"),
		##end here url using for login an admin

		###url using for logout an admin
		path('logout_admin/',LogoutAdminView.as_view(),name = "LogoutAdminView"),
		### ends here url using for logout an admin

		###url using for homepage
		path('',HomePageView.as_view(),name = "HomePageView"),
		### ends here url using for homepage

		###url using for AddNewDog
		path('list_dogs/',UserRequired(ListNewDog.as_view()),name = "ListNewDog"),
		### ends here url using for AddNewDog


		###url using for AddNewDog
		path('add_new_dog/',UserRequired(AddNewDog.as_view()),name = "AddNewDog"),
		### ends here url using for AddNewDog

		###url using for DogDeleting
		path('delete_dog/',UserRequired(DogDeleting.as_view()),name = "DogDeleting"),
		### ends here url using for DogDeleting


		###url using for ListNewVisit
		path('list_visit/',UserRequired(ListNewVisit.as_view()),name = "ListNewVisit"),
		### ends here url using for ListNewVisit


		###url using for AddNewVisit
		path('add_new_visit/',UserRequired(AddNewVisit.as_view()),name = "AddNewVisit"),
		### ends here url using for AddNewVisit

		###url using for VisitDeleting
		path('delete_visit/',UserRequired(VisitDeleting.as_view()),name = "VisitDeleting"),
		### ends here url using for VisitDeleting


		###url using for OneDayDogs
		path('one_day_data/',UserRequired(OneDayDogs.as_view()),name = "OneDayDogs"),
		### ends here url using for OneDayDogs


### auth functions ends here



]
