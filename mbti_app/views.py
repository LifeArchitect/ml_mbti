from django.shortcuts import render
from django.http import HttpResponse
import indicoio
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
def home(request):
    return render(request, 'base.html', {})

def analyst(request):
    return render(request, 'analyst.html', {})

def diplomat(request):
    return render(request, 'diplomat.html', {})

def sentinel(request):
    return render(request, 'sentinel.html', {})

def explorer(request):
    return render(request, 'explorer.html', {})

@csrf_exempt
def indico(request):
    data = request.POST.get('data')
    print (data)
    indicoio.config.api_key = '584f26a05ca718f8387fcc7ed6d845f4'

    # single example
    result = indicoio.personas(data)
    return HttpResponse(str(result))
