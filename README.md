# Raviteja Medoju - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Software Engineer with 5+ years of expertise in Java, Spring Boot, React, and AWS.

## 🚀 Features

- ✨ **Modern UI/UX** with smooth animations and micro-interactions
- 🌓 **Dark Mode** with persistent theme switching
- 📊 **Animated Stats** with scroll-triggered counter animations
- ⌨️ **Typing Effect** displaying multiple role titles
- 💫 **3D Card Effects** with perspective transforms
- 🎨 **Animated Gradient Background** with floating orbs
- 🏷️ **Interactive Skills Tags** with hover effects
- 📱 **Fully Responsive** design for all devices
- ♿ **Accessible** with ARIA labels and reduced motion support
- ⚡ **Performance Optimized** with passive listeners and GPU acceleration

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Google Fonts (Outfit, JetBrains Mono)
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Raviteja-medoju/MyPortfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🎨 Customization

### Update Personal Information

1. **Home Section** (`src/components/HomeSection.jsx`):
   - Update name, bio, and skills
   - Modify typed roles array

2. **About Section** (`src/components/AboutSection.jsx`):
   - Update education and certifications
   - Add/replace certificate images in `public/certificates/`

3. **Experience Section** (`src/components/ExperienceSection.jsx`):
   - Modify JOBS array with your experience

4. **Skills Section** (`src/components/SkillsSection.jsx`):
   - Update skills groups and projects

5. **Contact Section** (`src/components/ContactSection.jsx`):
   - Update contact information and links

### Theme Colors

Modify CSS variables in `src/index.css`:

```css
:root {
  --accent: #3b82f6;      /* Primary blue */
  --accent-2: #8b5cf6;    /* Secondary purple */
  /* ... other variables */
}
```

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── certificates/       # Certificate images
│   ├── images/            # Profile photos
│   ├── projects/          # Project screenshots
│   └── rm-logo.svg        # Logo
├── src/
│   ├── components/        # React components
│   ├── context/          # Theme context
│   ├── hooks/            # Custom hooks
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── package.json
└── vite.config.js
```

## 🎯 Key Components

- `AnimatedBackground` - Floating gradient orbs with mesh overlay
- `StatsSection` - Animated counters with scroll trigger
- `ThemeToggle` - Dark/light mode switcher
- `ScrollToTop` - Smooth scroll to top button
- `SpringBootCode` - Animated code editor demo
- `ScrollProgress` - Page scroll indicator

## 🌐 Live Demo

Visit: [https://raviteja-medoju.github.io/MyPortfolio](https://raviteja-medoju.github.io/MyPortfolio)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 👤 Author

**Raviteja Medoju**
- Email: ravitejachary.work@gmail.com
- LinkedIn: [linkedin.com/in/ravi-teja-medoju-7a8a0b19a](https://www.linkedin.com/in/ravi-teja-medoju-7a8a0b19a/)
- Location: Dallas, TX

## 🙏 Acknowledgments

- React and Vite teams for excellent developer tools
- Google Fonts for beautiful typography
- GitHub Pages for free hosting

---

⭐ **Star this repo if you find it helpful!** ⭐

