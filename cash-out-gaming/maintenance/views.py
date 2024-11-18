from django.shortcuts import render
from .models import Maintenance

def maintenance(request):
    maintenances = Maintenance.objects.all()
    return render(request, 'maintenance.html', {'maintenances': maintenances})

def create_maintenance(request):
    if request.method == 'POST':
        maintenance = Maintenance(name=request.POST['name'], description=request.POST['description'], user=request.user)
        maintenance.save()
        return redirect('maintenance')
    return render(request, 'create_maintenance.html')