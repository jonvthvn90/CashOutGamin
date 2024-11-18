from django.shortcuts import render
from .models import Product

def store(request):
    products = Product.objects.all()
    return render(request, 'store.html', {'products': products})

def create_product(request):
    if request.method == 'POST':
        product = Product(
            name=request.POST['name'],
            description=request.POST['description'],
            price=request.POST['price'],
            user=request.user
        )
        product.save()
        return redirect('store')
    return render(request, 'create_product.html')