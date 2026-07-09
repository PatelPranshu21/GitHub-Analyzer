from django.urls import path
from .views import github_user_view, github_repositories_view,github_analytics_view

urlpatterns = [
    path('github/<str:username>/', github_user_view, name='github-user'),
    path('github/<str:username>/repos/', github_repositories_view, name='github-repos'),
    path(
    'github/<str:username>/analytics/',
    github_analytics_view
)
]