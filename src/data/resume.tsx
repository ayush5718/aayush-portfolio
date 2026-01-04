import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
    { href: "/projects", icon: NotebookIcon, label: "Projects" },
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
      start: "Oct 2025",
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
      title: "VTRON AI – Virtual Try-On Platform",
      href: "https://virtualtryon.in",
      dates: "2024 – Present",
      active: true,
      description:
        "An AI-powered virtual try-on SaaS that replaces physical photoshoots with realistic, high-fidelity model renders. Built a serverless image pipeline ensuring 1:1 texture preservation, realistic garment draping, and scalable B2B workflows with secure authentication and credit-based usage.",
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
      title: "MonoCRM – Modern Sales CRM",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "A high-performance CRM platform featuring a dynamic Kanban sales pipeline, real-time lead tracking, and interactive KPI dashboards. Implemented global state management using Zustand and analytics visualization using Recharts.",
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
      title: "SpaceLabs Creative Studios – Landing Page",
      href: "https://spacelabs-dusky.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Designed and developed a modern, high-impact landing page for SpaceLabs Creative Studios, a creative agency focused on science and technology brands. Built with a strong emphasis on motion, storytelling, and performance, featuring smooth scroll-based animations, clean typography, and a responsive layout that clearly communicates brand value.",
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
