"use client";

import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import profileData from "@/data/profile.json";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="I'm always interested in hearing about new opportunities and exciting projects. Let's work together!"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
       
          <div className="glass p-6 rounded-xl">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Let&apos;s Connect</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m passionate about building great software and solving complex problems. 
                Whether you have a project in mind, want to discuss potential opportunities, 
                or just want to say hello, I&apos;d love to hear from you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m particularly interested in:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Full-stack development opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">DevOps and infrastructure projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Open source collaborations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Technical consulting and mentorship</span>
                </li>
              </ul>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href={`mailto:${profileData.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">{profileData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect Online</h3>
              <div className="flex gap-4">
                {profileData.socials.github && (
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                )}
                
                {profileData.socials.linkedin && (
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond to messages within 24 hours during weekdays. 
                For urgent matters, feel free to reach out through multiple channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
