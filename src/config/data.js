import React from "react";
import {
  SiPython, SiGo, SiCplusplus,
  SiFastapi, SiDjango, SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiNextdotjs, SiHtml5, SiJavascript, SiTailwindcss, SiBootstrap,
  SiApachekafka, SiGooglecloud, SiAmazonaws, SiDocker, SiGit, SiGitlab, SiGithub, SiBitbucket, SiJira,
  SiLinux, SiWindows, SiApple, SiUbuntu
} from "react-icons/si";
import { FaDatabase, FaNetworkWired, FaServer, FaCogs } from "react-icons/fa";

export const HERO_DATA = {
  greeting: "Hi, my name is",
  name: "Ajit Kumar Singh.",
  title: "I build&nbsp;<strong>scalable backend</strong>&nbsp;systems.",
  desc: "Senior Software Developer with <strong>3+ years</strong> of experience designing and building scalable backend architectures and REST APIs using Django and FastAPI. Strong background in distributed systems, microservices, event-driven architectures, and cloud platforms (GCP, AWS), with hands-on experience in Kafka, Redis, Celery, and gRPC. Passionate about building high-availability, data-driven applications.",
}

export const SKILLS_PREVIEW = [
  "Python", "Django", "FastAPI", "GoLang", "PostgreSQL",
  "GCP", "Kafka", "Celery", "Microservices"
];

export const ABOUT_DATA = {
  bio1: "Hey! I'm Ajit Kumar Singh, a Senior Software Developer based in Ahmedabad, India. I specialize in backend engineering — designing and building scalable backend architectures, REST APIs, and distributed systems that handle real-world complexity.",
  bio2: "Over the past 3+ years, I've worked on high-availability, data-driven applications at Adani Green Energy (renewable-energy power forecasting platform) and Urbano Infotech (intelligent chatbot solutions and scalable backend services). I have a strong background in event-driven architectures using Kafka, Redis, and Celery on cloud platforms like GCP and AWS.",
  bio3: "My toolkit: Python · Django · FastAPI · GoLang · Kafka · gRPC · PostgreSQL · Microservices. Outside of backend work, I'm comfortable reaching into the frontend with Next.js / React when the need arises.",
  bio4: "When I'm not shipping features, I'm solving algorithmic problems—like securing 1st rank on GeeksforGeeks in my college and earning 5★ in Python & C++ on HackerRank.",
  location: "Ahmedabad, India",
  experience: "3+ years",
  education: "B.Tech · CSE",
  email: "ajitkrsingh841@gmail.com",
  phone: "+91 7367091307",
};

export const SKILL_GROUPS = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "GoLang", icon: <SiGo color="#00ADD8" /> },
      { name: "SQL", icon: <FaDatabase color="#f29111" /> },
      { name: "C++", icon: <SiCplusplus color="#00599C" /> }
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "Django", icon: <SiDjango color="#092E20" /> },
      { name: "DRF", icon: <SiDjango color="#092E20" /> },
      { name: "REST APIs", icon: <FaServer color="#607D8B" /> },
      { name: "gRPC", icon: <FaNetworkWired color="#244c5a" /> }
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "DynamoDB", icon: <SiAmazonaws color="#4053D6" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> }
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
      { name: "HTML5 / CSS3", icon: <SiHtml5 color="#E34F26" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> }
    ],
  },
  {
    label: "OS",
    items: [
      { name: "Windows", icon: <SiWindows color="#0078D6" /> },
      { name: "macOS", icon: <SiApple color="#ffffff" /> },
      { name: "Ubuntu", icon: <SiUbuntu color="#E95420" /> },
      { name: "Linux", icon: <SiLinux color="#FCC624" /> }
    ],
  },
  {
    label: "Architecture",
    items: [
      { name: "Monolithic", icon: <FaServer color="#607D8B" /> },
      { name: "Microservices", icon: <FaNetworkWired color="#ffffff" /> },
      { name: "Kafka", icon: <SiApachekafka color="#ffffff" /> },
      { name: "Event-Driven", icon: <FaCogs color="#607D8B" /> }
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: <SiAmazonaws color="#FF9900" /> },
      { name: "GCP", icon: <SiGooglecloud color="#4285F4" /> },
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "Git", icon: <SiGit color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
      { name: "GitLab", icon: <SiGitlab color="#FCA121" /> },
      { name: "Bitbucket", icon: <SiBitbucket color="#0052CC" /> },
      { name: "Jira", icon: <SiJira color="#0052CC" /> }
    ],
  },
];

export const CERTIFICATIONS = [
  { name: "Prompt Engineering", year: "2025" },
  { name: "Problem Solving (Intermediate) · HackerRank", year: "2024" },
  { name: "AWS Cloud Foundations · Great Learning", year: "2024" },
  { name: "Python Pandas · Great Learning", year: "2024" },
  { name: "REST API · HackerRank", year: "2024" },
];

export const ACHIEVEMENTS = [
  { emoji: "🏆", text: "Secured 1st rank in problem solving on GeeksforGeeks among students in my college. 1.5 Year" },
  { emoji: "⭐", text: "Achieved 5★ in Python and C++ and 4★ in C on HackerRank." },
];

