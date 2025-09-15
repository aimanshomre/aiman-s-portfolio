"use client";

import Image from "next/image";
import { ExternalLink, Github, Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="transition-all duration-200 hover:translate-y-[-2px]">
      <Card className="h-full overflow-hidden glass hover:shadow-lg transition-all">
        {project.image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl line-clamp-2 text-gradient">{project.title}</CardTitle>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {project.description}
          </p>
        </CardHeader>
        
        <CardContent className="pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        
        <CardFooter className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              {project.year && (
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{project.role}</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              {project.repo && (
                <Button size="sm" variant="outline" asChild className="btn-glow">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </Button>
              )}
              {project.link && (
                <Button size="sm" asChild className="btn-glow">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
