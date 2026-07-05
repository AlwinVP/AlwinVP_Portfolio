import {
  SiPython, SiJavascript, SiC, SiReact, SiFlutter, SiFirebase, SiUnity,
  SiFlask, SiGit, SiGithub, SiBlender, SiFigma, SiAdobephotoshopclassic,
  SiAndroidstudio, SiOpenjdk, SiSharp,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const profile = {
  name: "Alwin V P",
  logo: "ALWIN",
  role: "AR / VR Developer",
  subRole: "Computer Science & Design Engineer",
  tagline:
    "I build immersive AR/VR experiences, scalable web applications, and innovative digital solutions.",
  email: "alwinvp@example.com",
  phone: "+91 98765 43210",
  location: "Kerala, India",
  github: "https://github.com/alwinvp",
  linkedin: "https://linkedin.com/in/alwinvp",
  resume: "/resume.pdf",
};

export const about = {
  summary:
    "Computer Science & Design graduate passionate about crafting immersive AR/VR experiences and modern digital products. I combine engineering rigor with design intuition to ship polished apps across Unity, React, Flutter, and Python.",
  roles: [
    "AR/VR Developer",
    "Unity Developer",
    "React Developer",
    "Flutter Developer",
    "Python Developer",
  ],
  stats: [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Leadership Positions", value: "4" },
    { label: "Internships", value: "2" },
  ],
};

type Tech = { name: string; icon: IconType };
export const techStack: { category: string; items: Tech[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiOpenjdk },
      { name: "C#", icon: SiSharp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C", icon: SiC },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", icon: SiReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Firebase", icon: SiFirebase },
      { name: "Unity", icon: SiUnity },
      { name: "AR Foundation", icon: SiUnity },
      { name: "ARCore", icon: SiAndroidstudio },
      { name: "Vuforia", icon: SiUnity },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Blender", icon: SiBlender },
      { name: "Figma", icon: SiFigma },
      { name: "Photoshop", icon: SiAdobephotoshopclassic },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Unity VCS", icon: SiUnity },
    ],
  },
];

export const projects = [
  {
    title: "ARIVU",
    description:
      "An AR learning platform bringing textbook concepts to life through interactive 3D visualizations for students.",
    tech: ["Unity", "AR Foundation", "C#", "Blender"],
    github: "https://github.com/alwinvp/arivu",
    demo: "",
  },
  {
    title: "HOLOHOLA",
    description:
      "A holographic communication prototype exploring mixed-reality avatars for remote conversations.",
    tech: ["Unity", "ARCore", "C#"],
    github: "https://github.com/alwinvp/holohola",
    demo: "",
  },
  {
    title: "PURRSISTANCE",
    description:
      "A cozy 2D game built to raise awareness about stray animal welfare, wrapped in delightful pixel art.",
    tech: ["Unity", "C#", "Aseprite"],
    github: "https://github.com/alwinvp/purrsistance",
    demo: "",
  },
  {
    title: "MetaHunt",
    description:
      "A location-based AR treasure hunt where players uncover clues by scanning real-world markers.",
    tech: ["Unity", "Vuforia", "Firebase"],
    github: "https://github.com/alwinvp/metahunt",
    demo: "",
  },
  {
    title: "Endora Website",
    description:
      "A modern responsive marketing website for Endora with fluid animations and CMS-ready sections.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/alwinvp/endora",
    demo: "https://endora.example.com",
  },
  {
    title: "Same Pinch",
    description:
      "A social matching app that connects people with the same birthday for celebrations and community.",
    tech: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/alwinvp/same-pinch",
    demo: "",
  },
];

export const education = [
  {
    title: "B.Tech Computer Science and Design",
    place: "Government Engineering College, Kozhikode",
    period: "2022 – May 2026",
    detail: "CGPA: 8.4 / 10",
  },
  {
    title: "Higher Secondary",
    place: "St Thomas College HSS",
    period: "2020 – 2022",
    detail: "Scored 97% in board examinations",
  },
  {
    title: "Certificate Course",
    place: "LBS Centre for Science & Technology",
    period: "2021",
    detail: "Foundations in programming and computer applications.",
  },
];

export const leadership = [
  { title: "Secretary", place: "IEEE Computer Society", period: "2024 – 2025" },
  { title: "Technical Head", place: "ISTE Students' Chapter", period: "2024 – 2025" },
  { title: "Creative Head", place: "IEEE Computer Society", period: "2023 – 2024" },
  { title: "Design Lead", place: "ISTE Students' Chapter", period: "2023 – 2024" },
];

export const experience = [
  {
    title: "Tamizhan Skills Internship",
    place: "Tamizhan Skills",
    period: "2024",
    detail: "Built and deployed real-world web modules as part of the developer track.",
  },
  {
    title: "IEEE MSS Internship",
    place: "IEEE Membership Support Services",
    period: "2024",
    detail: "Contributed to internal tooling and web experiences for IEEE members.",
  },
  {
    title: "TechPulse Hackathon",
    place: "GEC Kozhikode",
    period: "2024",
    detail: "Shipped an AR-first prototype within 24 hours with a cross-functional team.",
  },
  {
    title: "MHM'24",
    place: "Make Hack Mash 2024",
    period: "2024",
    detail: "Organizer & participant — coordinated the design & tech track.",
  },
  {
    title: "AKCSSC'10",
    place: "All Kerala CS Students Convention",
    period: "2024",
    detail: "Represented the college and led the design of event collaterals.",
  },
];