export const EXPERIENCES = [
  {
    id: "adani",
    company: "Adani Green Energy Ltd",
    role: "Sr Software Developer",
    period: "Aug 2025 – Present",
    location: "Ahmedabad, India",
    type: "Off-roll",
    bullets: [
      "Designed and developed scalable backend services with Django for a renewable energy power forecasting platform used to manage GW-scale solar assets.",
      "Built interactive dashboards for comparing forecast vs. actual generation across multiple ML models, enabling faster operational decisions.",
      "Integrated satellite imagery and real-time / historical weather data (WMS APIs) to significantly improve forecasting accuracy.",
      "Developed a Deviation Settlement Mechanism (DSM) penalty calculation dashboard to reduce regulatory compliance time.",
      "Automated ~60% of manual workflows via Python automation scripts for data processing and scheduled report generation.",
      "Maintained high-availability services using Redis for caching, Celery + RabbitMQ for async processing, and GitLab CI/CD for continuous delivery.",
    ],
    tech: ["Python", "Django", "Redis", "Celery", "PostgreSQL", "GitLab CI/CD", "GCP"],
  },
  {
    id: "urbano",
    company: "Urbano Infotech",
    role: "SDE II",
    period: "Sep 2023 – Aug 2025",
    location: "Ahmedabad, India",
    type: "Full-time",
    bullets: [
      "Developed and maintained scalable backend services using Django REST Framework (DRF), consistently maintaining high API availability and performance.",
      "Built an intelligent B2B chatbot with the RASA framework, automating customer interactions and reducing manual support volume.",
      "Designed and implemented RESTful APIs with FastAPI, achieving ~30% improvement in response times through query optimisation and caching.",
      "Managed multi-database environments spanning PostgreSQL, DynamoDB, and MongoDB, ensuring data integrity and performant queries.",
      "Contributed to core microservices architecture for the Book You Pandit platform, including API Gateway design with FastAPI.",
    ],
    tech: ["FastAPI", "Django", "RASA", "PostgreSQL", "DynamoDB", "MongoDB", "Next.js"],
  },
];

export const PROJECTS = [
  {
    featured: true,
    title: "Book You Pandit",
    subtitle: "Religious services booking platform",
    description: "A production multi-platform app connecting users with pandits for religious ceremonies. Architected the entire backend layer — API Gateway, service separation, background jobs, and mobile APIs that power an app with real users on Google Play.",
    bullets: [
      "Designed an API Gateway with FastAPI to centralise routing, auth, rate-limiting, and request validation.",
      "Improved average API response time by ~30% through query optimisation and Redis-based caching.",
      "Implemented Celery + Redis background task processing for notification delivery and PDF report generation.",
      "Delivered full-stack features using Next.js / TypeScript for the admin dashboard.",
    ],
    tech: ["Python", "FastAPI", "Django", "Celery", "Redis", "Next.js", "TypeScript", "PostgreSQL"],
    demo: "https://play.google.com/store/apps/details?id=com.bookyourpandit.client",
    github: null,
    icon: <SiFastapi size={20} />,
  },
  {
    featured: true,
    title: "Crypto Trading Platform",
    subtitle: "Microservices architecture · Kafka · gRPC",
    description: "Designed and built a microservices-based cryptocurrency trading platform with clean service boundaries, event-driven data flows, and a real-time settlement layer. Built for high throughput and low latency.",
    bullets: [
      "Designed core microservices: Auth, User, Wallet, Market Data, and Order services — each independently deployable.",
      "Used gRPC for type-safe, high-performance internal service communication.",
      "Built Kafka-powered event bus for trade events, wallet updates, and audit logging.",
      "Applied Redis for session storage and market data caching to achieve sub-10ms read times.",
    ],
    tech: ["FastAPI", "GoLang", "gRPC", "Kafka", "Redis", "PostgreSQL", "JWT", "Docker"],
    demo: null,
    github: null,
    icon: <SiApachekafka size={20} />,
  },
  {
    featured: true,
    title: "CSVManagement",
    subtitle: "Multi-Tenant SaaS Platform",
    description: "Independently developed a multi-tenant SaaS system for a pharma company to manage and track engineering site activities.",
    bullets: [
      "Implemented role-based access controls (RBAC) and data isolation.",
      "Engineered dynamic Word document generation, allowing users to design custom templates.",
      "Built a graphical dashboard for real-time project tracking.",
      "Followed modular architecture to support multiple clients securely."
    ],
    tech: ["Python", "Django", "PostgreSQL", "React", "SaaS"],
    demo: null,
    github: null,
    icon: <SiDjango size={20} />,
  },
  {
    featured: true,
    title: "Offcom",
    subtitle: "Off-road car marketplace",
    description: "Built a scalable backend to connect builders and enthusiasts for buying and selling off-road vehicles.",
    bullets: [
      "Developed RESTful APIs for user authentication, vehicle posting, and transactions.",
      "Designed and integrated DynamoDB for high-performance NoSQL data storage.",
      "Automated API documentation using Swagger/OpenAPI.",
      "Engineered the backend with FastAPI for high concurrency."
    ],
    tech: ["FastAPI", "Python", "DynamoDB", "REST APIs", "Swagger"],
    demo: null,
    github: null,
    icon: <SiFastapi size={20} />,
  },
  {
    title: "Morsmiles",
    subtitle: "Doctor discovery & healthcare platform",
    description: "An extensive directory of doctors spanning diverse medical fields — from cardiologists to dermatologists. Users can search, filter, and book specialist consultations.",
    tech: ["Python", "Django", "FastAPI", "Next.js", "React", "TypeScript"],
    demo: "https://blogs.soumya-jit.tech/",
    github: null,
    icon: <SiDjango size={20} />,
  },
  {
    title: "Dylog B2B Chatbot",
    subtitle: "AI chatbot for hardware & defense sectors",
    description: "An intelligent chatbot designed for the B2B sector to improve communication between buyers and suppliers. Handles product queries, lead qualification, and order status across hardware and defense industries.",
    tech: ["Python", "RASA", "NLU", "OpenAI", "FastAPI"],
    demo: "https://www.dylog.ai/",
    github: null,
    icon: <SiPython size={20} />,
  }
];
