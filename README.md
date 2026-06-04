# Swayam Mohanty — Developer Portfolio

> Full-stack portfolio built with **React** (frontend) and **FastAPI** (backend).  
> Dark editorial aesthetic · Smooth Framer Motion animations · REST API driven

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React 18, Vite, Framer Motion, Axios, Lucide React |
| Backend   | Python 3.11+, FastAPI, Uvicorn, Pydantic v2 |
| Styling   | Pure CSS with CSS variables (no Tailwind — custom design system) |
| Fonts     | Syne (display) + DM Sans (body) via Google Fonts |

---

## Project Structure

```
swayam-portfolio/
├── backend/
│   ├── main.py              # FastAPI app, CORS, routers
│   ├── requirements.txt     # Python deps
│   └── routers/
│       ├── profile.py       # GET /api/profile/
│       ├── projects.py      # GET /api/projects/
│       ├── skills.py        # GET /api/skills/
│       └── contact.py       # POST /api/contact/
│
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── services/api.js
│       └── components/
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── Experience.jsx
│           ├── Skills.jsx
│           ├── Projects.jsx
│           ├── Contact.jsx
│           └── Footer.jsx
│
├── PROJECT_FLOW.md          # Full architecture + data flow
└── README.md                # This file
```

---

## Getting Started

### Prerequisites

- Python 3.11+
- Node.js 18+
- npm or yarn

### 1. Clone the repo

```bash
git clone https://github.com/swayammohanty45/portfolio.git
cd swayam-portfolio
```

### 2. Run the Backend

```bash
cd backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload --port 8000
```

Backend runs at: `http://localhost:8000`  
Swagger UI: `http://localhost:8000/docs`  
ReDoc: `http://localhost:8000/redoc`

### 3. Run the Frontend

Open a new terminal:

```bash
cd frontend

# Install npm packages
npm install

# Start the dev server
npm run dev
```

Frontend runs at: `http://localhost:5173`

> The Vite proxy automatically forwards all `/api/*` requests to the FastAPI backend — no CORS issues in development.

---

## API Endpoints

| Method | Endpoint                    | Response                        |
|--------|-----------------------------|---------------------------------|
| GET    | `/`                         | Health check                    |
| GET    | `/api/profile/`             | Full profile data               |
| GET    | `/api/projects/`            | All 4 projects                  |
| GET    | `/api/projects/featured`    | Featured projects only          |
| GET    | `/api/projects/{id}`        | Single project                  |
| GET    | `/api/skills/`              | All skills with levels          |
| GET    | `/api/skills/categories`    | Skill category list             |
| POST   | `/api/contact/`             | Submit a message                |

---

## Features

- **Animated hero section** with live availability badge and social links
- **Filterable skills** — category filter tabs with animated progress bars
- **Project cards** — AI-powered badge, tech stack tags, GitHub links
- **Timeline** — internship + education displayed side-by-side
- **Contact form** — connected to FastAPI POST endpoint with success/error feedback
- **Responsive** — works on mobile, tablet, and desktop
- **Dark editorial design** — Syne font, green accents, noise texture overlay

---

## Deployment

### Backend (Railway / Render / EC2)
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```
Update `allow_origins` in `main.py` to your frontend domain.

### Frontend (Vercel / Netlify)
```bash
npm run build
# Deploy the dist/ folder
```
Set `VITE_API_URL` environment variable to your backend URL and update `vite.config.js` proxy target accordingly.

---

## Author

**Swayam Mohanty**  
MCA · Silicon University, Bhubaneswar (Graduating May 2026)  
📧 Swayammohanty26@gmail.com  
📱 +91-7077418558  
🔗 [LinkedIn](http://www.linkedin.com/in/swayam-mohanty-0553a2388) · [GitHub](https://github.com/swayammohanty45?tab=repositories)
