import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrollProvider } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Achmad Faruq Mahdison | Backend Engineer",
  description: "Portfolio of Achmad Faruq Mahdison, a Backend Engineer specializing in building scalable and reliable systems with Node.js, NestJS, and PostgreSQL.",
  keywords: ["Backend Engineer", "Software Developer", "Node.js", "NestJS", "TypeScript", "PostgreSQL", "Achmad Faruq Mahdison"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://faruuuqqq.github.io",
    title: "Achmad Faruq Mahdison | Backend Engineer",
    description: "Portfolio of Achmad Faruq Mahdison, a Backend Engineer specializing in scalable and reliable systems.",
    siteName: "Achmad Faruq Mahdison",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achmad Faruq Mahdison | Backend Engineer",
    description: "Portfolio of Achmad Faruq Mahdison, a Backend Engineer.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}