import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, User, MapPin } from "lucide-react";
import Link from "next/link";
import projectsData from "@/data/projects.json";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Aiman Shomre`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

          <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {project.year && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.year}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{project.role}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Israel</span>
            </div>
          </div>
        </div>

        {project.image && (
          <div className="mb-12">
            <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </div>
          </div>
        )}

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

            <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Project Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.repo && (
                <Button asChild variant="outline" size="lg">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    View Source Code
                  </a>
                </Button>
              )}
              {project.link && (
                <Button asChild size="lg">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Live Project
                  </a>
                </Button>
              )}
              {!project.repo && !project.link && (
                <p className="text-muted-foreground">
                  Source code and live demo links will be available soon.
                </p>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  This project demonstrates my skills in {project.technologies.slice(0, 3).join(", ")} 
                  and showcases my approach to building {project.role ? `as a ${project.role.toLowerCase()}` : "full-stack applications"}. 
                  {project.highlights && project.highlights.length > 0 && (
                    <> The key highlights include {project.highlights.slice(0, 2).join(" and ")}.</>
                  )}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Built with modern development practices and a focus on user experience, this project 
                  represents the quality and attention to detail I bring to all my work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

          <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Projects
              </Link>
            </Button>
            
            <Button asChild>
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
