from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Skill(BaseModel):
    name: str
    category: str
    level: int        # 1-100

SKILLS: List[Skill] = [
    Skill(name="Python",        category="Programming",      level=92),
    Skill(name="FastAPI",       category="Backend",          level=88),
    Skill(name="Django",        category="Backend",          level=85),
    Skill(name="React",         category="Frontend",         level=78),
    Skill(name="JavaScript",    category="Frontend",         level=80),
    Skill(name="MySQL",         category="Database",         level=82),
    Skill(name="HTML/CSS",      category="Frontend",         level=88),
    Skill(name="Bootstrap",     category="Frontend",         level=85),
    Skill(name="Java",          category="Programming",      level=72),
    Skill(name="C",             category="Programming",      level=70),
    Skill(name="Git",           category="Tools",            level=80),
    Skill(name="LLM / GenAI",   category="AI",               level=75),
    Skill(name="Prompt Eng.",   category="AI",               level=78),
    Skill(name="Spring Boot",   category="Backend",          level=65),
    Skill(name="PHP",           category="Backend",          level=60),
]

@router.get("/", response_model=List[Skill])
def get_all_skills():
    return SKILLS

@router.get("/categories")
def get_skill_categories():
    categories = list(set(s.category for s in SKILLS))
    return {"categories": sorted(categories)}
