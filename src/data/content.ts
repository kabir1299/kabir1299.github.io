/**
 * Single source of truth for Kabir Mishra's portfolio.
 * Keep professional claims factual; update this file to change portfolio content.
 */
import type { LucideIcon } from "lucide-react";
import { Boxes, Database, ShieldCheck, Wrench, Workflow } from "lucide-react";

export const profile = {
  name: "Kabir Mishra",
  firstName: "Kabir",
  role: "Java Backend Engineer",
  tagline: "I build reliable Java backend systems and event-driven services.",
  oneLiner:
    "Specializing in Java, Spring Boot, Kafka and distributed systems — building secure services and production-ready integrations.",
  location: "Raipur, India",
  email: "connectkabir12@gmail.com",
  resumeUrl: "/resume.pdf",
};

export type SocialKey = "github" | "linkedin";
export interface Social {
  key: SocialKey;
  label: string;
  href: string;
}
export const socials: Social[] = [
  { key: "github", label: "GitHub", href: "https://github.com/kabir1299" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/kabir-mishra-422a87149" },
];

export const about = {
  paragraphs: [
    "I'm a Backend Software Engineer with close to 4 years of experience designing and scaling high-throughput distributed systems. I build resilient Java and Spring Boot microservices, event-driven workflows and production-grade APIs for telecom platforms.",
    "My experience includes Kafka ingestion pipelines processing around 500 API requests per second across platforms serving more than 5 million subscribers, as well as a Kafka Topic Factory supporting 50K+ telecom events daily. I work across streaming, databases, API security and containerized deployments.",
    "I care about reliability as much as throughput: secure service-to-service communication with OAuth 2.0 and mTLS, resilient retry and fallback behavior, observable services, and practical system design that can be maintained in production."
  ],
  facts: [
    { label: "API throughput", value: "~500/sec" },
    { label: "Subscriber scale", value: "5M+" },
    { label: "Telecom events", value: "50K+/day" },
    { label: "Query latency", value: "↓ 75%" },
  ],
};

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  bullets: string[];
  tech: string[];
}
export const experience: Experience[] = [
  {
    id: "mobileum-software-engineer",
    company: "Mobileum India Pvt. Ltd.",
    role: "Software Engineer",
    duration: "Apr 2024 — Present",
    location: "Bengaluru, India",
    bullets: [
      "Engineered Kafka ingestion pipelines handling approximately 500 API requests per second across multi-tenant telecom systems.",
      "Scaled streaming workflows for a telecom ecosystem serving more than 5 million subscribers.",
      "Architected a Kafka Topic Factory supporting 50K+ telecom events daily.",
      "Owned Kafka deployment and scaling across environments, improving platform stability.",
      "Migrated Oracle workloads to Couchbase, reducing query latency by 75%.",
      "Built resilient REST APIs with retries, fallback logic and observability, improving service reliability by 20%.",
      "Delivered data and subscription APIs for CHT Taiwan supporting 2K+ users.",
      "Containerized services using Docker, reducing environment failures by 30%."
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "Kafka Streams", "Oracle", "Couchbase", "Docker", "REST APIs"]
  },
  {
    id: "mobileum-associate-software-engineer",
    company: "Mobileum India Pvt. Ltd.",
    role: "Associate Software Engineer",
    duration: "Aug 2022 — Apr 2024",
    location: "Bengaluru, India",
    bullets: [
      "Built and enhanced backend services using Java, Spring Boot and Kafka for large-scale telecom event ingestion and distributed processing.",
      "Strengthened API security by implementing OAuth 2.0, mTLS and Traefik for secure service-to-service communication.",
      "Investigated and resolved production issues across distributed systems, contributing to improved availability and faster incident recovery.",
      "Contributed to a modular, multi-tenant microservices platform designed for scalable tenant onboarding and future product expansion."
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "OAuth 2.0", "mTLS", "Traefik", "Microservices"]
  }
];

export interface Project {
  name: string;
  problem: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}
export const projects: Project[] = [
  {
    name: "High-throughput Kafka Ingestion",
    problem: "Engineered Kafka ingestion and streaming workflows for multi-tenant telecom platforms, handling approximately 500 API requests per second and supporting an ecosystem of 5M+ subscribers. A Kafka Topic Factory supported 50K+ telecom events daily.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "Kafka Streams"],
    featured: true
  },
  {
    name: "Oracle to Couchbase Migration",
    problem: "Migrated Oracle workloads to Couchbase and optimized the data access path, reducing query latency by 75%.",
    tech: ["Oracle", "Couchbase", "Java", "Database Engineering"]
  },
  {
    name: "Secure & Resilient API Platform",
    problem: "Built production REST APIs with retry and fallback behavior, observability, OAuth 2.0, mTLS and Traefik-based service routing. The resume reports a 20% improvement in service reliability.",
    tech: ["REST APIs", "OAuth 2.0", "mTLS", "Traefik", "Docker"]
  },
  {
    name: "AR Home Decor",
    problem: "Final-year B.Tech project: built an ARCore-based Android application for placing 3D models in real-world environments with realistic scaling and positioning. The application was published on the Google Play Store.",
    tech: ["Java", "Android", "XML", "ARCore"]
  }
];

export interface SkillCategory {
  key: string;
  label: string;
  icon: LucideIcon;
  skills: string[];
}
export const skillCategories: SkillCategory[] = [
  { key: "backend", label: "Languages & Frameworks", icon: Boxes, skills: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "JUnit", "Mockito"] },
  { key: "distributed", label: "Distributed Systems", icon: Workflow, skills: ["Apache Kafka", "Kafka Streams", "Event-Driven Architecture", "Microservices", "System Design (HLD / LLD)"] },
  { key: "database", label: "Databases", icon: Database, skills: ["PostgreSQL", "MySQL", "Couchbase", "ClickHouse", "Oracle"] },
  { key: "platform", label: "DevOps & Tools", icon: Wrench, skills: ["Docker", "Helm", "Git", "Linux / Unix", "Traefik", "Minikube", "Postman"] },
  { key: "security", label: "Security & CS", icon: ShieldCheck, skills: ["OAuth 2.0", "mTLS", "API Security", "OOP", "Data Structures", "Algorithms", "OS", "DBMS", "Computer Networks"] }
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
