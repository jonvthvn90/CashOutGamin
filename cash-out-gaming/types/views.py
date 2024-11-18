from django.shortcuts import render
from .models import Type

def type_list(request):
    types = Type.objects.all()
    return render(request, 'type.html', {'types': types})

def create_type(request):
    if request.method == 'POST':
        type_obj = Type(name=request.POST['name'], description=request.POST['description'])
        type_obj.save()
        return redirect('type_list')
    return render(request, 'create_type.html')