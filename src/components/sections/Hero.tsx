"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
              <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <Image
                src="/images/profile.jpeg"
                alt="Aiman Shomre"
                width={180}
                height={180}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Aiman Shomre</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full-Stack & DevOps Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            I build reliable full-stack apps and ship them with pragmatic DevOps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 btn-glow">
              <a href="#projects" className="scroll-smooth">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 btn-glow">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
