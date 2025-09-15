"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { useToast } from "@/components/ui/toast";

export function Contact() {
  const { showToast } = useToast();

  const handleEmailClick = () => {
    navigator.clipboard.writeText('aimanshomre@gmail.com');
    showToast('Email copied to clipboard!');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Get In Touch" />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a 
                      href="#"
                      className="text-foreground hover:text-primary transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEmailClick();
                      }}
                    >
                      aimanshomre@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Israel</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button asChild className="w-full" variant="outline">
                      <a 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleEmailClick();
                        }}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    
                    <Button asChild className="w-full" variant="outline">
                      <a href="https://github.com/aimanshomre" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    
                    <Button asChild className="w-full" variant="outline">
                      <a href="https://www.linkedin.com/in/aiman-shomre-57539a36a/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
