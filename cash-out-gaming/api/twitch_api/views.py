from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import TwitchStream
from .serializers import TwitchStreamSerializer

class TwitchAPIViewSet(ModelViewSet):
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