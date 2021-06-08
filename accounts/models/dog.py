from django.db import models
from django.contrib.auth.models import User
import uuid




class DogInformation(models.Model):

	''' Demonstrate docstring for confirming that this table will store dog information like firstname and all others
	'''
	id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
	firstname = models.CharField(max_length = 20)
	lastname = models.CharField(max_length = 20,null = True, blank = True)

	created_by = models.ForeignKey(User,on_delete = models.CASCADE, null = True, blank = True,related_name = 'dog_Created_By')
	updated_by = models.ForeignKey(User,on_delete = models.CASCADE, null = True, blank = True,related_name = 'dog_Updated_By')
	is_active = models.BooleanField(default = True)
	created_on = models.DateTimeField(auto_now_add = True)
	updated_on = models.DateTimeField(auto_now = True)

	class Meta:
		db_table = 'dog_infor'


	def __str__(self):
		return self.firstname


class VistiForDogs(models.Model):

	''' Demonstrate docstring for confirming that this table will store information related to visits added to dogs'''


	id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
	dog_instance = models.ForeignKey(DogInformation, on_delete = models.CASCADE, null = True, blank = True)
	start_date = models.DateField(null = True, blank = True)
	end_date = models.DateField(null = True, blank = True)

	def __str__(self):
		return self.dog_instance.firstname

	class Meta:
		db_table = 'visits_infor'

