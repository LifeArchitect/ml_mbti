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
    a = indicoio.personas(data)

    w = (a['commander'] + a['debater'] + a['logician'] + a['architect'])
    x = (a['mediator'] + a['protagonist'] + a['advocate'] + a['campaigner'])
    y = (a['virtuoso'] + a['entrepreneur'] + a['entertainer'] + a['adventurer'])
    z = (a['consul'] + a['logistician'] + a['executive'] + a['defender'])

    vect = [w,x,y,z]

    result = max(vect)
    if result == w:
        result = 'analyst'
    if result == x:
        result = 'diplomat'
    if result == y:
        result = 'explorer'
    if result == z:
        result = 'sentinel'

    return HttpResponse(str(result))
