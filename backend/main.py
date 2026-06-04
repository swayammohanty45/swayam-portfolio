from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import profile, projects, skills, contact

app = FastAPI(
    title="Swayam Mohanty — Portfolio API",
    description="Backend API powering Swayam Mohanty's developer portfolio",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile.router,  prefix="/api/profile",  tags=["Profile"])
app.include_router(projects.router, prefix="/api/projects", tags=["Projects"])
app.include_router(skills.router,   prefix="/api/skills",   tags=["Skills"])
app.include_router(contact.router,  prefix="/api/contact",  tags=["Contact"])

@app.get("/", tags=["Health"])
def root():
    return {"status": "ok", "message": "Swayam Portfolio API is live"}

@app.get("/health", tags=["Health"])
def health():
    return {"status": "healthy"}
