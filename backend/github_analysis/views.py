from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .github_service import fetch_github_user_profile

@api_view(['GET'])
def github_user_view(_request, username):
    user_data = fetch_github_user_profile(username)
    
    if user_data is None:
        return Response(
            {"detail": "GitHub user not found or service unavailable"}, 
            status=status.HTTP_404_NOT_FOUND
        )
        
    return Response(user_data, status=status.HTTP_200_OK)