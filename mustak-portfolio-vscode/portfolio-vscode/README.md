# Shaik Mohammed Mustak – Portfolio

A premium dark-themed personal portfolio website built with React + Vite + TypeScript.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 6** (bundler)
- **Tailwind CSS v4** (utility-first styling)
- **Framer Motion** (animations)
- **Lucide React** + **React Icons** (icons)

## How to Run in VS Code

### Prerequisites

Make sure you have **Node.js 18+** installed.  
Download from: https://nodejs.org

### Steps

1. **Open the folder in VS Code**
   - `File` → `Open Folder` → select `portfolio-vscode`

2. **Open the terminal**
   - Press `` Ctrl + ` `` (backtick)

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the dev server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Go to `http://localhost:5173`

### Build for production

```bash
npm run build
```

The output will be in the `dist/` folder — ready to upload to any static host (GitHub Pages, Netlify, Vercel, etc.).

---

## How to Edit Your Portfolio

All editable files are in `src/components/sections/`. Look for `// EDIT:` comments.

| File | What to change |
|------|----------------|
| `Hero.tsx` | Name, rotating titles, profile photo |
| `About.tsx` | Bio paragraph, stats (skills count, certificates count) |
| `Skills.tsx` | Skill names and proficiency percentages |
| `Certificates.tsx` | Certificate titles, issuers, dates, images |
| `Contact.tsx` | LinkedIn URL |
| `Footer.tsx` | Your name and footer text |

### Replacing your profile photo

1. Copy your photo into `src/assets/` and name it `profile.png` (or any name you prefer)
2. Open `src/components/sections/Hero.tsx`
3. Update the import at the top: `import profilePhoto from "@assets/your-photo-name.png";`

### Adding / replacing certificates

1. Copy your certificate images into `src/assets/` (e.g. `mycert.jpg`)
2. Open `src/components/sections/Certificates.tsx`
3. Import your image: `import myCert from "@assets/mycert.jpg";`
4. Add or update an entry in the `certificates` array

---

## Project Structure

```
portfolio-vscode/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/             ← All images (profile, certificates)
│   ├── components/
│   │   ├── LoadingScreen.tsx
│   │   ├── SectionTitle.tsx
│   │   └── sections/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Certificates.tsx
│   │       ├── Projects.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.css           ← Global styles + Tailwind
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
