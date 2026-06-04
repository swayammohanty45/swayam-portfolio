# Project Flow — Swayam Mohanty Portfolio

## Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                  BROWSER                         │
│  React (Vite) — localhost:5173                   │
│                                                   │
│  Navbar → Hero → Experience → Skills             │
│         → Projects → Contact → Footer            │
└──────────────────┬──────────────────────────────┘
                   │  HTTP (Axios via Vite proxy)
                   ▼
┌─────────────────────────────────────────────────┐
│               FASTAPI BACKEND                    │
│  Uvicorn — localhost:8000                        │
│                                                   │
│  /api/profile   →  routers/profile.py            │
│  /api/projects  →  routers/projects.py           │
│  /api/skills    →  routers/skills.py             │
│  /api/contact   →  routers/contact.py            │
└─────────────────────────────────────────────────┘
```

---

## Request Flow — Step by Step

### 1. User Opens the Portfolio

1. Browser loads `index.html` from Vite dev server (port 5173).
2. React bootstraps via `main.jsx` → `App.jsx`.
3. `App.jsx` renders all sections in order:
   - `<Navbar />` — sticky top navigation
   - `<Hero />` — name, title, CTA buttons, social links
   - `<Experience />` — internship + education timeline
   - `<Skills />` — fetches `/api/skills/` and renders filterable skill bars
   - `<Projects />` — fetches `/api/projects/` and renders project cards
   - `<Contact />` — contact form that POSTs to `/api/contact/`
   - `<Footer />`

### 2. Skills Data Flow

```
Skills.jsx mounts
  → useEffect fires
  → fetchSkills() called (src/services/api.js)
  → Axios GET /api/skills/
  → Vite proxy forwards to http://localhost:8000/api/skills/
  → FastAPI routers/skills.py returns List[Skill] JSON
  → React state updated → skills rendered with animated bars
```

### 3. Projects Data Flow

```
Projects.jsx mounts
  → useEffect fires
  → fetchProjects() called
  → Axios GET /api/projects/
  → FastAPI returns List[Project] JSON
  → Cards rendered with tech badges, highlights, GitHub links
  → Filter buttons re-filter the already-fetched array (no re-fetch)
```

### 4. Contact Form Flow

```
User fills the form
  → submits → handleSubmit()
  → sendContact(formData) called
  → Axios POST /api/contact/ with { name, email, subject, message }
  → FastAPI contact.py validates with Pydantic
  → Returns { success: true, message: "..." }
  → React shows success message
  → Form clears
```

### 5. CORS Handling

Vite dev server proxies `/api/*` → `http://localhost:8000` so CORS is transparent in development. In production, set `allow_origins` in `main.py` to your deployed frontend domain.

---

## File Structure

```
swayam-portfolio/
│
├── backend/                      # FastAPI application
│   ├── main.py                   # App entry, CORS, router registration
│   ├── requirements.txt          # Python dependencies
│   └── routers/
│       ├── __init__.py
│       ├── profile.py            # GET /api/profile/
│       ├── projects.py           # GET /api/projects/, /featured, /{id}
│       ├── skills.py             # GET /api/skills/, /categories
│       └── contact.py            # POST /api/contact/
│
└── frontend/                     # React + Vite application
    ├── index.html                # HTML shell with Google Fonts
    ├── vite.config.js            # Vite + proxy config
    ├── package.json              # npm dependencies
    └── src/
        ├── main.jsx              # React root
        ├── App.jsx               # Layout — assembles all sections
        ├── index.css             # Global CSS design tokens
        ├── services/
        │   └── api.js            # Axios API helpers
        └── components/
            ├── Navbar.jsx        # Sticky animated navbar
            ├── Hero.jsx          # Landing section
            ├── Experience.jsx    # Internship + education timeline
            ├── Skills.jsx        # Filterable skills with progress bars
            ├── Projects.jsx      # Project cards with tech badges
            ├── Contact.jsx       # Contact form
            └── Footer.jsx        # Footer
```

---

## Data Models (Pydantic)

| Model              | Fields                                                       |
|--------------------|--------------------------------------------------------------|
| `ProfileResponse`  | name, title, tagline, bio, location, email, phone, cgpa, degree, university, graduation, social_links, available_for_hire |
| `Project`          | id, title, description, highlights, tech_stack, category, featured, github_url, live_url, ai_powered |
| `Skill`            | name, category, level (1–100)                                |
| `ContactMessage`   | name, email, subject, message                                |
| `ContactResponse`  | success (bool), message (str)                                |

---

## API Endpoints Summary

| Method | Endpoint                  | Description                        |
|--------|---------------------------|------------------------------------|
| GET    | /                         | Health check                       |
| GET    | /health                   | Liveness probe                     |
| GET    | /api/profile/             | Full profile JSON                  |
| GET    | /api/projects/            | All projects                       |
| GET    | /api/projects/featured    | Featured projects only             |
| GET    | /api/projects/{id}        | Single project by ID               |
| GET    | /api/skills/              | All skills with levels             |
| GET    | /api/skills/categories    | List of skill categories           |
| POST   | /api/contact/             | Submit contact message             |

Interactive Swagger UI available at: `http://localhost:8000/docs`
ReDoc available at: `http://localhost:8000/redoc`
