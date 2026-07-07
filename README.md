# 🎓 DTW Tutorials

**Nigeria's Leading Education Hub** — Free JAMB, WAEC & Post UTME preparation resources, CBT practice apps, and expert tutorials across 13+ subjects.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Federaefe%2FDTWturorials)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdtwtutorials.com&style=flat-square&label=dtwtutorials.com)](https://dtwtutorials.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](#license)

---

## ✨ Overview

DTW Tutorials (Destined To Win) is an educational platform empowering Nigerian students with high-quality, accessible learning resources. This repository contains the redesigned website — built from scratch as a modern, mobile-first static site.

### 🔗 Live Site
**[dtwtutorials.com](https://dtwtutorials.com)**

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 📱 **Mobile-First Design** | Optimized for the way Nigerian students actually browse — on their phones |
| 🎨 **Modern UI** | Warm gradient aesthetic, smooth animations, glassmorphism navigation |
| ⚡ **Zero Dependencies** | Pure HTML, CSS, and vanilla JavaScript — no frameworks, no build step |
| 🔍 **SEO Optimized** | 5 JSON-LD schemas, Open Graph, Twitter Cards, 20+ targeted keywords |
| 📊 **Interactive Elements** | Typewriter hero, animated counters, scroll reveals, carousels |
| 📝 **FormSpree Contact** | Spam-protected contact form with client-side validation |
| 🛡️ **Security Headers** | XSS protection, content-type sniffing prevention, referrer policy |
| ♿ **Accessible** | ARIA labels, semantic HTML5, keyboard navigation, reduced-motion support |

---

## 📁 Project Structure

```
DTWtutorials.com/
├── index.html              # Main homepage (10 sections)
├── css/
│   └── styles.css          # Complete design system (900+ lines)
├── js/
│   └── main.js             # Interactivity (12 feature modules)
├── assets/
│   └── images/
│       └── og-cover.png    # Social media share image
├── robots.txt              # Search engine crawler directives
├── sitemap.xml             # XML sitemap for Google/Bing
├── vercel.json             # Deployment config + security headers
├── .gitignore              # Git ignore rules
└── legacy/                 # Old WordPress export (git-ignored)
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#FF6B35` | CTAs, highlights, brand identity |
| Secondary | `#F7931E` | Gradient endpoints, accents |
| Accent | `#10B981` | Success states, feature checkmarks |
| Dark | `#0A1628` | Headings, high-contrast text |
| Blue | `#667EEA` | Secondary gradient, variety |
| Purple | `#764BA2` | Secondary gradient endpoint |

### Typography

- **Headings:** [Inter](https://fonts.google.com/specimen/Inter) (700–800 weight)
- **Body:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) (400–500 weight)
- Fluid sizing with `clamp()` for seamless scaling

### Breakpoints

| Name | Width | Target |
|------|-------|--------|
| Base | 0px+ | Mobile phones |
| SM | 480px+ | Large phones |
| MD | 768px+ | Tablets |
| LG | 1024px+ | Laptops |
| XL | 1280px+ | Desktops |

---

## 🏗️ Homepage Sections

1. **Sticky Navigation** — Frosted glass blur, animated hamburger toggle
2. **Hero** — Gradient background, typewriter effect (5 rotating phrases), floating shapes
3. **Stats Counter** — Animated count-up (10,000+ students, 200+ tutorials, 13+ subjects, 3 apps)
4. **Subject Browser** — 13 subject cards in 3 groups (Sciences, Arts, Technology)
5. **CBT Apps Showcase** — JAMB, WAEC, JSCE-BECE app cards on dark background
6. **Latest Articles** — 6 article cards with real content from the blog
7. **Video Carousel** — 6 YouTube embeds with horizontal scroll + arrow controls
8. **Testimonials** — 4 rotating student stories with dot navigation
9. **Contact Form** — FormSpree-powered with honeypot spam protection
10. **Footer** — 4-column grid with social links and site navigation

---

## 🔍 SEO Strategy

### Structured Data (JSON-LD)
- `EducationalOrganization` — founder, social profiles, area served
- `WebSite` + `SearchAction` — Google sitelinks search box eligibility
- `FAQPage` — 4 Q&As for rich snippet results
- `BreadcrumbList` — Navigation trail

### Target Keywords (Top 20)
JAMB past questions and answers, WAEC past questions, JAMB CBT practice app, Post UTME form, JAMB preparation, WAEC syllabus, Nigerian university admission, JAMB subject combination, best CBT app Nigeria, free JAMB past questions, WAEC GCE past questions, Post UTME cut off marks, Nigerian education tutorials, BECE past questions, NECO past questions, Nigerian scholarship, university admission requirements, online tutorials Nigeria, JAMB score calculator, DTW tutorials CBT app

---

## 🛠️ Local Development

No build step required. Just open the file:

```bash
# Clone the repo
git clone https://github.com/ederaefe/DTWturorials.git
cd DTWturorials

# Open in browser
# Option 1: Direct file
start index.html          # Windows
open index.html           # macOS

# Option 2: Local server (if you have Python)
python -m http.server 8000

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## 🚢 Deployment (Vercel)

| Setting | Value |
|---------|-------|
| Framework Preset | `Other` |
| Root Directory | `./` |
| Build Command | *(leave empty)* |
| Output Directory | `./` |

The `vercel.json` handles security headers, asset caching, and clean URLs automatically.

---

## 📧 Contact Form

The contact form uses [FormSpree](https://formspree.io) with the `@formspree/ajax` SDK (CDN). No server-side code required.

- **Endpoint:** `https://formspree.io/f/xkolekgd`
- **Features:** Client-side validation, honeypot spam protection, success/error states
- **SDK:** Loaded via `<script src="https://unpkg.com/@formspree/ajax@1" defer>`

---

## 📱 CBT Practice Apps

| App | Exam | Link |
|-----|------|------|
| JAMB CBT Practice | UTME | [Download](https://dtwtutorials.com/dtw-tutorials-jamb-cbt-app-download-the-best-jamb-cbt-app/) |
| WAEC/WASSCE Practice | SSCE | [Download](https://dtwtutorials.com/dtw-tutorials-waec-wassce-cbt-app-2025-download-the-best-ssce-cbt-app/) |
| JSCE — BECE Practice | Junior WAEC | [Download](https://dtwtutorials.com/dtw-tutorials-jsce-bece-cbt-app-2025-download-the-best-junior-waec-cbt-app/) |

---

## 🌐 Social Links

- [Facebook](https://web.facebook.com/dtwtutorials/)
- [X (Twitter)](https://twitter.com/dtwtutorialsng)
- [YouTube](https://www.youtube.com/dtwtutorials)
- [Instagram](https://www.instagram.com/dtwtutorials/)
- [Online Store](https://dtwedustore.com/)

---

## 📄 License

© 2026 DTW Tutorials — Destined To Win. All rights reserved.

Built with ❤️ for Nigerian students.
