"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export function Footer() {
  const { showToast } = useToast();

  const handleEmailClick = () => {
    navigator.clipboard.writeText('aimanshomre@gmail.com');
    showToast('Email copied to clipboard!');
  };

  return (
    <footer className="border-t border-border bg-background/50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Aiman Shomre. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aimanshomre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/aiman-shomre-57539a36a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleEmailClick();
              }}
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
