from django.shortcuts import render,redirect
from django.views import View
from accounts.models import DogInformation,VistiForDogs
from django.contrib.auth.models import User
from django.contrib import messages
import datetime
from calendar import monthrange
import dateparser


def last_day_of_month(date_value):
    return date_value.replace(day = monthrange(date_value.year, date_value.month)[1])


from datetime import timedelta

def date_range(start, end):
    delta = end - start  # as timedelta
    days = [start + timedelta(days=i) for i in range(delta.days + 1)]
    return days



## function start from here if you want to display homepage
class HomePageView(View):

	''' Demonstrate docstring for confirming that this django view based function will hit when anyone wants to display homepage  '''


	## template using for this function
	templates_name = 'home/homepage.html'
	##end here template using for this function

	def get(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend


		try :

			today = datetime.datetime.now().today().date()

			getting_ist_day_of_this_month = today.replace(day=1)
			last_day_of_this_month = last_day_of_month(getting_ist_day_of_this_month)
			date_range_list = date_range(getting_ist_day_of_this_month,last_day_of_this_month)

			all_visits_of_current = VistiForDogs.objects.filter(start_date__gte = getting_ist_day_of_this_month, end_date__lte = last_day_of_this_month)
			context['all_visits'] = all_visits_of_current
			context['date_range_list'] = date_range_list
			context['today'] = today
			context['last_day_of_this_month'] = last_day_of_this_month
			context['getting_ist_day_of_this_month'] = getting_ist_day_of_this_month

			## getting all required data and render one html on browser with all those params
			return render(request,self.templates_name,context)
			## ends here getting all required data and render one html on browser with all those keys

		except Exception as e:
			## if exception will occur then this block will hit
			print(e)
			context['msg'] = 'Something Went Wrong, Please Try Again or Contact Us'
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name,context)
			## ends here getting one error message and render one html on browser with that message


	def post(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend

		try:
			## getting start_date and validate it 
			start_date = request.POST.get("start_date")
			if not start_date:
				messages.error(request,'Error !  Start Date is Required')
				return render(request,self.templates_name,context)
			## getting start_date and validate it 

			## getting end_date and validate it 
			end_date = request.POST.get("end_date")
			if not end_date:
				messages.error(request,'Error ! End Date is Required')
				return render(request,self.templates_name,context)

			if start_date > end_date:
				messages.error(request,'From Date Must be less than than To Date')
				return render(request,self.templates_name,context)

			today = datetime.datetime.now().today().date()

			getting_ist_day_of_this_month = dateparser.parse(start_date)
			last_day_of_this_month = dateparser.parse(end_date)
			date_range_list = date_range(getting_ist_day_of_this_month,last_day_of_this_month)

			if len(date_range_list) > 35:
				messages.error(request,'Please select less than 35 days difference between two dates because functionality was in progress and time was less, we can do but it take 40 minutes more so')
				return render(request,self.templates_name,context)




			all_visits_of_current = VistiForDogs.objects.filter(start_date__gte = getting_ist_day_of_this_month, end_date__lte = last_day_of_this_month)
			context['all_visits'] = all_visits_of_current
			context['date_range_list'] = date_range_list
			context['today'] = today
			context['last_day_of_this_month'] = last_day_of_this_month
			context['getting_ist_day_of_this_month'] = getting_ist_day_of_this_month



			return render(request,self.templates_name,context)

		except Exception as e:
			## if exception will occur then this block will hit
			print("error is ", e)
			messages.error(request,'Something Went Wrong, Please Try Again or Contact Us')
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name)
			## ends here getting one error message and render one html on browser with that message

## function start from here if you want to display homepage




