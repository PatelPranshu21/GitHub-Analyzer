from groq import Groq
from django.conf import settings
import os
import json
from groq import Groq

client = Groq(api_key=settings.GROQ_API_KEY)


def test_groq():
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": "Say hello from Groq."
            }
        ]
    )

    return completion.choices[0].message.content


def generate_github_insight(profile, analytics):
    prompt = f"""
    You are an expert GitHub reviewer.

    Analyze this GitHub profile.

    Username: {profile["login"]}

    Bio: {profile.get("bio", "No bio")}

    Followers: {profile["followers"]}

    Following: {profile["following"]}

    Public Repositories: {profile["public_repos"]}

    Most Used Language: {analytics["most_used_language"]}

    Total Stars: {analytics["total_stars"]}

    Total Forks: {analytics["total_forks"]}

    IMPORTANT:

    Return ONLY valid JSON.

    Do not write markdown.

    Do not write explanations.

    Do not wrap the JSON in ```.

    Return exactly this structure:

    {{
    "developer_level":"",
    "portfolio_score":0,
    "strengths":[
        "",
        "",
        "",
        ""
    ],
    "improvements":[
        "",
        "",
        "",
        ""
    ],
    "next_steps":[
        "",
        "",
        "",
        "",
        ""
    ],
    "hiring_readiness":"",
    "summary":""
    }}
    """

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        
    )

    content = completion.choices[0].message.content

    if content is None:
        raise ValueError("AI returned an empty response.")

    return json.loads(content)
