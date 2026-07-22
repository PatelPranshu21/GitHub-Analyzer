import requests
from typing import Optional, Dict, Any
def fetch_github_user_profile(username):
    url = f"https://api.github.com/users/{username}"

    try:
        response = requests.get(url, timeout=5)

        print("GitHub URL:", url)
        print("GitHub Status:", response.status_code)
        print("GitHub Response:", response.text)

        if response.status_code == 200:
            data = response.json()
            return {
                "login": data.get("login"),
                "avatar_url": data.get("avatar_url"),
                "followers": data.get("followers"),
                "following": data.get("following"),
                "public_repos": data.get("public_repos"),
            }

        return None

    except Exception as e:
        print("ERROR:", e)
        return None

def get_github_repositories(username):

    url = f"https://api.github.com/users/{username}/repos"
    headers = {"Accept": "application/vnd.github+json"}
    
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Raises an exception for 4xx or 5xx status codes
    
    repos_data = response.json()
    
    # Filter the list to include only the requested fields
    filtered_repos = []
    for repo in repos_data:
        filtered_repos.append({
            "name": repo.get("name"),
            "stargazers_count": repo.get("stargazers_count"),
            "forks_count": repo.get("forks_count"),
            "language": repo.get("language")
        })
        
    return filtered_repos