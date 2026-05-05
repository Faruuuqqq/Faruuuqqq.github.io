"use client";

import { Github, Mail, Linkedin, ExternalLink, Server, Database, Code2, Cpu, ArrowRight, Download, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Magnetic from "@/components/ui/magnetic";
import * as Dialog from "@radix-ui/react-dialog";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto max-w-5xl flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="mr-auto font-bold text-xl tracking-tighter">
            AFM.
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="#projects" className="text-sm font-medium hover:text-muted-foreground transition-colors hidden sm:block">Projects</Link>
            <Link href="#experience" className="text-sm font-medium hover:text-muted-foreground transition-colors hidden sm:block">Experience</Link>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center space-x-2">
              <Magnetic>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-none">
                  <Link href="https://github.com/faruuuqqq" target="_blank" className="text-muted-foreground hover:text-foreground">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-none">
                  <Link href="https://www.linkedin.com/in/faruqmahdison" target="_blank" className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </Magnetic>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto max-w-5xl px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-24 md:py-32 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12">
          <motion.div 
            className="flex-1 space-y-8"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground">
              Backend Engineer.<br />
              <span className="text-muted-foreground">Building reliable systems.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="max-w-[600px] text-lg text-muted-foreground leading-relaxed font-medium">
              I'm Achmad Faruq Mahdison. I specialize in Node.js, TypeScript, and relational databases. Currently focused on building scalable APIs and clean architecture.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild className="rounded-none px-6 h-12 text-sm font-semibold">
                <Link href="#contact">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" asChild className="rounded-none px-6 h-12 text-sm font-semibold border-border hover:bg-muted">
                <Link href="#projects">View Work</Link>
              </Button>
              <Button variant="ghost" asChild className="rounded-none px-6 h-12 text-sm font-semibold hover:bg-muted">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-none overflow-hidden border border-border bg-muted grayscale hover:grayscale-0 transition-all duration-500">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage src="/logo.png" alt="Achmad Faruq Mahdison" className="object-cover" />
                <AvatarFallback className="rounded-none text-2xl font-bold">AM</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </section>

        <div className="w-full h-px bg-border my-8" />

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-12"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            </div>
            
            <div className="space-y-12">
              <ExperienceItem 
                role="Google Student Ambassador"
                company="Google"
                date="Sep 2025 — Present"
                description="Acting as the primary liaison between Google and Universitas Padjadjaran. Leading initiatives to educate students on ethical AI usage and modern cloud technologies."
              />
              <ExperienceItem 
                role="Back End Developer Intern"
                company="Pansus Studio"
                date="Aug 2025 — Present"
                description="Developing RESTful APIs with NestJS and TypeORM. Managing complex PostgreSQL schemas, optimizing query performance, and ensuring robust data validation with DTOs."
              />
              <ExperienceItem 
                role="Software Engineer Mentee"
                company="COMPFEST SEA"
                date="July 2025 — Sep 2025"
                description="Completed intensive training on Clean Code, System Design, and Test-Driven Development (TDD). Configured CI/CD pipelines using GitHub Actions."
              />
            </div>
          </motion.div>
        </section>

        <div className="w-full h-px bg-border my-8" />

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.h2 variants={fadeIn} className="text-2xl font-bold tracking-tight">Selected Work</motion.h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard 
                title="Nara Jiwa" 
                subtitle="Mental Health Platform"
                description="Confidential ticketing system and mood tracking tool built with Next.js and Firebase. Implemented dynamic charts for emotional pattern analysis." 
                tags={["Next.js", "Firebase", "Recharts"]}
                liveUrl="https://narajiwa.site"
              />
              <ProjectCard 
                title="ChatCraft" 
                subtitle="SaaS Platform"
                description="Subscription-based automation platform. Integrated Clerk for auth and automated JSON-LD schema generation for SEO optimization." 
                tags={["Next.js", "PostgreSQL", "Prisma"]}
                liveUrl="https://chatcraft.store"
              />
              <ProjectCard 
                title="SEA Catering" 
                subtitle="Food Delivery Backend"
                description="Engineered role-based authentication and a dynamic subscription module with real-time price calculation." 
                tags={["TypeScript", "PostgreSQL", "NextAuth"]}
                githubUrl="https://github.com/Faruuuqqq/sea-catering"
              />
              <ProjectCard 
                title="Stay Awake Coffee" 
                subtitle="E-Commerce API"
                description="RESTful API built on the MVC pattern with robust JWT authentication, comprehensive error handling, and Swagger documentation." 
                tags={["Node.js", "Express", "MySQL"]}
                githubUrl="https://github.com/Faruuuqqq/stay_awake_coffe"
              />
            </div>
          </motion.div>
        </section>

        <div className="w-full h-px bg-border my-8" />

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
            <BentoGrid className="max-w-none md:auto-rows-[16rem]">
              <BentoGridItem
                title="Languages"
                description="TypeScript, JavaScript, Go, Python, Java"
                icon={<Code2 className="h-6 w-6 text-muted-foreground" />}
                className="md:col-span-1"
              />
              <BentoGridItem
                title="Backend"
                description="Node.js, NestJS, Express, REST APIs, GraphQL"
                icon={<Server className="h-6 w-6 text-muted-foreground" />}
                className="md:col-span-2"
              />
              <BentoGridItem
                title="Database"
                description="PostgreSQL, MySQL, MongoDB, Redis, Prisma, TypeORM"
                icon={<Database className="h-6 w-6 text-muted-foreground" />}
                className="md:col-span-2"
              />
              <BentoGridItem
                title="DevOps & Tools"
                description="Docker, AWS, Git, CI/CD, RabbitMQ, Postman"
                icon={<Cpu className="h-6 w-6 text-muted-foreground" />}
                className="md:col-span-1"
              />
            </BentoGrid>
          </motion.div>
        </section>

        <div className="w-full h-px bg-border my-8" />

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col items-center text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Let's connect.</h2>
            <p className="text-muted-foreground max-w-md font-medium">
              I'm always open to discussing new projects, opportunities, or backend architecture.
            </p>
            
            <form className="w-full max-w-md mt-8 space-y-4 text-left" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold">Email</label>
                <input type="email" id="email" name="email" required className="w-full h-12 px-4 border border-border bg-background focus:outline-none focus:border-foreground transition-colors" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold">Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full p-4 border border-border bg-background focus:outline-none focus:border-foreground transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <div className="pt-2">
                <Magnetic>
                  <Button type="submit" className="w-full rounded-none h-12 font-semibold">Send Message</Button>
                </Magnetic>
              </div>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between px-4 md:px-6 gap-4">
          <p className="font-medium">&copy; {new Date().getFullYear()} Achmad Faruq Mahdison.</p>
          <div className="flex gap-4">
            <Link href="https://github.com/faruuuqqq" target="_blank" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/faruqmahdison" target="_blank" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// -- Components --

function ExperienceItem({ role, company, date, description }: { role: string, company: string, date: string, description: string }) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:col-span-2">
        {date}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-semibold leading-snug text-foreground text-lg">
          {role} <span className="text-muted-foreground font-normal">· {company}</span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

function ProjectCard({ title, subtitle, description, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="group relative flex flex-col justify-between p-6 bg-card border border-border hover:border-foreground transition-colors h-full rounded-none cursor-pointer text-left"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xl tracking-tight">{title}</h3>
              <div className="flex gap-3">
                {githubUrl && (
                  <div onClick={(e) => e.stopPropagation()} className="z-10">
                    <Link href={githubUrl} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-4 w-4" />
                    </Link>
                  </div>
                )}
                {liveUrl && (
                  <div onClick={(e) => e.stopPropagation()} className="z-10">
                    <Link href={liveUrl} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground mb-3">{subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium line-clamp-2">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map(tag => (
              <span key={tag} className="text-xs font-semibold px-2 py-1 bg-muted text-muted-foreground border border-border/50">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 border border-border bg-background p-6 sm:p-10 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <Dialog.Title className="text-3xl font-bold tracking-tight mb-2">{title}</Dialog.Title>
          <Dialog.Description className="text-lg text-muted-foreground font-medium mb-6">
            {subtitle}
          </Dialog.Description>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2">About</h4>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {description}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="text-sm font-semibold px-3 py-1 bg-muted text-muted-foreground border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-4 border-t border-border">
              {liveUrl && (
                <Button asChild className="rounded-none px-6">
                  <Link href={liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live
                  </Link>
                </Button>
              )}
              {githubUrl && (
                <Button variant="outline" asChild className="rounded-none px-6 border-border">
                  <Link href={githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
          
          <Dialog.Close asChild>
            <Button variant="ghost" size="icon" className="absolute right-4 top-4 rounded-none hover:bg-muted">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}