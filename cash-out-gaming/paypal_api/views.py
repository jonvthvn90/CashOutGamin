from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import PayPalTransaction, PayPalUser, PayPalPaymentMethod
from .serializers import PayPalTransactionSerializer, PayPalUserSerializer, PayPalPaymentMethodSerializer

class PayPalTransactionViewSet(ModelViewSet):
    queryset = PayPalTransaction.objects.all()
    serializer_class = PayPalTransactionSerializer

    def list(self, request):
        transactions = PayPalTransaction.objects.all()
        serializer = PayPalTransactionSerializer(transactions, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        transaction = PayPalTransaction.objects.get(pk=pk)
        serializer = PayPalTransactionSerializer(transaction)
        return Response(serializer.data)

    def create(self, request):
        serializer = PayPalTransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        transaction = PayPalTransaction.objects.get(pk=pk)
        serializer = PayPalTransactionSerializer(transaction, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        transaction = PayPalTransaction.objects.get(pk=pk)
        transaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class PayPalUserViewSet(ModelViewSet):
    queryset = PayPalUser.objects.all()
    serializer_class = PayPalUserSerializer

    def list(self, request):
        users = PayPalUser.objects.all()
        serializer = PayPalUserSerializer(users, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = PayPalUser.objects.get(pk=pk)
        serializer = PayPalUserSerializer(user)
        return Response(serializer.data)

    def create(self, request):
        serializer = PayPalUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        user = PayPalUser.objects.get(pk=pk)
        serializer = PayPalUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        user = PayPalUser.objects.get(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class PayPalPaymentMethodViewSet(ModelViewSet):
    queryset = PayPalPaymentMethod.objects.all()
    serializer_class = PayPalPaymentMethodSerializer

    def list(self, request):
        payment_methods = PayPalPaymentMethod.objects.all()
        serializer = PayPalPaymentMethodSerializer(payment_methods, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        payment_method = PayPalPaymentMethod.objects.get(pk=pk)
        serializer = PayPalPaymentMethodSerializer(payment_method)
        return Response(serializer.data)

    def create(self, request):
        serializer = PayPalPaymentMethodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        payment_method = PayPalPaymentMethod.objects.get(pk=pk)
        serializer = PayPalPaymentMethodSerializer(payment_method, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        payment_method = PayPalPaymentMethod.objects.get(pk=pk)
        payment_method.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)