import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, PencilIcon } from "lucide-react";

export const DATA = {
  name: "Aayush Kumar",
  initials: "AK",
  url: "https://aayush-kr.vercel.app",
  location: "Kolkata, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  description:
    "Full Stack Developer with a passion for building high-performance products and shipping production-ready code.",
  summary:
    "I am a Full Stack Developer with 1.5 years of experience focused on building and scaling software from the very first line of code. Currently at Lewkk, a Bengaluru based startup, I led the development of the end to end infrastructure for a creator platform that now supports over 500 active users. My expertise covers the entire development lifecycle, from architecting backend APIs and managing databases to crafting premium frontend experiences and handling production ready deployments. I enjoy solving complex technical challenges, whether that means streamlining DevOps workflows or integrating AI to build smarter and faster applications.",
  avatarUrl: "https://ik.imagekit.io/enhyxksyys/myimg.png",

  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "React Native",
      "Zustand",
    ],
    backend: ["Node.js", "Express.js", "Supabase", "AWS", "Cloudinary"],
    database: ["PostgreSQL", "MongoDB", "SQL"],
    languages: ["C++", "Java", "Python", "TypeScript", "JavaScript"],
    tools: ["Git", "GitHub", "Vite", "pnpm", "CI/CD", "Postman"],
  },

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
      badges: ["Bengaluru", "On-site"],
      location: "Bengaluru, India",
      title: "Associate Software Developer",
      logoUrl: "https://ik.imagekit.io/enhyxksyys/favicon.png",
      start: "May 2025",
      end: "Present",
      description:
        "I joined as one of the early developers to architect and launch the entire infrastructure for a creator-focused platform. I built the core publishing engine and high-performance media pipelines that now support over 500 active creators. My daily work involves scaling backend APIs, managing production servers, and ensuring everything from authentication to real-time analytics runs smoothly for our growing user base.",
    },
    {
      company: "Envizn Labs",
      href: "#",
      badges: ["Internship"],
      location: "New Town, India",
      title: "Full Stack Development Intern",
      logoUrl: "https://ik.imagekit.io/enhyxksyys/envizn_logo.png",
      start: "Dec 2024",
      end: "Mar 2025",
      description:
        "During this internship, I worked on both React applications and Webflow-based projects to deliver high-quality web experiences. I was responsible for implementing responsive designs, conducting code reviews, and working closely with the team to meet tight production deadlines.",
    },
    {
      company: "V-Book",
      href: "#",
      badges: ["Internship"],
      location: "West Bengal, India",
      title: "Frontend Developer Intern",
      logoUrl: "https://ik.imagekit.io/enhyxksyys/1689522514704.jpg",
      start: "Jan 2024",
      end: "Mar 2024",
      description:
        "I helped develop and launch the company’s main website using the MERN stack. My focus was on building a clean, functional frontend and ensuring a smooth user experience from the first visit.",
    },
  ],

  education: [
    {
      school: "Techno International Newtown",
      href: "#",
      degree: "B.Tech in Engineering (CGPA: 7.94)",
      logoUrl: "https://tint.edu.in/images/tict_logo_new_2019.png",
      start: "2021",
      end: "2025",
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
        "My team and I built a concept for an AI-powered telemedicine kiosk. We ranked 6th out of 130 teams overall and 1st in our specific group during the internal college round of the Smart India Hackathon.",
      image: "",
      links: [],
    },
  ],
} as const;
