import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

export const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrej Zafirovski | Software Engineer",
  description: "Welcome to my portfolio",
  metadataBase: new URL("https://andrejzafirovski.com"),
  openGraph: {
    type: "website",
    url: "https://andrejzafirovski.com/",
    siteName: "andrejzafirovski.com",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Andrej Zafirovski - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrej Zafirovski - Portfolio",
    description: "Software Engineer - Projects & Notes",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
