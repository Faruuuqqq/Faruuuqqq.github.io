import { Github, Mail, Linkedin, ExternalLink, Server, Database, Code2, Cpu, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">AFM.</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-primary">About</Link>
            <Link href="#experience" className="transition-colors hover:text-primary">Experience</Link>
            <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
            <Link href="#skills" className="transition-colors hover:text-primary">Skills</Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/faruuuqqq" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/faruqmahdison" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_400px] items-center">
              <div className="flex flex-col justify-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit px-3 py-1 rounded-full">Backend Engineer</Badge>
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl/none">
                    Achmad Faruq <br />
                    <span className="text-primary">Mahdison</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                    Junior Backend Engineer with expertise in building scalable APIs and production-grade systems using Node.js, NestJS, and TypeScript.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="rounded-full px-8">
                    <Link href="#projects">View Projects</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end animate-in fade-in zoom-in-50 duration-1000 delay-200">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-blue-600 opacity-50 blur-lg"></div>
                  <Avatar className="w-64 h-64 lg:w-80 lg:h-80 border-4 border-background shadow-2xl">
                    <AvatarImage src="/logo.png" alt="Achmad Faruq Mahdison" className="object-cover" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>
            <div className="mx-auto max-w-3xl text-lg text-muted-foreground text-center leading-relaxed space-y-6">
              <p>
                I am a <strong>Junior Backend Engineer</strong> and an Informatics Engineering student at Universitas Padjadjaran. 
                I specialize in <strong>Clean Architecture</strong>, <strong>TDD</strong>, and database optimization with PostgreSQL.
              </p>
              <p>
                Passionate about engineering robust backend solutions, I have a proven ability to bridge technical solutions 
                with community impact, demonstrated through my leadership as a <strong>Google Student Ambassador</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
              <p className="text-muted-foreground max-w-[700px]">My professional journey and community involvement.</p>
            </div>
            
            <div className="mx-auto max-w-4xl space-y-12">
              {/* Item 1 */}
              <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" /> Google Student Ambassador (GSA)
                  </h3>
                  <Badge variant="secondary" className="w-fit mt-1 sm:mt-0">Sep 2025 - Present</Badge>
                </div>
                <p className="text-muted-foreground mb-4 font-medium">Leadership & Community</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
                  <li><strong>Promoting Google AI:</strong> Leading efforts to introduce Google Gemini to students and lecturers, teaching effective and ethical AI usage.</li>
                  <li><strong>Campus Liaison:</strong> Acting as the main contact point between Google and the university to share information about scholarships, events, and career opportunities.</li>
                </ul>
              </div>

              {/* Item 2 */}
              <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" /> Pansus Studio
                  </h3>
                  <Badge variant="secondary" className="w-fit mt-1 sm:mt-0">Aug 2025 - Present</Badge>
                </div>
                <p className="text-muted-foreground mb-4 font-medium">Back End Developer (Internship)</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
                  <li><strong>Built Scalable APIs:</strong> Developed reliable API endpoints using NestJS & TypeORM that serve as the main data source.</li>
                  <li><strong>Optimized Database Queries:</strong> Managed complex relational schemas in PostgreSQL, reducing query execution time and ensuring data consistency.</li>
                  <li><strong>Improved System Stability:</strong> Added validation checks (DTOs) and error handling to prevent system crashes and minimize bugs.</li>
                </ul>
              </div>

              {/* Item 3 */}
              <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" /> COMPFEST Software Engineer Academy
                  </h3>
                  <Badge variant="secondary" className="w-fit mt-1 sm:mt-0">July 2025 - Sep 2025</Badge>
                </div>
                <p className="text-muted-foreground mb-4 font-medium">Mentee</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm md:text-base">
                  <li><strong>Mastered Modern Engineering:</strong> Completed intensive training on Clean Code Architecture, System Design, and Scalability.</li>
                  <li><strong>Applied TDD & CI/CD:</strong> Implemented Test-Driven Development and configured GitHub Actions pipelines to streamline deployment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="text-muted-foreground max-w-[700px]">
                Highlights of my work in backend engineering and full-stack development.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
              
              <ProjectCard 
                title="Nara Jiwa" 
                subtitle="Mental Health Support Platform"
                description="Built secure confidential ticketing system using Firebase allowing anonymous messages. Created a mood tracking tool visualizing user emotions using charts and automatically suggesting help when negative patterns are detected." 
                image="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2000&auto=format&fit=crop"
                tags={["Next.js", "Firebase", "Tailwind CSS", "Recharts"]}
                githubUrl="#"
                liveUrl="https://narajiwa.site"
              />

              <ProjectCard 
                title="ChatCraft" 
                subtitle="AI Automation SaaS Platform"
                description="Built a subscription-based platform using Next.js and Clerk to secure user logins & data protection. Implemented dynamic JSON-LD Schema Markup and automated sitemap generation to boost search engine visibility." 
                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop" 
                tags={["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Clerk"]}
                githubUrl="#"
                liveUrl="https://chatcraft.store"
              />

              <ProjectCard 
                title="SEA Catering" 
                subtitle="Healthy Food Delivery App"
                description="Engineered secure, role-based authentication (Admin/User) using NextAuth.js and developed a dynamic subscription module with real-time price calculation. Delivered an analytical Admin Dashboard (Recharts) to visualize key business metrics." 
                image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop" 
                tags={["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind"]}
                githubUrl="https://github.com/Faruuuqqq/sea-catering"
                liveUrl="https://sea-catering-five.vercel.app/"
              />
              
              <ProjectCard 
                title="Stay Awake Coffee" 
                subtitle="E-Commerce Website"
                description="Architected a scalable backend using the MVC pattern and implemented robust JWT authentication and role-based authorization. Built core e-commerce functionalities tailored for specific business needs." 
                image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop"
                tags={["Node.js", "Express.js", "MySQL", "JWT", "Swagger", "MVC Pattern"]}
                githubUrl="https://github.com/Faruuuqqq/stay_awake_coffe"
              />

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="text-muted-foreground max-w-[700px]">
                My technical stack and tools used for development.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <SkillCard 
                icon={<Code2 className="h-8 w-8 text-primary" />}
                title="Languages" 
                skills={["TypeScript", "JavaScript", "Go", "Python", "Java", "C++"]} 
              />
              <SkillCard 
                icon={<Server className="h-8 w-8 text-primary" />}
                title="Backend" 
                skills={["Node.js", "NestJS", "Express.js", "REST API", "JWT", "Swagger"]} 
              />
              <SkillCard 
                icon={<Database className="h-8 w-8 text-primary" />}
                title="Data" 
                skills={["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "TypeORM"]} 
              />
              <SkillCard 
                icon={<Cpu className="h-8 w-8 text-primary" />}
                title="DevOps & Tools" 
                skills={["Docker", "AWS", "Git", "CI/CD", "RabbitMQ", "Postman"]} 
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Let&apos;s Build Something Great</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl leading-relaxed mb-8">
              I am highly motivated to collaborate on challenging projects. Connect with me to discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" asChild className="rounded-full font-bold">
                <Link href="mailto:faruqmahdison@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Send Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold">
                <Link href="https://www.linkedin.com/in/faruqmahdison" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 w-full border-t bg-background">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2025 Achmad Faruq Mahdison. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="https://github.com/faruuuqqq" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/faruqmahdison" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:faruqmahdison@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// -- Components --

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

function ProjectCard({ title, subtitle, description, image, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all hover:-translate-y-1 duration-300 border-muted group">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubUrl !== "#" && (
            <Button size="sm" variant="secondary" asChild className="rounded-full">
              <Link href={githubUrl} target="_blank">
                <Github className="mr-2 h-4 w-4" /> Code
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild className="rounded-full">
              <Link href={liveUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
      <CardHeader className="p-6 pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <p className="text-sm text-primary font-medium mt-1">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex flex-col flex-grow">
        <CardDescription className="mt-2 text-base line-clamp-3 mb-4">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <Card className="h-full border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <div className="p-2 rounded-lg bg-primary/10">
          {icon}
        </div>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm bg-background/50 hover:bg-primary/5 hover:text-primary transition-colors">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}