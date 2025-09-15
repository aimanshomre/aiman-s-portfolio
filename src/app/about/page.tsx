import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import profileData from "@/data/profile.json";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h1>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-primary/70 to-primary/30 mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {profileData.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          <div className="lg:col-span-1">
            <Card className="text-center glass">
              <CardHeader>
                <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Aiman Shomre"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <CardTitle className="text-2xl text-gradient">{profileData.name}</CardTitle>
                <p className="text-muted-foreground">{profileData.role}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm">
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{profileData.location}</p>
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">{profileData.email}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gradient mb-4">Background</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m a passionate Full-Stack & DevOps Engineer based in Israel, with a focus on building 
                  reliable, scalable applications and implementing pragmatic DevOps practices. My journey 
                  in software development has led me through various technologies and methodologies, 
                  always with the goal of delivering high-quality solutions that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I believe in the power of clean code, thoughtful architecture, and continuous learning. 
                  Whether it&apos;s crafting user experiences with React and Next.js, building robust backends 
                  with Node.js, or streamlining deployment processes with Docker and CI/CD, I approach 
                  each challenge with enthusiasm and attention to detail.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I&apos;m always excited to take on 
                  new challenges and collaborate with like-minded developers.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gradient mb-6">Skills & Technologies</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills
                      .filter(skill => ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Shadcn'].includes(skill))
                      .map((skill) => (
                        <Badge key={skill} variant="default" className="text-sm px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills
                      .filter(skill => ['Node.js', 'Express', 'MongoDB'].includes(skill))
                      .map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills
                      .filter(skill => ['Docker', 'Linux', 'Git', 'CI/CD (basic)'].includes(skill))
                      .map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Libraries & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills
                      .filter(skill => ['React Query', 'React Hook Form', 'Zod'].includes(skill))
                      .map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gradient mb-6">Experience & Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="text-lg">Development Philosophy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      I believe in writing clean, maintainable code that prioritizes readability and 
                      scalability. Every line of code should serve a purpose and be easy to understand 
                      for future developers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="text-lg">Problem Solving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      I approach technical challenges systematically, breaking down complex problems 
                      into manageable pieces and finding elegant solutions that balance functionality 
                      with maintainability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="text-lg">Continuous Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      The tech industry evolves rapidly, and I&apos;m committed to staying current with 
                      the latest technologies and best practices through continuous learning and 
                      experimentation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="text-lg">Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      I value teamwork and believe that the best solutions come from collaborative 
                      efforts. I enjoy working with diverse teams and sharing knowledge to achieve 
                      common goals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
