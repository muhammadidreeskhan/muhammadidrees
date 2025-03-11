import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/ui/custom-cursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Muhammad Idrees | Creative Developer & Front-End Expert",
  description: "Muhammad Idrees is a Front-End Developer specializing in creating exceptional digital experiences with React, Next.js, and modern web technologies.",
  generator: 'Next.js',
  applicationName: 'Muhammad Idrees Portfolio',
  keywords: ['web developer', 'front-end developer', 'react developer', 'next.js developer', 'UI/UX', 'portfolio', 'Muhammad Idrees'],
  authors: [{ name: 'Muhammad Idrees', url: 'https://github.com/muhammadidreeskhan' }],
  creator: 'Muhammad Idrees',
  publisher: 'Muhammad Idrees',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://muhammadidrees.vercel.app'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'IJd5Z2gHMeswh8Ze1i-ZiU0HCxGvUMHXBhOM9UmBhu0',
  },
  openGraph: {
    title: 'Muhammad Idrees | Creative Developer & Front-End Expert',
    description: 'Muhammad Idrees is a Front-End Developer specializing in creating exceptional digital experiences with React, Next.js, and modern web technologies.',
    url: 'https://muhammadidrees.vercel.app',
    siteName: 'Muhammad Idrees Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Idrees - Front-End Developer'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Idrees | Creative Developer & Front-End Expert',
    description: 'Muhammad Idrees is a Front-End Developer specializing in creating exceptional digital experiences with React, Next.js, and modern web technologies.',
    creator: '@happyikhan',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preload critical resources
              const preloadLinks = [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
              ];
              
              preloadLinks.forEach(link => {
                const linkElem = document.createElement('link');
                Object.keys(link).forEach(attr => {
                  if (attr !== 'crossOrigin') {
                    linkElem.setAttribute(attr, link[attr]);
                  } else if (link[attr]) {
                    linkElem.setAttribute('crossorigin', 'anonymous');
                  }
                });
                document.head.appendChild(linkElem);
              });
            `
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans custom-cursor-active`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'