from django import template
import datetime
register = template.Library()
from accounts.models import DogInformation,VistiForDogs



@register.filter
def day_date(value):

	'''Demonstrate docstring for confirming that this django simple function will return correct date'''

	get_date = value.strftime("%d")
	return get_date



@register.filter
def get_total_dogs(value):

	'''Demonstrate docstring for confirming that this django simple function will return number of dogs added in date'''

	number_of_dogs_come_in_this_date = VistiForDogs.objects.filter(start_date = value, end_date__gte = value).count()
	return number_of_dogs_come_in_this_date
