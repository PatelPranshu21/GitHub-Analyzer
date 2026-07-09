def total_stars(repos):
    """Returns the sum of stargazers_count across all repositories."""
    return sum(repo.get("stargazers_count", 0) for repo in repos)


def total_forks(repos):
    """Returns the sum of forks_count across all repositories."""
    return sum(repo.get("forks_count", 0) for repo in repos)


def most_used_language(repos):
    """Returns the most common language in the repositories, or None if empty."""
    if not repos:
        return None
        
    language_counts: dict[str, int] = {}
    for repo in repos:
        lang = repo.get("language")
        if lang:  # Excludes None or blank values
            language_counts[lang] = language_counts.get(lang, 0) + 1
            
    if not language_counts:
        return None
        
    return max(language_counts, key=lambda x: language_counts[x])


def top_repository(repos):
    """Returns the repository dictionary with the highest stargazers_count."""
    if not repos:
        return None
    return max(repos, key=lambda repo: repo.get("stargazers_count", 0))


def total_repositories(repos):
    """Returns the total number of repositories in the list."""
    return len(repos)