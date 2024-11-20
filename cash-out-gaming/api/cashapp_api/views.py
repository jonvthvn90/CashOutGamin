from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import CashAppTransaction
from .serializers import CashAppTransactionSerializer

class CashAppAPIViewSet(ModelViewSet):
    queryset = CashAppTransaction.objects.all()
    serializer_class = CashAppTransactionSerializer

    def list(self, request):
        transactions = CashAppTransaction.objects.all()
        serializer = CashAppTransactionSerializer(transactions, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        transaction = CashAppTransaction.objects.get(pk=pk)
        serializer = CashAppTransactionSerializer(transaction)
        return Response(serializer.data)

    def create(self, request):
        serializer = CashAppTransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        transaction = CashAppTransaction.objects.get(pk=pk)
        serializer = CashAppTransactionSerializer(transaction, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        transaction = CashAppTransaction.objects.get(pk=pk)
        transaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)