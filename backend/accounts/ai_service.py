import google.generativeai as genai
from django.conf import settings

genai.configure(api_key=settings.GEMINI_API_KEY)


def test_gemini():
    model = genai.GenerativeModel("gemini-2.0-flash-lite")

    response = model.generate_content(
        "Say only: Gemini connection successful."
    )

    return response.text