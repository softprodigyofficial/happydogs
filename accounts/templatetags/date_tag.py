from django import template
import datetime
register = template.Library()


@register.filter
def date_exact(value):

	'''Demonstrate docstring for confirming that this django simple function will return correct format for date'''

	get_string_date = value.strftime("%d %b %Y")
	return get_string_date

