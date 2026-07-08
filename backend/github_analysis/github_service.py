import requests
from typing import Optional, Dict, Any

def fetch_github_user_profile(username: str) -> Optional[Dict[str, Any]]:
    """
    Fetches user data from the GitHub API.
    Returns a dictionary of specific user fields if found, or None if not found/error.
    """
    url = f"https://api.github.com/users/{username}"
    
    try:
        # Set a reasonable timeout to prevent hanging connections
        response = requests.get(url, timeout=5)
        
        if response.status_code == 200:
            data = response.json()
            return {
                "login": data.get("login"),
                "avatar_url": data.get("avatar_url"),
                "followers": data.get("followers"),
                "following": data.get("following"),
                "public_repos": data.get("public_repos"),
            }
        elif response.status_code == 404:
            return None
            
    except requests.RequestException:
        # Gracefully handle connection errors, DNS resolution failures, or timeouts
        return None
        
    return None