from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

router = APIRouter()

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str

@router.post("/", response_model=ContactResponse)
def send_contact(data: ContactMessage):
    # In production: send email via SMTP or a service like SendGrid
    print(f"[CONTACT] From: {data.name} <{data.email}> | Subject: {data.subject}")
    return ContactResponse(
        success=True,
        message=f"Thanks {data.name}! Your message has been received. Swayam will get back to you soon.",
    )
