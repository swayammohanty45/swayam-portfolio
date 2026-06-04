from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class SocialLink(BaseModel):
    platform: str
    url: str
    icon: str

class ProfileResponse(BaseModel):
    name: str
    title: str
    tagline: str
    bio: str
    location: str
    email: str
    phone: str
    cgpa: str
    degree: str
    university: str
    graduation: str
    social_links: List[SocialLink]
    available_for_hire: bool

PROFILE_DATA = ProfileResponse(
    name="Swayam Mohanty",
    title="Full-Stack Developer & AI Engineer",
    tagline="Building intelligent web systems with Python, FastAPI & React",
    bio=(
        "I am a versatile developer skilled in Python with Django and FastAPI, "
        "building scalable web applications, backend systems, and RESTful APIs. "
        "I specialize in designing database-driven platforms and reliable software solutions, "
        "while continuously exploring new technologies including Generative AI and LLMs."
    ),
    location="Odisha, India",
    email="Swayammohanty26@gmail.com",
    phone="+91-7077418558",
    cgpa="7.88",
    degree="Master of Computer Applications (MCA)",
    university="Silicon University, Bhubaneswar",
    graduation="May 2026",
    social_links=[
        SocialLink(platform="LinkedIn", url="http://www.linkedin.com/in/swayam-mohanty-0553a2388", icon="linkedin"),
        SocialLink(platform="GitHub",   url="https://github.com/swayammohanty45?tab=repositories", icon="github"),
    ],
    available_for_hire=True,
)

@router.get("/", response_model=ProfileResponse)
def get_profile():
    return PROFILE_DATA
