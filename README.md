# Modern Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?style=flat&logo=next.js)](https://nextjs.org/)

A clean, modern portfolio website template built for developers. This project uses Next.js 16, React 19, and TypeScript to create a fast, responsive portfolio with smooth animations and a built-in blog.

**Built by Aayush**

## Features

This portfolio template includes everything you need to showcase your work:

- Single configuration file for easy customization
- Responsive design that works on all devices
- Dark mode support with theme switching
- Smooth page animations using Framer Motion
- Built-in blog system with MDX support
- Modern UI components from shadcn/ui
- Optimized for performance and SEO
- Ready to deploy on Vercel

## Technology Stack

- [Next.js 16](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better developer experience
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

## Getting Started

### Prerequisites

You'll need Node.js 18 or later installed on your machine.

### Installation

Clone the repository:

```bash
git clone https://github.com/ayush5718/aayush-portfolio.git
cd aayush-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

## Configuration

All portfolio content is managed through a single configuration file located at `src/data/resume.tsx`. This file contains:

**Personal Information**
- Name, bio, and profile picture
- Contact information
- Social media links

**Professional Experience**
- Work history with company details
- Job titles and descriptions
- Employment dates

**Education**
- Degrees and institutions
- Graduation dates

**Projects**
- Project titles and descriptions
- Technologies used
- Links to live demos and repositories

**Skills**
- Technical skills and tools
- Organized by category

Simply edit this file to update your portfolio content. No need to touch any other files for content changes.

## Adding Blog Posts

Create new blog posts by adding MDX files to the content directory. The blog system will automatically detect and display new posts. Each post supports:

- Markdown formatting
- Syntax highlighting for code blocks
- Embedded images and media
- Custom React components

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

## Deployment

### Deploying to Vercel

This project is optimized for Vercel deployment. Connect your GitHub repository to Vercel and it will automatically deploy your portfolio.

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your portfolio will be live in minutes

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── animations/   # Custom animation components
│   │   └── ui/          # UI components from shadcn/ui
│   ├── data/            # Configuration and content
│   └── lib/             # Utility functions
├── public/              # Static assets
└── content/             # Blog posts (MDX files)
```

## Customization

The portfolio uses CSS variables for theming, making it easy to customize colors. Edit `src/app/globals.css` to change:

- Color scheme
- Typography
- Spacing
- Border radius

All components are built with TailwindCSS, so you can modify styling by editing the component files directly.

## License

This project is open source and available under the MIT License.

## Acknowledgments

This portfolio uses several open source projects:

- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Built with care by Aayush