## function start from here if you want to display one day dogs
class OneDayDogs(View):

	''' Demonstrate docstring for confirming that this django view based function will hit when anyone wants to display one day dogs  '''


	## template using for this function
	templates_name = 'home/OneDayDogs.html'
	##end here template using for this function

	def get(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend


		try :

			one_Day = self.request.GET.get('one_Day')

			one_Day = dateparser.parse(one_Day)
			one_day_visits = VistiForDogs.objects.filter(start_date = one_Day, end_date__gte = one_Day)

			context['one_day_visits'] = one_day_visits

			## getting all required data and render one html on browser with all those params
			return render(request,self.templates_name,context)
			## ends here getting all required data and render one html on browser with all those keys

		except Exception as e:
			## if exception will occur then this block will hit
			print("error is --->",e)
			context['msg'] = 'Something Went Wrong, Please Try Again or Contact Us'
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name,context)
			## ends here getting one error message and render one html on browser with that message
## function start from here if you want to display one day dogs



## function start from here if you want to list all dog
class ListNewDog(View):

	''' Demonstrate docstring for confirming that this django view based function will hit when anyone wants to list all dog  '''


	## template using for this function
	templates_name = 'home/list_page.html'
	##end here template using for this function

	def get(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend


		try :
			all_dogs = DogInformation.objects.all().order_by('-created_on')
			context['all_dogs'] = all_dogs
			success_msg = self.request.GET.get('success_msg')
			print(success_msg)
			context['success_msg'] = success_msg
			## getting all required data and render one html on browser with all those params
			return render(request,self.templates_name,context)
			## ends here getting all required data and render one html on browser with all those keys

		except Exception as e:
			## if exception will occur then this block will hit
			print(e)
			context['msg'] = 'Something Went Wrong, Please Try Again or Contact Us'
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name,context)
			## ends here getting one error message and render one html on browser with that message
## function ends here if you want to list all dog

## function start from here if you want to add new dog
class AddNewDog(View):

	''' Demonstrate docstring for confirming that this django view based function will hit when anyone wants to add new dog  '''


	## template using for this function
	templates_name = 'home/add_new_dog.html'
	##end here template using for this function

	def get(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend


		try :
			## getting all required data and render one html on browser with all those params
			return render(request,self.templates_name,context)
			## ends here getting all required data and render one html on browser with all those keys

		except Exception as e:
			## if exception will occur then this block will hit
			print(e)
			context['msg'] = 'Something Went Wrong, Please Try Again or Contact Us'
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name,context)
			## ends here getting one error message and render one html on browser with that message


	def post(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend

		try:

			## getting first_name and validate it 
			first_name = request.POST.get("first_name")
			if not first_name:
				messages.error(request,'Error ! Please, Enter First Name')
				return render(request,self.templates_name,context)
			## getting first_name and validate it 

			## getting last_name and validate it 
			last_name = request.POST.get("last_name")


			if last_name:
				## checking if firstname and lastname is already exists
				full_name_instance = DogInformation.objects.filter(firstname = first_name.strip().lower(), lastname = last_name.strip().lower())
				##ends here checking if firstname and lastname is already exists

				if full_name_instance:
					messages.error(request,'Error ! Pair of First Name and last name is already in use')
					return render(request,self.templates_name,context)
			print(request.user.id)
			DogInformation.objects.create(firstname = first_name, lastname = last_name, created_by = User.objects.get(id = request.user.id))

			messages.success(request,'An Dog Instance has been successfully created !')
			return render(request,self.templates_name,context)

		except Exception as e:
			## if exception will occur then this block will hit
			print(e)
			messages.error(request,'Something Went Wrong, Please Try Again or Contact Us')
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name)
			## ends here getting one error message and render one html on browser with that message
## function ends here if you want to add new dog


## delete dog record function starts here
class DogDeleting(View):

	''' here we are presenting a docstring that representing the function which will hit when admin wants to delete any dog record from our database'''

	def get(self,request):
		context = {}

		try:
			getting_id = request.GET.get("delete_id")
			getting_obj = DogInformation.objects.get(id = getting_id)
			getting_obj.delete() 
			## getting all required data and render one html on browser with all those data
			return redirect("/list_dogs/?success_msg=Dog Instance has been Successfully deleted")
			## ends here getting all required data and render one html on browser with all those data

		except  Exception as e:
			print(e)
			return redirect("/list_dogs/")
