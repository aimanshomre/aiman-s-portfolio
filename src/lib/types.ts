export type ID = string;

export type Project = {
  id: ID;              // slug
  title: string;
  description: string; // 1–2 lines
  technologies: string[];
  link?: string;       // live URL
  repo?: string;       // GitHub URL
  image?: string;      // /public/images/*
  highlights?: string[];
  year?: number;
  role?: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    x: string;
    website: string;
  };
  skills: string[];
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};
