from rest_framework import generics
from .serializers import RegisterSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .ai_service import test_gemini


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

class GeminiTestView(APIView):
    def get(self, request):
        result = test_gemini()

        return Response({
            "message": result
        })    