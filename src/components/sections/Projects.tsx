"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const projects = [
  {
    id: "beshvil-hahevra",
    title: "Beshvil Ha'Hevra (For the Squad) – Reservist Platform",
    description: "Mission-driven platform for reserve soldiers: job board, verified mental-health chat, business directory, and updates.",
    technologies: ["React", "TypeScript", "Express", "MongoDB", "Socket.IO", "Tailwind", "Shadcn/UI"],
    repo: "https://github.com/aimanshomre/hackathon-miluim",
    link: "",
    image: "/images/beshvil-cover.png",
    highlights: [
      "Role-based areas and secure flows",
      "Real-time support chat (Socket.IO)",
      "Clean, accessible UI with Tailwind/Shadcn"
    ],
    year: 2025,
    role: "Full-Stack Developer"
  },
  {
    id: "chicko-micko-mobile",
    title: "Chicko Micko – React Native Food Ordering",
    description: "Mobile app for ordering burgers, tortillas, sides, and drinks with auth, cart, and checkout.",
    technologies: ["React Native", "TypeScript", "Expo", "React Navigation", "AsyncStorage"],
    repo: "https://github.com/aimanshomre/burgers-native-app",
    link: "",
    image: "/images/chicko-cover.jpg",
    highlights: [
      "Typed models for menu and orders",
      "Smooth onboarding and cart UX",
      "Built for quick customization and scale"
    ],
    year: 2025,
    role: "Mobile Developer"
  },
  {
    id: "rick-morty-aiman-and-shalev",
    title: "Rick & Morty Explorer",
    description: "Web app exploring characters, locations, and episodes using the public Rick and Morty API.",
    technologies: ["JavaScript", "HTML", "CSS", "Rick and Morty API"],
    repo: "https://github.com/aimanshomre/rick-morty-aiman-and-shalev",
    link: "",
    image: "/images/rick-morty-cover.jpg",
    highlights: [
      "Character, location, and episode lists",
      "Interlinked detail pages with navigation",
      "Pagination, search, loading and error states"
    ],
    year: 2025,
    role: "Frontend Developer"
  },
  {
    id: "recipe-proj-la",
    title: "Recipe Project (LA)",
    description: "Collaborative full-stack recipe app (client + server).",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/LielHarazi/recipe-proj-LA",
    link: "",
    image: "/images/recipe-la-cover.jpg",
    highlights: [
      "Client/server codebase split",
      "Room to add auth, CRUD recipes, and favorites",
      "Good base for MERN deployment practice"
    ],
    year: 2025,
    role: "Full-Stack Developer (collaboration)"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Featured Projects" />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="aspect-video relative rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>• {highlight}</li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.link && (
                        <Button asChild size="sm">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
