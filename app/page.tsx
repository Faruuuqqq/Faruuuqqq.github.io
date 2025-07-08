import { Github, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m <span className="text-primary">Achmad Faruq Mahdison</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A passionate web developer specializing in creating beautiful and functional websites.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                   <Button variant="outline" asChild>
                    <Link href="#projects">View My Work</Link>
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                   <Button variant="ghost" size="icon" asChild>
                    <Link href="mailto:achmadfaruqmahdison@gmail.com">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Avatar className="h-64 w-64">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" alt="Achmad Faruq Mahdison" />
                  <AvatarFallback>AF</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;m currently a Computer Science student at Universitas Padjadjaran. With a strong interest in backend development,
                  I&apos;ve built various projects using Node.js, Express, MERN Stack, and TypeScript. I love clean architecture, API design, and continuously improving my skills through real-world projects.
                </p>
              </div>
               <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                 <div className="flex flex-col justify-center space-y-4">
                   <ul className="grid gap-6">
                     <li className="flex items-start gap-4">
                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">01</div>
                       <div className="text-left">
                         <h3 className="font-semibold">Education</h3>
                         <p className="text-sm text-muted-foreground">Computer Science Student, Padjadjaran University</p>
                       </div>
                     </li>
                     <li className="flex items-start gap-4">
                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">02</div>
                       <div className="text-left">
                         <h3 className="font-semibold">Experience</h3>
                         <p className="text-sm text-muted-foreground">Building full-stack projects & learning backend engineering through self-projects and bootcamps</p>
                       </div>
                     </li>
                     <li className="flex items-start gap-4">
                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">03</div>
                       <div className="text-left">
                         <h3 className="font-semibold">Interests</h3>
                         <p className="text-sm text-muted-foreground">Backend Development, System Design, and Open Source</p>
                       </div>
                     </li>
                   </ul>
                 </div>
                 <div className="flex justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1517694712202-1428bc38a5a5"
                    width={550}
                    height={310}
                    alt="About me"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Website"
                  description="A fully functional e-commerce platform with payment integration."
                  image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
                  tags={["React", "Node.js", "MongoDB"]}
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="This responsive portfolio website to showcase my skills."
                  image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                  tags={["Next.js", "Tailwind CSS", "Vercel"]}
                />
                <ProjectCard
                  title="Task Management App"
                  description="A drag-and-drop task management application for better productivity."
                  image="https://images.unsplash.com/photo-1547480053-7d174f67b557"
                  tags={["React", "Firebase", "TypeScript"]}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Technologies</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Technologies and tools I work with.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                <SkillCategory
                  title="Backend"
                  skills={["Node.js", "Express", "Golang", "MySQL", "REST API", "JWT Auth", "ORM", "MongoDB"]}
                />
                <SkillCategory
                  title="Frontend"
                  skills={["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"]}
                />
                <SkillCategory
                  title="Tools & Others"
                  skills={["Git", "GitHub", "Postman", "VS Code", "Docker"]}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to chat? Feel free to reach out!
                </p>
              </div>
              <div className="mx-auto w-full max-w-lg">
                {/* Contact form can be made functional with a service like Formspree or an API route */}
                <form className="grid gap-4 mt-8">
                  {/* Form fields... */}
                </form>
                 <div className="mt-8 flex justify-center gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                   <Button variant="outline" size="icon" asChild>
                    <Link href="mailto:achmadfaruqmahdison@gmail.com">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Achmad Faruq Mahdison. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="overflow-hidden">
        <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <CardContent className="p-6 text-left">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground mt-2 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card>
      <CardContent className="p-6 text-left">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}