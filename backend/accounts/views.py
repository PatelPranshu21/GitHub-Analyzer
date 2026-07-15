from rest_framework import generics
from .serializers import RegisterSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .ai_service import test_groq
from .ai_service import generate_github_insight

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

class GroqTestView(APIView):
    def get(self, request):
        result = test_groq()

        return Response({
            "message": result
        })
    
class GithubInsightView(APIView):

    def post(self, request):

        profile = request.data.get("profile")
        analytics = request.data.get("analytics")

        if not profile or not analytics:
            return Response(
                {"error": "Profile and analytics are required."},
                status=400
            )

        try:
            insight = generate_github_insight(
                profile,
                analytics
            )

            return Response({
                "insight": insight
            })

        except Exception as e:
            return Response(
                {"error": str(e)},
                status=500
            )