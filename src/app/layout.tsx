import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Quiz das Tecnologias",
  description:
    "O Quiz das Tecnologias é uma ferramenta interativa que permite aos usuários testar e expandir seus conhecimentos sobre diversos aspectos tecnológicos.",
  openGraph: {
    type: "website",
    url: "https://quiz-technology.vercel.app/",
    title: "Quiz das Tecnologias",
    description:
      "O Quiz das Tecnologias é uma ferramenta interativa que permite aos usuários testar e expandir seus conhecimentos sobre diversos aspectos tecnológicos.",
    images: [
      {
        url: "/image_init.png",
        width: 1200,
        height: 630,
        alt: "Imagem do Quiz das Tecnologias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://quiz-technology.vercel.app/",
    title: "Quiz das Tecnologias",
    description:
      "O Quiz das Tecnologias é uma ferramenta interativa que permite aos usuários testar e expandir seus conhecimentos sobre diversos aspectos tecnológicos.",
    images: ["/image_init.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
