import { Github, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Definisikan tipe untuk props agar tidak error saat build
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* PERBAIKAN: Menambahkan mx-auto di sini */}
        <div className="container mx-auto flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold hidden sm:inline-block">Portfolio</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="#about" className="transition-colors hover:text-foreground/80">About</Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">Projects</Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">Skills</Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
          </nav>
          <div className="flex flex-1 items-center justify-end">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-20 md:py-28 lg:py-32">
          {/* PERBAIKAN: Menambahkan mx-auto di sini */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m <span className="text-primary">Achmad Faruq Mahdison</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A passionate web developer specializing in creating beautiful and functional websites.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild size="lg"><Link href="#contact">Contact Me</Link></Button>
                  <Button variant="outline" asChild size="lg"><Link href="#projects">View My Work</Link></Button>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="ghost" size="icon" asChild><Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /><span className="sr-only">GitHub</span></Link></Button>
                  <Button variant="ghost" size="icon" asChild><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span></Link></Button>
                  <Button variant="ghost" size="icon" asChild><Link href="mailto:achmadfaruqmahdison@gmail.com"><Mail className="h-5 w-5" /><span className="sr-only">Email</span></Link></Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://avatars.githubusercontent.com/u/91350253?v=4" alt="Profile" width={400} height={400} className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
           {/* PERBAIKAN: Menambahkan mx-auto di sini */}
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              I&apos;m currently a Computer Science student at Universitas Padjadjaran. With a strong interest in backend development,
              I&apos;ve built various projects using Node.js, Express, MERN Stack, and TypeScript. I love clean architecture, API design, and continuously improving my skills through real-world projects.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
           {/* PERBAIKAN: Menambahkan mx-auto di sini */}
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Check out some of my recent work.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard title="E-commerce Website" description="A fully functional e-commerce platform with payment integration." image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546" tags={["React", "Node.js", "MongoDB"]} />
              <ProjectCard title="Portfolio Website" description="This responsive portfolio website to showcase my skills." image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5" tags={["Next.js", "Tailwind CSS", "Vercel"]} />
              <ProjectCard title="Task Management App" description="A drag-and-drop task management application for better productivity." image="https://images.unsplash.com/photo-1547480053-7d174f67b557" tags={["React", "Firebase", "TypeScript"]} />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
           {/* PERBAIKAN: Menambahkan mx-auto di sini */}
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Technologies</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Technologies and tools I work with.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              <SkillCategory title="Backend" skills={["Node.js", "Express", "Golang", "MySQL", "REST API", "JWT Auth", "ORM", "MongoDB"]} />
              <SkillCategory title="Frontend" skills={["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"]} />
              <SkillCategory title="Tools & Others" skills={["Git", "GitHub", "Postman", "VS Code", "Docker"]} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
           {/* PERBAIKAN: Menambahkan mx-auto di sini */}
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild><Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /><span className="sr-only">GitHub</span></Link></Button>
              <Button variant="outline" size="icon" asChild><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /><span className="sr-only">LinkedIn</span></Link></Button>
              <Button variant="outline" size="icon" asChild><Link href="mailto:achmadfaruqmahdison@gmail.com"><Mail className="h-4 w-4" /><span className="sr-only">Email</span></Link></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full border-t">
         {/* PERBAIKAN: Menambahkan mx-auto di sini */}
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; 2024 Achmad Faruq Mahdison. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#about">About</Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#projects">Projects</Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#contact">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

// Komponen di bawah ini tidak perlu diubah, tapi disertakan agar lengkap
function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group text-left">
      <div className="overflow-hidden">
        <Image src={image} alt={title} width={400} height={225} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
      </CardContent>
    </Card>
  );
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card>
      <CardContent className="p-6 text-left">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>)}
        </div>
      </CardContent>
    </Card>
  );
}