from django.urls import path
from .views import RegisterView
from .views import GeminiTestView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path(
        "signup/",
        RegisterView.as_view(),
        name="signup"
    ),

    path(
        "login/",
        TokenObtainPairView.as_view(),
        name="login"
    ),

    path(
        "token/refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh"
    ),
    path(
    "ai/test/",
    GeminiTestView.as_view(),
    name="gemini_test"
),
]