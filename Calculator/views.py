from django.shortcuts import render

# Create your views here.
def Cal_Index(request):
    return render(request, 'calculator.html')