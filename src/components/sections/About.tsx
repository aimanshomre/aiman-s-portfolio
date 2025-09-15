"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind", "Shadcn",
  "React Query", "React Hook Form", "Zod",
  "Node.js", "Express", "MongoDB",
  "Docker", "Linux", "Git", "CI/CD (basic)"
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle title="About Me" />
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I&apos;m a passionate Full-Stack & DevOps Engineer based in Israel, 
              dedicated to building reliable and scalable applications. With expertise 
              in modern web technologies and pragmatic DevOps practices, I help teams 
              deliver high-quality software solutions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full-stack web application development</li>
                  <li>• Mobile app development with React Native</li>
                  <li>• DevOps and deployment automation</li>
                  <li>• Database design and optimization</li>
                  <li>• API development and integration</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
