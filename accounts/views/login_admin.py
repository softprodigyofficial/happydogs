from django.shortcuts import render,redirect
from django.views import View
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout


## function start from here if you want to hit login request
class LoginAdminView(View):

	''' Demonstrate docstring for confirming that this django view based function will hit when admin wants to login with his account 
	it will return error message if anything will wrong else it will redirect user to home page screen with admin sidewar  '''


	## template using for this function
	templates_name = 'login/admin_login.html'
	##end here template using for this function

	def get(self,request):

		# dictionary that we will sent in frontend
		context = {}
		#ends here dictionary that we will sent in frontend


		try :
			## getting all required data and render one html on browser with all those params
			context['success_msg'] = self.request.GET.get('sucess_msg')
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
		context = {}
		try:
			## getting username and validate it 
			username = request.POST.get("username")
			if not username:
				context['msg'] = 'Error ! Please, Enter Your username'
				return render(request,self.templates_name,context)
			## getting username and validate it 

			## getting password and validate it 
			password = request.POST.get("password")
			if not password:
				context['msg'] = "Error ! Please, Enter Your password"
				return render(request,self.templates_name,context)
			##ends here getting password and validate it 

			## checking if username is exists as superadmin
			username_check = User.objects.filter(username = username.strip())
			##ends here checking if username is exists as superadmin

			if username_check:
				# if exist then checking it is superuser or not 
				if username_check[0].is_active == True and username_check[0].is_staff == True:
					# if it is super user then matching his password and if all good it will redirect to another page
					username_auth = authenticate(username = username, password = password)
					if username_auth:
						# making session and redirecting
						login(request,username_auth)
						return redirect("/")
					else:
						#if password will not matching then we will pack this message into key and render to same page
						context['msg'] = 'Error ! Incorrect Username and Password, Please try again'

						## getting all required data and render one html on browser with all those params
						return render(request,self.templates_name,context)
						## ends here getting all required data and render one html on browser with all those data

						# rendered


				else:
					#if username is not superuser then we will pack this message into key and render to same page
					context['msg'] = 'Error ! Incorrect Username and Password, Please try again'
					return render(request,self.templates_name,context)
			else:
				## if no user found with entered username

				context['msg'] ='Error ! Incorrect Username, Please try again'
				return render(request,self.templates_name,context)


		except Exception as e:
			print("\n" * 3)
			print(e)
			print("\n" * 3)
			## if exception will occur then this block will hit
			print(e)
			context['msg'] = 'Something Went Wrong, Please Try Again or Contact Us'
			## getting one error message and render one html on browser with that message
			return render(request,self.templates_name,context)
			## ends here getting one error message and render one html on browser with that message

## function ends here if you want to hit login request


## function start from here if you want to hit logout request
class LogoutAdminView(View):

	''' Demonstrate docstring for confirming that this django view based function will hit when admin wants to logout with his account 
	it will return error message if anything will wrong, else it will redirect user to home page screen with admin sidewar  '''


	def get(self,request):
		try:
			logout(request)
			return redirect('/login_admin/?sucess_msg=Success ! Your Account has been Successfully Logout')
		except Exception as e:
			print("\n" * 3)
			print(e)
			print("\n" * 3)
			## if exception will occur then this block will hit
			print(e)
			context['msg'] = 'Something Went Wrong, Please Try Again or Contact Us'
			## getting one error message and render one html on browser with that message
			return render(request,'login/admin_login.html',context)

## function start from here if you want to hit logout request
