import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, PencilIcon } from "lucide-react";

export const DATA = {
  name: "Aayush Kumar",
  initials: "AK",
  url: "https://yourdomain.com",
  location: "Kolkata, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  description:
    "Full Stack Developer building scalable SaaS products with modern web technologies and AI.",
  summary:
    "I am a B.Tech student specializing in full-stack development with a strong focus on modern SaaS platforms. I’ve built AI-powered and enterprise-grade applications using Next.js, React, TypeScript, and Supabase. My experience includes building creator platforms, AI virtual try-on systems, and CRM dashboards. I enjoy turning complex ideas into clean, scalable products and continuously learning new technologies.",
  avatarUrl: "https://ik.imagekit.io/enhyxksyys/myimg.png",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Supabase",
    "Tailwind CSS",
    "React Native",
    "Zustand",
    "PostgreSQL",
    "SQL",
    "C++",
    "CI/CD",
    "Cloudinary",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: NotebookIcon, label: "Projects" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
  ],

  contact: {
    email: "ayushbhardwaj9504@gmail.com",
    tel: "+91-6205183328",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ayush5718",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aayush-kumar-3880ab22a/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AyushKu35978319",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ayushbhardwaj9504@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Lewkk.in",
      href: "https://lewkk.in",
      badges: ["On-site"],
      location: "India",
      title: "Full Stack Developer",
      logoUrl: "https://ik.imagekit.io/enhyxksyys/favicon.png",
      start: "May 2025",
      end: "Present",
      description:
        "Built and launched a creator platform from scratch including authentication, creator dashboards, outfit uploads, and publishing workflows. Developed secure and scalable backend APIs, optimized media upload pipelines, and contributed to onboarding 500+ creators while improving platform performance and deployment workflows.",
    },
    {
      company: "Envizn Labs",
      href: "#",
      badges: ["Internship"],
      location: "India",
      title: "Web Developer Intern",
      logoUrl: "https://ik.imagekit.io/enhyxksyys/envizn_logo.png",
      start: "Dec 2024",
      end: "Mar 2025",
      description:
        "Worked on Webflow and React-based projects, delivering responsive and high-quality web experiences. Collaborated with teams on UI implementation, code reviews, and project delivery under tight deadlines.",
    },
  ],

  education: [
    {
      school: "Techno International Newtown",
      href: "#",
      degree: "B.Tech in Engineering (CGPA: 7.94)",
      logoUrl: "https://tint.edu.in/images/tict_logo_new_2019.png",
      start: "2025",
      end: "Present",
    },
  ],

  projects: [
    {
      title: "VTRON AI Virtual Try-On Platform",
      href: "https://virtualtryon.in",
      dates: "2024 – Present",
      active: true,
      description:
        "I developed an AI-driven SaaS that allows users to try on clothes virtually, replacing the need for physical photoshoots. I built a custom serverless pipeline to handle model renders with high texture quality and implemented a credit-based system for B2B users.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "AI Image APIs",
        "Serverless",
      ],
      links: [
        {
          type: "Website",
          href: "https://virtualtryon.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/enhyxksyys/vtron_project.png",
      video: "",
    },
    {
      title: "JSONPro Developer Tooling Platform",
      href: "https://jsonpro.designbyte.dev",
      dates: "2025",
      active: true,
      description:
        "I built this advanced tool to help developers work with JSON data more efficiently. It includes powerful features for diffing payloads, visualizing data in charts, and generating curl commands instantly. I focused on making the interface fast and modular using a component-driven approach with React and TypeScript.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "pnpm",
        "Component-Driven Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://jsonpro.designbyte.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/enhyxksyys/Screenshot%202026-01-10%20183357.png",
      video: "",
    },
    {
      title: "MonoCRM Modern Sales CRM",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "I created this CRM to provide teams with a clear view of their sales performance. It features a dynamic Kanban board for lead tracking and real-time KPI dashboards. I used Zustand for smooth state management and Recharts to build the interactive analytics visualizations.",
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "Zustand",
        "Recharts",
      ],
      links: [
        {
          type: "Website",
          href: "https://sales-crm-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/enhyxksyys/monoCRM_project.png",
      video: "",
    },
    {
      title: "SpaceLabs Creative Studios Landing Page",
      href: "https://spacelabs-dusky.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "I designed and built this high-impact landing page for a creative agency. I focused heavily on storytelling and motion, using smooth scroll-based animations and clean typography to create a premium experience that effectively communicates the brand's value.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://spacelabs-dusky.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/enhyxksyys/spacelabs-landingpage.png",
      video: "",
    },
    {
      title: "WedScribe Online Wedding Biodata Maker",
      href: "https://wedscribe.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "I built this platform to help people create elegant and shareable Indian wedding biodatas online. I designed a simple, step-by-step form workflow to make the complex process of entering family and personal details feel easy and polished for users.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://wedscribe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/enhyxksyys/wedscribe-landingpage.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Smart India Hackathon (Internal)",
      dates: "2023",
      location: "Kolkata, India",
      description:
        "Ranked 6th out of 130 teams and 1st in our group for proposing an AI-powered telemedicine kiosk system.",
      image: "",
      links: [],
    },
  ],
} as const;
