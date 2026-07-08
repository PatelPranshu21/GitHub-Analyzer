
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def github_user_view(_request, username):
    """
    Retrieves the username from the URL and returns it in a JSON payload.
    """
    return Response({"username": username})