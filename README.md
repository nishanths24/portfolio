# Nishanth S - Portfolio Website

A modern, responsive personal portfolio website built with React, Next.js, and Tailwind CSS. Features a dark cyberpunk-inspired theme with smooth animations and professional UI.

## 🚀 Features

- **Modern Design**: Dark theme with cyan/blue gradient accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and transitions throughout
- **Interactive UI**: Hover effects, scroll animations, and dynamic content
- **Sticky Navigation**: Active section highlighting
- **Loading Animation**: Professional loading screen
- **Role Rotation**: Animated role display in hero section
- **Project Showcase**: Featured projects with tech stack
- **Education Timeline**: Visual timeline of educational background
- **Contact Form**: Functional contact form with validation
- **Social Links**: LinkedIn, GitHub, Email integration
- **SEO Optimized**: Meta tags and semantic HTML

## 📋 Sections

1. **Hero Section** - Animated introduction with rotating roles
2. **About Me** - Professional background and interests
3. **Skills** - Categorized technical skills with icons
4. **Projects** - Featured projects with descriptions and links
5. **Education** - Timeline format educational background
6. **Strengths** - Key professional strengths
7. **Contact** - Contact information and form
8. **Footer** - Social links and copyright

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Library**: React 18
- **Styling**: Tailwind CSS 3.3
- **Icons**: Lucide React
- **Font**: Space Grotesk (Google Fonts)

## 📦 Installation

1. **Clone or extract the project**

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:3000`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## 🎨 Customization

### Update Personal Information

Edit the following in `portfolio.jsx`:

1. **Name and Role**: Line ~60-70 (Hero section)
2. **About Me**: Line ~250-280
3. **Skills**: Line ~140-150 (skills object)
4. **Projects**: Line ~155-175 (projects array)
5. **Education**: Line ~180-200 (education array)
6. **Contact Info**: Line ~600-650

### Change Colors

Edit Tailwind classes in `portfolio.jsx`:
- Primary: `cyan-500`, `cyan-400`
- Secondary: `blue-500`, `blue-400`
- Background: `#0a0a0f`

Or modify `tailwind.config.js` for global changes.

### Add Resume Download

Replace the placeholder button functionality:
```javascript
<button
  onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
  className="..."
>
  Download Resume
</button>
```

Add your resume PDF to the `public` folder.

### Update Social Links

Replace placeholder URLs in:
- Hero section (line ~320)
- Footer (line ~730)
- Contact section (line ~650)

### Connect Contact Form

Add form handling logic:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  // Add your form handling logic
  // e.g., EmailJS, Formspree, or custom API
};
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Optimized with Next.js automatic code splitting
- Lazy loading of components
- Optimized images and assets
- Minimal dependencies
- CSS animations (no heavy JS libraries)

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Project Structure

```
portfolio/
├── pages/
│   ├── _app.js          # App wrapper
│   └── index.js         # Home page
├── styles/
│   └── globals.css      # Global styles
├── portfolio.jsx        # Main portfolio component
├── package.json         # Dependencies
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 💡 Tips

1. **Add Google Analytics**: Insert tracking code in `pages/_app.js`
2. **SEO**: Add meta tags in `pages/index.js`
3. **Blog**: Create a `blog` folder in pages for blog posts
4. **Dark/Light Mode**: Add theme toggle in navigation
5. **Internationalization**: Use next-i18next for multiple languages

## 🐛 Troubleshooting

**Styles not loading**:
- Clear `.next` folder and rebuild
- Check Tailwind configuration paths

**Icons not showing**:
- Verify lucide-react is installed
- Check import statements

**Animations not working**:
- Check CSS animation classes
- Verify Tailwind JIT mode

## 📞 Contact

For questions or support, reach out via:
- Email: nishanth@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 📝 License

This project is open source and available under the MIT License.

## 🎉 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons by Lucide React
- Fonts by Google Fonts
- Built with Next.js and Tailwind CSS

---

**Made with ❤️ by Nishanth S**
