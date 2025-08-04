import Navbar from "@/components/Nav/Navbar";
import { Provider } from "@/components/ui/provider";
import { Box, Flex } from "@chakra-ui/react";
import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
});
const siteConfig = {
  name: "Chakra UI v3 Templates",
  title: "Free Chakra UI v3 Templates & Components Library",
  description:
    "Open-source Chakra UI v3 templates and components for React. Build beautiful, responsive web applications faster with production-ready templates, dashboards, landing pages, and more.",
  url: "https://chakra-ui-templates.com",
  ogImage: "#",
  links: {
    github: "https://github.com/codenaij/chakra-ui-templates",
    twitter: "https://twitter.com/code_naij",
  },
  keywords: [
    "chakra ui",
    "chakra ui v3",
    "react templates",
    "react components",
    "ui templates",
    "dashboard templates",
    "landing page templates",
    "open source",
    "typescript",
    "nextjs templates",
    "responsive design",
    "accessibility",
    "dark mode",
    "free templates",
    "web development",
    "frontend templates",
    "material design",
    "bootstrap alternative",
    "tailwind alternative",
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Chinonso Caleb",
      url: "https://chinonso.dev",
    },
  ],
  creator: "Chinonso Caleb",
  publisher: "Chinonso Caleb",

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@code_naij",
    site: "@code_naij",
  },

  // Additional metadata
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },

  // App metadata
  applicationName: siteConfig.name,
  category: "Technology",
  classification: "Web Development Tools",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
  colorScheme: "light dark",
};

// JSON-LD Structured Data
export function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Website
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },

      // Organization
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
          width: 512,
          height: 512,
        },
        sameAs: [siteConfig.links.github, siteConfig.links.twitter],
      },

      // WebPage
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#organization`,
        },
        description: siteConfig.description,
      },

      // SoftwareApplication
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        author: {
          "@type": "Person",
          name: "Chinonso Caleb",
        },
        programmingLanguage: [
          "TypeScript",
          "JavaScript",
          "React",
          "HTML",
          "CSS",
        ],
        codeRepository: siteConfig.links.github,
        license: "https://opensource.org/licenses/MIT",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe use for JSON-LD structured data
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${dmSans.className}`}>
        <Provider>
          {/* <LightMode> */}
          <Box height={"100vh"}>
            <Navbar />
            <Flex flexDir="row" flex={"1"} height={"calc(100vh - 80px)"}>
              {/* <Sidebar /> */}
              <Box
                w={"100%"}
                bg={"teal"}
                pt={10}
                px={{ base: 5, md: 20 }}
                overflowY={"auto"}
              >
                {children}
              </Box>
            </Flex>
          </Box>
          {/* </LightMode> */}
        </Provider>
      </body>
    </html>
  );
}
