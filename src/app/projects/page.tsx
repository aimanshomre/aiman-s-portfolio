import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionTitle 
          title="My Projects" 
          subtitle="Here's a collection of projects I've worked on, showcasing my skills and experience across different technologies and domains."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {projectsData.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              No projects yet
            </h3>
            <p className="text-muted-foreground">
              Projects are being added. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
