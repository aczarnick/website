
# Project Requirements Document: Personal Website

## 1. Project Overview
**Objective**: Build a responsive personal website to showcase professional experience, technical projects, skills, and provide contact information.

**Primary Goals**:
- Serve as a personal/professional branding platform.
- Improve discoverability and SEO (searchability via Google).
- Allow visitors to view resume, portfolio, and contact you.

---

## 2. Features & Functionality

### 🧑‍💼 About Me
- Brief biography
- Photo
- Professional background summary

### 📜 Resume
- Viewable and downloadable PDF resume
- Option to update dynamically from a structured data source (e.g., JSON or Markdown)

### 🛠 Portfolio / Projects
- List of notable projects
- Each project page includes:
  - Title
  - Description
  - Tech stack
  - Screenshots / Demos
  - GitHub link or live demo

### ✍️ Blog
- Posts in Markdown or CMS-backed
- Syntax highlighting for code
- Categories/tags

### 📬 Contact
- Contact form (email integration)
- Social media links (LinkedIn, GitHub, Twitter, etc.)

### ⚙️ Admin Panel (Optional)
- For managing blog posts or content updates without editing code

---

## 3. Technical Requirements

### Frontend
- Framework: `Next.js` (with React)
- Styling: `Tailwind CSS`
- Animations: Basic CSS transitions (fade, slide, etc.)

### Blog System
- Content format: `MDX` (Markdown + JSX)
- Posts stored in the repo (`/content/blog`)
- Features: Syntax highlighting, optional tags/categories

### Contact Form
- Service: `Formspree` (handles form submission without backend)
- Fields: Name, Email, Message
- Spam protection: Honeypot field

### Hosting & Deployment
- Hosting: Self-hosted on personal server using `Docker Compose`
- Domain: `czarnick.xyz`
- Deployment: Manual for now (future option to automate with GitHub Actions)

### Design
- Style: Clean, minimalist with **dark mode** and **light mode** toggle
- Layout: Mobile-first, responsive grid layout
- Accessibility: WCAG compliance (semantic HTML, keyboard navigation, good color contrast)

---

## 4. Non-Functional Requirements

- Fast load times (under 1s for key routes)
- SEO optimized
- Analytics (Google Analytics, Plausible, etc.)
- GDPR-compliant contact form

---

## 5. Deliverables

- Live website with custom domain
- GitHub repository with full source code
- Optional: Documentation for future updates

---

## 6. Timeline (Example)

| Week | Milestone                                 |
|------|-------------------------------------------|
| 1    | Design mockups + tech stack finalized     |
| 2    | Initial layout & routing                  |
| 3    | About, Resume, Portfolio pages complete   |
| 4    | Contact form + deployment                 |
| 5    | Polish, animations, SEO & launch          |