## delete dog record function ends here






## function start from here if you want to list all visits
class ListNewVisit(View):

	''' Demonstrate docstring for confirming that this django view based function will hit when anyone wants to list all visits  '''


	## template using for this function
	templates_name = 'visits/list_visit.html'
	##end here template using for this function

	def get(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend


		try :
			success_msg = self.request.GET.get('success_msg')
			context['success_msg'] = success_msg

			all_visits = VistiForDogs.objects.all().order_by('-id')
			context['all_visits'] = all_visits

			## getting all required data and render one html on browser with all those params
			return render(request,self.templates_name,context)
			## ends here getting all required data and render one html on browser with all those keys

		except Exception as e:
			## if exception will occur then this block will hit
			print(e)
			context['msg'] = 'Something Went Wrong, Please Try Again or Contact Us'
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name,context)
			## ends here getting one error message and render one html on browser with that message
## function ends here if you want to list all visits

## function start from here if you want to add new visit
class AddNewVisit(View):

	''' Demonstrate docstring for confirming that this django view based function will hit when anyone wants to add new visit  '''


	## template using for this function
	templates_name = 'visits/add_visit.html'
	##end here template using for this function

	def get(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend


		try :
			## getting all required data and render one html on browser with all those params
			all_dogs  = DogInformation.objects.filter(is_active = True)
			context['all_dogs'] = all_dogs
			return render(request,self.templates_name,context)
			## ends here getting all required data and render one html on browser with all those keys

		except Exception as e:
			## if exception will occur then this block will hit
			print(e)
			context['msg'] = 'Something Went Wrong, Please Try Again or Contact Us'
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name,context)
			## ends here getting one error message and render one html on browser with that message

	def post(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend

		try:
			all_dogs  = DogInformation.objects.filter(is_active = True)
			context['all_dogs'] = all_dogs


			## getting start_date and validate it 
			start_date = request.POST.get("start_date")
			if not start_date:
				messages.error(request,'Error !  Start Date is Required')
				return render(request,self.templates_name,context)
			## getting start_date and validate it 

			## getting end_date and validate it 
			end_date = request.POST.get("end_date")
			if not end_date:
				messages.error(request,'Error ! End Date is Required')
				return render(request,self.templates_name,context)

			## getting dog_id and validate it 
			dog_id = request.POST.get("dog_id")
			if not dog_id:
				messages.error(request,'Error ! Please select any dog')
				return render(request,self.templates_name,context)

			dog_instance = DogInformation.objects.get(id  = dog_id)

			VistiForDogs.objects.create(dog_instance = dog_instance, start_date = start_date, end_date = end_date)

			messages.success(request,'An Visits Instance has been successfully created !')
			return render(request,self.templates_name,context)

		except Exception as e:
			## if exception will occur then this block will hit
			print(e)
			messages.error(request,'Something Went Wrong, Please Try Again or Contact Us')
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name)
			## ends here getting one error message and render one html on browser with that message
## function ends here if you want to add new visit

## delete visit record function starts here
class VisitDeleting(View):

	''' here we are presenting a docstring that representing the function which will hit when admin wants to delete any visits record from our database'''
	def get(self,request):
		context = {}

		try:
			getting_id = request.GET.get("delete_id")
			getting_obj = VistiForDogs.objects.get(id = getting_id)
			getting_obj.delete() 
			## getting all required data and render one html on browser with all those data
			return redirect("/list_visit/?success_msg=Visit Record has been Successfully deleted")
			## ends here getting all required data and render one html on browser with all those data

		except:
			return redirect("/list_visit/")
## delete visit record function ends here

