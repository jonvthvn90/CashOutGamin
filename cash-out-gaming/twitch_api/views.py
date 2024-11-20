from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import TwitchStream, TwitchUser, TwitchSubscription, TwitchPaymentMethod
from .serializers import TwitchStreamSerializer, TwitchUserSerializer, TwitchSubscriptionSerializer, TwitchPaymentMethodSerializer

class TwitchStreamViewSet(ModelViewSet):
    queryset = TwitchStream.objects.all()
    serializer_class = TwitchStreamSerializer

    def list(self, request):
        streams = TwitchStream.objects.all()
        serializer = TwitchStreamSerializer(streams, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        stream = TwitchStream.objects.get(pk=pk)
        serializer = TwitchStreamSerializer(stream)
        return Response(serializer.data)

    def create(self, request):
        serializer = TwitchStreamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        stream = TwitchStream.objects.get(pk=pk)
        serializer = TwitchStreamSerializer(stream, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        stream = TwitchStream.objects.get(pk=pk)
        stream.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TwitchUserViewSet(ModelViewSet):
    queryset = TwitchUser.objects.all()
    serializer_class = TwitchUserSerializer

    def list(self, request):
        users = TwitchUser.objects.all()
        serializer = TwitchUserSerializer(users, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        user = TwitchUser.objects.get(pk=pk)
        serializer = TwitchUserSerializer(user)
        return Response(serializer.data)

    def create(self, request):
        serializer = TwitchUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        user = TwitchUser.objects.get(pk=pk)
        serializer = TwitchUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        user = TwitchUser.objects.get(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TwitchSubscriptionViewSet(ModelViewSet):
    queryset = TwitchSubscription.objects.all()
    serializer_class = TwitchSubscriptionSerializer

    def list(self, request):
        subscriptions = TwitchSubscription.objects.all()
        serializer = TwitchSubscriptionSerializer(subscriptions, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        subscription = TwitchSubscription.objects.get(pk=pk)
        serializer = TwitchSubscriptionSerializer(subscription)
        return Response(serializer.data)

    def create(self, request):
        serializer = TwitchSubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        subscription = TwitchSubscription.objects.get(pk=pk)
        serializer = TwitchSubscriptionSerializer(subscription, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        subscription = TwitchSubscription.objects.get(pk=pk)
        subscription.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TwitchPaymentMethodViewSet(ModelViewSet):
    queryset = TwitchPaymentMethod.objects.all()
    serializer_class = TwitchPaymentMethodSerializer

    def list(self, request):
        payment_methods = TwitchPaymentMethod.objects.all()
        serializer = TwitchPaymentMethodSerializer(payment_methods, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        payment_method = TwitchPaymentMethod.objects.get(pk=pk)
        serializer = TwitchPaymentMethodSerializer(payment_method)
        return Response(serializer.data)

    def create(self, request):
        serializer = TwitchPaymentMethodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        payment_method = TwitchPaymentMethod.objects.get(pk=pk)
        serializer = TwitchPaymentMethodSerializer(payment_method, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        payment_method = TwitchPaymentMethod.objects.get(pk=pk)
        payment_method.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)