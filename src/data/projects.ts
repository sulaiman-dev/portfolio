export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.",
    image: "/images/projects/project1.jpg", // You'll need to add these images later
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates. Built with Next.js, Firebase, and Tailwind CSS.",
    image: "/images/projects/project2.jpg",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data for any location. Uses OpenWeatherMap API and Chart.js for data visualization.",
    image: "/images/projects/project3.jpg",
    tags: ["JavaScript", "API Integration", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  // Add more projects as needed
]
