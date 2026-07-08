from django.urls import path
from .views import github_user_view

urlpatterns = [
    path('github/<str:username>/', github_user_view, name='github-user'),
]