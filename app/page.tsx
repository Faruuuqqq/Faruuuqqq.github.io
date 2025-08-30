import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

// Definisikan tipe untuk props agar tidak error saat build
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold hidden sm:inline-block">Achmad Faruq Mahdison</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="#about" className="transition-colors hover:text-foreground/80">About</Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">Projects</Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">Skills</Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-20 md:py-28 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
              <div className="flex flex-col justify-center space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-foreground/80 bg-clip-text text-transparent">
                    Achmad Faruq Mahdison
                  </h1>
                  <p className="text-primary font-medium md:text-xl">
                    Backend Developer | Building Scalable & Efficient Applications
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl pt-2">
                    Mahasiswa Teknik Informatika di Universitas Padjadjaran dengan spesialisasi di ekosistem JavaScript. Berpengalaman membangun aplikasi sisi server yang tangguh menggunakan Node.js dan NestJS.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild size="lg"><Link href="#contact">Contact Me</Link></Button>
                  <Button variant="outline" asChild size="lg"><Link href="#projects">View My Work</Link></Button>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="ghost" size="icon" asChild><Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /><span className="sr-only">GitHub</span></Link></Button>
                  <Button variant="ghost" size="icon" asChild><Link href="https://www.linkedin.com/in/faruqmahdison" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span></Link></Button>
                  <Button variant="ghost" size="icon" asChild><Link href="mailto:faruqmahdison@gmail.com"><Mail className="h-5 w-5" /><span className="sr-only">Email</span></Link></Button>
                </div>
              </div>
              <div className="flex items-center justify-center animate-in fade-in zoom-in-50 duration-1000">
                <img src="https://avatars.githubusercontent.com/u/91350253?v=4" alt="Profile" width={400} height={400} className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Saya adalah seorang Mahasiswa Teknik Informatika di Universitas Padjadjaran dan seorang Back End Developer yang fokus pada pengembangan aplikasi sisi server menggunakan Node.js dan NestJS, dengan keahlian dalam manajemen database MySQL. Saat ini, saya aktif sebagai Back End Developer di Pansus Studio dan menjadi Mentee di Software Engineer Academy COMPFEST, di mana saya mendalami scalable design patterns, Agile workflows, dan Test-Driven Development (TDD). Saya memahami seluruh Siklus Hidup Pengembangan Perangkat Lunak (SDLC), prinsip CI/CD, dan dasar-dasar komputasi awan dengan AWS.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Berikut adalah beberapa proyek yang pernah saya kerjakan.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard 
                title="E-commerce API" 
                description="Merancang dan membangun REST API untuk platform e-commerce menggunakan NestJS. Mengimplementasikan fitur autentikasi JWT, manajemen produk, dan proses transaksi." 
                image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546" 
                tags={["NestJS", "Node.js", "MySQL", "REST API", "JWT"]}
                githubUrl="https://github.com/faruuuqqq"
              />
              <ProjectCard 
                title="Task Management Backend" 
                description="Mengembangkan backend untuk aplikasi manajemen tugas dengan fitur kolaborasi real-time. Bertanggung jawab atas desain database dan arsitektur API." 
                image="https://images.unsplash.com/photo-1547480053-7d174f67b557"
                tags={["Node.js", "Express", "MongoDB", "WebSocket"]}
                githubUrl="https://github.com/faruuuqqq"
              />
              <ProjectCard 
                title="Portfolio Website" 
                description="Membangun situs portofolio pribadi yang responsif menggunakan Next.js dan di-deploy sebagai situs statis di GitHub Pages." 
                image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5" 
                tags={["Next.js", "React", "Tailwind CSS", "Static Site"]}
                githubUrl="https://github.com/faruuuqqq/faruuuqqq.github.io"
                liveUrl="https://faruuuqqq.github.io/"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills & Technologies</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Teknologi dan alat yang saya gunakan dalam bekerja.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              <SkillCategory title="Backend" skills={["Node.js", "NestJS", "Express", "REST API", "JWT Auth", "MySQL", "MongoDB"]} />
              <SkillCategory title="Bahasa Pemrograman" skills={["JavaScript", "TypeScript", "Python", "C++"]} />
              <SkillCategory title="Tools & Others" skills={["Git", "CI/CD", "AWS (Dasar)", "Docker", "Postman"]} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
              Saya sangat antusias untuk berkolaborasi dalam proyek yang menantang dan berkontribusi dalam solusi teknologi yang efektif dan skalabel. Mari terhubung untuk mendiskusikan peluang di bidang pengembangan backend.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild><Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /><span className="sr-only">GitHub</span></Link></Button>
              <Button variant="outline" size="icon" asChild><Link href="https://www.linkedin.com/in/faruqmahdison" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /><span className="sr-only">LinkedIn</span></Link></Button>
              <Button variant="outline" size="icon" asChild><Link href="mailto:faruqmahdison@gmail.com"><Mail className="h-4 w-4" /><span className="sr-only">Email</span></Link></Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full border-t">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; 2025 Achmad Faruq Mahdison. All rights reserved.</p>
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

function ProjectCard({ title, description, image, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group text-left flex flex-col">
      <div className="overflow-hidden">
        <img src={image} alt={title} width={400} height={225} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-muted-foreground mt-1 text-sm flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        
        <div className="mt-6 flex gap-3">
          <Button variant="outline" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Source Code
            </Link>
          </Button>
          {liveUrl && (
            <Button asChild>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Link>
            </Button>
          )}
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