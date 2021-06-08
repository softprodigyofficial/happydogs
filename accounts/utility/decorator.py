from django.contrib.auth.models import User
from django.urls import reverse
import sys
from django.shortcuts import redirect





def UserRequired(function):

   '''Demonstrate docstring to informing that this decorator we will used only if the url only accessible by SuperAdmin'''


   def wrap(request,*args, **kwargs):
      try:
         if request.user:
            user= request.user.id
            obj = User.objects.get(id = (user), is_staff = True,is_superuser = True)
         else:
            return redirect('%s?next=%s' % (reverse('LoginAdminView'), reverse('HomePageView')))

      except:
         print(sys.exc_info())
         return redirect('%s?next=%s' % (reverse('LoginAdminView'), reverse('HomePageView')))

      return function(request, *args, **kwargs)

   return wrap

