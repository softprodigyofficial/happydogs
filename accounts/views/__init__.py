from .login_admin import LoginAdminView,LogoutAdminView
from .dashboard import HomePageView,AddNewDog,ListNewDog,AddNewVisit,ListNewVisit,DogDeleting,VisitDeleting,OneDayDogs

# here we r using speacial method that will declare all these elements in one list
__all__ = ['LoginAdminView','LogoutAdminView','HomePageView','AddNewDog','ListNewDog','AddNewVisit','ListNewVisit','DogDeleting','VisitDeleting','OneDayDogs']