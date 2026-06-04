from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class Project(BaseModel):
    id: int
    title: str
    description: str
    highlights: List[str]
    tech_stack: List[str]
    category: str
    featured: bool
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    ai_powered: bool = False

PROJECTS: List[Project] = [
    Project(
        id=1,
        title="PlantMD — AI Plant Disease Chatbot",
        description="Full-stack AI chatbot with 5-step expert diagnostic protocol for plant disease detection achieving 90%+ accuracy.",
        highlights=[
            "5-step expert diagnostic protocol for plant disease detection (90%+ accuracy)",
            "Multi-photo upload with symptom questionnaire ruling out 11 conditions",
            "Confidence-scored diagnosis with severity rating and recovery timeline",
            "Organic & commercial medicine recommendations with dosage instructions",
            "Persistent care reminder system with overdue tracking and auto-rescheduling",
        ],
        tech_stack=["React", "Vision AI", "LLM API", "Prompt Engineering", "Local Storage"],
        category="AI / Full-Stack",
        featured=True,
        ai_powered=True,
        github_url="https://github.com/swayammohanty45?tab=repositories",
    ),
    Project(
        id=2,
        title="Learning Management System",
        description="Full-stack LMS with three role types — Student, Instructor, Admin — with course management, progress tracking, and certificates.",
        highlights=[
            "Roles for Students, Instructors, and Admins with permission control",
            "Instructors manage courses, lessons, quizzes, and grading",
            "Students can enroll, track progress, and earn certificates",
            "Dashboards, search, reviews, discussions, wishlists, email notifications",
            "Bootstrap responsive UI, Django Crispy Forms, MySQL backend",
        ],
        tech_stack=["Django", "Python", "MySQL", "Bootstrap", "HTML/CSS", "JavaScript"],
        category="Full-Stack",
        featured=True,
        ai_powered=False,
        github_url="https://github.com/swayammohanty45?tab=repositories",
    ),
    Project(
        id=3,
        title="Hospital Management System",
        description="Comprehensive hospital platform with patient registration, appointments, doctor scheduling, and billing.",
        highlights=[
            "Patient registration, appointment booking, doctor scheduling",
            "Billing module with itemized invoice generation",
            "Secure user roles: Admin, Doctor, Patient",
            "Responsive UI with Django authentication",
        ],
        tech_stack=["Django", "Python", "MySQL", "HTML/CSS", "JavaScript"],
        category="Full-Stack",
        featured=False,
        ai_powered=False,
        github_url="https://github.com/swayammohanty45?tab=repositories",
    ),
    Project(
        id=4,
        title="Event Management Web Application",
        description="Full-stack Spring Boot web app with CRUD event management, authentication, and rich text editing.",
        highlights=[
            "User authentication and role-based access",
            "CRUD operations: create, edit, publish, delete events",
            "Rich text support and responsive design",
            "Dynamic rendering with HTML, CSS, JavaScript + SQL backend",
        ],
        tech_stack=["Spring Boot", "Java", "SQL", "HTML/CSS", "JavaScript"],
        category="Full-Stack",
        featured=False,
        ai_powered=False,
        github_url="https://github.com/swayammohanty45?tab=repositories",
    ),
]

@router.get("/", response_model=List[Project])
def get_all_projects():
    return PROJECTS

@router.get("/featured", response_model=List[Project])
def get_featured_projects():
    return [p for p in PROJECTS if p.featured]

@router.get("/{project_id}", response_model=Project)
def get_project(project_id: int):
    for p in PROJECTS:
        if p.id == project_id:
            return p
    raise HTTPException(status_code=404, detail="Project not found")
