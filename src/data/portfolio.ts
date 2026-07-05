import {
  SiPython, SiJavascript, SiReact, SiFlutter, SiFirebase, SiUnity,
  SiFlask, SiGit, SiGithub, SiBlender, SiFigma,
  SiAndroidstudio, SiSharp, SiHtml5, SiCss, SiTailwindcss, SiPhp, SiGamedeveloper
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import type { IconType } from "react-icons";

export const profile = {
  name: "Alwin V P",
  logo: "ALWIN VP",
  role: "Unity Developer\nGame Developer\nReact Frontend Developer",
  subRole: "Computer Science & Design Engineer",
  tagline:
    "I build immersive games, Unity applications, AR/VR experiences, and modern React web applications that combine creativity with scalable software engineering.",
  email: "alwinvp2004@gmail.com",
  phone: "+91 9496675206",
  location: "Thrissur, Kerala, India",
  github: "https://github.com/AlwinVP",
  linkedin: "https://www.linkedin.com/in/alwin-vadakkan",
  resume: "/resume.pdf",
};

export const about = {
  summary:
    "I'm Alwin V P, a Computer Science & Design graduate passionate about building interactive digital experiences.\n\nMy expertise spans Unity game development, AR/VR applications, React frontend development, Flutter applications, and Python-based backend solutions.\n\nI enjoy transforming ideas into polished products—whether it's an immersive Unity game, an AR learning platform, or a modern React web application. I continuously explore new technologies while focusing on writing clean, scalable, and user-centric software.",
  roles: [
    "Unity Developer",
    "Game Developer",
    "React Frontend Developer",
    "AR/VR Developer",
    "Flutter Developer",
    "Python Developer",
    "C#",
    "Firebase",
    "Problem Solver",
  ],
  stats: [
    { label: "Major Projects", value: "6+" },
    { label: "Production Projects", value: "6+" },
    { label: "Leadership Positions", value: "4" },
    { label: "Professional Experiences", value: "3" },
  ],
};

type Tech = { name: string; icon: IconType };
export const techStack: { category: string; items: Tech[] }[] = [
  {
    category: "Unity & Game Development",
    items: [
      { name: "Unity", icon: SiUnity },
      { name: "C#", icon: SiSharp },
      { name: "AR Foundation", icon: SiUnity },
      { name: "ARCore", icon: SiAndroidstudio },
      { name: "Vuforia", icon: SiUnity },
      { name: "Blender", icon: SiBlender },
      { name: "Game Development", icon: SiGamedeveloper },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "ReactJS", icon: SiReact },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Firebase", icon: SiFirebase },
      { name: "Flask", icon: SiFlask },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Photoshop", icon: DiPhotoshop },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Unity Version Control", icon: SiUnity },
    ],
  },
];

export const projects = [
  {
    title: "ARIVU",
    description:
      "An Augmented Reality learning platform developed using Unity, Vuforia, Blender, Python, and Firebase that transforms textbook concepts into interactive 3D learning experiences.",
    tech: ["Unity", "Vuforia", "Blender", "Python", "Firebase"],
    github: "https://github.com/alwinvp/arivu",
    demo: "",
  },
  {
    title: "HOLOHOLA",
    description:
      "A Unity + Flutter based AR communication platform that integrates AI-powered emotion recognition to render real-time interactive AR avatars during video calls.",
    tech: ["Unity", "Flutter", "Python", "AR Foundation", "Firebase"],
    github: "https://github.com/alwinvp/holohola",
    demo: "",
  },
  {
    title: "PURRSISTANCE",
    description:
      "A Unity-based VR game developed during the TinkerHub Useless Projects Hackathon featuring immersive gameplay, physics interactions, and engaging user experiences.",
    tech: ["Unity", "VR", "C#", "Blender"],
    github: "https://github.com/alwinvp/purrsistance",
    demo: "",
  },
  {
    title: "MetaHunt",
    description:
      "An Augmented Reality treasure hunt game developed using Unity and AR Foundation where players discover clues through image tracking and interactive 3D experiences.",
    tech: ["Unity", "AR Foundation", "ARCore", "Firebase"],
    github: "https://github.com/alwinvp/metahunt",
    demo: "",
  },
  {
    title: "Endora Website",
    description:
      "Official event website developed using HTML, CSS, JavaScript, and Flutter Web with responsive design, registration, and live event updates.",
    tech: ["HTML", "CSS", "JavaScript", "Flutter Web", "Firebase"],
    github: "https://github.com/alwinvp/endora",
    demo: "https://endora.example.com",
  },
  {
    title: "Same Pinch",
    description:
      "A social photo-sharing platform that allows users to upload, share, and interact with photos while providing authentication and responsive user interfaces.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/alwinvp/same-pinch",
    demo: "",
  },
];

export const education = [
  {
    title: "Bachelor of Technology in Computer Science & Design",
    place: "Government Engineering College Kozhikode",
    period: "Completed May 2026",
    detail: "CGPA 8.4",
  },
  {
    title: "Higher Secondary Education (Science Stream)",
    place: "St Thomas College HSS",
    period: "Completed 2021",
    detail: "97%",
  },
  {
    title: "Certificate Course in Data Entry & Office Automation",
    place: "LBS Centre for Science & Technology",
    period: "Completed 2019",
    detail: "Grade A++",
  },
];

export const leadership = [
  { title: "Secretary", place: "IEEE Computer Society", period: "2025" },
  { title: "Technical Head", place: "ISTE Senior Committee", period: "2025" },
  { title: "Creative Head", place: "IEEE Computer Society", period: "2024" },
  { title: "Design Lead", place: "ISTE Junior Committee", period: "2024" },
];

export const experience = [
  {
    title: "React Frontend Developer Intern",
    place: "IntPurple",
    period: "Currently",
    detail: "Working on ReactJS frontend development, reusable UI components, REST API integration, responsive interfaces, and Git-based collaborative development.",
  },
  {
    title: "Multidomain Intern",
    place: "Tamizhan Skills RISE Internship",
    period: "2024",
    detail: "Worked on AR/VR, Web Development, Database, Flutter, and Software Development projects while being recognized as one of the top performers.",
  },
  {
    title: "VR / AR Development Intern",
    place: "IEEE Malabar Subsection Internship",
    period: "2024",
    detail: "Developed immersive Unity applications and gained practical experience in XR workflows and AR/VR technologies.",
  },
  {
    title: "Team Lead & Flutter Developer",
    place: "TechPulse Hackathon",
    period: "2024",
    detail: "Developed Raksha, a real-time emergency communication application using Flutter and Firebase for disaster situations.",
  },
  {
    title: "Lead Unity Developer",
    place: "MHM'24",
    period: "2024",
    detail: "Developed and coordinated an AR Treasure Hunt using Unity, AR Foundation, image tracking, and interactive 3D content.",
  },
];