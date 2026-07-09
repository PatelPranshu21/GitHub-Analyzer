from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .github_service import fetch_github_user_profile
from .github_service import get_github_repositories
from .analytics_service import total_stars,total_forks,most_used_language,top_repository

@api_view(['GET'])
def github_user_view(_request, username):
    user_data = fetch_github_user_profile(username)
    
    if user_data is None:
        return Response(
            {"detail": "GitHub user not found or service unavailable"}, 
            status=status.HTTP_404_NOT_FOUND
        )
        
    return Response(user_data, status=status.HTTP_200_OK)



@api_view(['GET'])
def github_repositories_view(request, username):
    """
    API view to retrieve and return a GitHub user's repositories.
    """
    try:
        data = get_github_repositories(username)
        return Response(data, status=status.HTTP_200_OK)
    except request.exceptions.HTTPError as err:
        # Handle cases where GitHub returns an error (e.g., 404 Not Found)
        status_code = err.response.status_code
        if status_code == 404:
            return Response(
                {"detail": "GitHub user not found."}, 
                status=status.HTTP_404_NOT_FOUND
            )
        return Response(
            {"detail": "Error communicating with GitHub API."}, 
            status=status.HTTP_502_BAD_GATEWAY
        )
    except Exception:
        # Handle unexpected errors
        return Response(
            {"detail": "An internal error occurred."}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    
@api_view(['GET'])
def github_analytics_view(request, username):
    repos = get_github_repositories(username)

    data = {
        "total_stars": total_stars(repos),
        "total_forks": total_forks(repos),
        "most_used_language": most_used_language(repos),
        "top_repository": top_repository(repos),
        "total_repositories": len(repos)
    }

    return Response(data)    