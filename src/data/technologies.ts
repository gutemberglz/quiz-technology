import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { TechnologyType } from "@/types/TechnologyType";

const questions = [
  {
    slug: "express",
    question: "Qual framework JavaScript foi criado por Facebook e Instagram?",
    answer: "React",
    technologies: ["javascript"],
    explanation:
      "React é um framework JavaScript desenvolvido pela Facebook para construir interfaces de usuário em páginas web.",
    category: "Web Development",
  },
];

export const technologies: TechnologyType[] = [
  {
    icon: {
      Svg: SiHtml5,
      color: "#f06529",
    },
    slug: "html",
    name: "HTML",
    description:
      "HTML é uma linguagem de marcação que é usada para o desenvolvimento de páginas na web.",
  },
  {
    icon: {
      Svg: SiCss3,
      color: "#1572b6",
    },
    slug: "css",
    name: "CSS",
    description:
      "CSS é uma linguagem de estilo que é usada para estilizar elementos escritos em HTML.",
  },
  {
    icon: {
      Svg: SiGit,
      color: "#e14436",
    },
    slug: "git",
    name: "Git",
    description:
      "Git é um sistema de controle de versão usado para rastrear alterações em arquivos, principalmente em projetos de software.",
  },
  {
    icon: {
      Svg: SiJavascript,
      size: 35,
      color: "#f3ce30",
    },
    slug: "javascript",
    name: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação que é usada para adicionar interatividade a páginas web.",
  },

  {
    icon: {
      Svg: SiTypescript,
      size: 33,
      color: "#3178C6",
    },
    slug: "typescript",
    name: "TypeScript",
    description:
      "TypeScript é uma linguagem de programação baseada em JavaScript que adiciona tipagem estática opcional e outros recursos avançados.",
  },

  {
    icon: {
      Svg: SiReact,
      color: "#61dafb",
    },
    slug: "react",
    name: "React",
    description:
      "React é uma biblioteca de JavaScript para a criação de interfaces de usuário.",
  },
  {
    icon: {
      Svg: SiNextdotjs,
      color: "#000",
    },
    slug: "nextjs",
    name: "Next.js",
    description: "Next.js é um framework de React para aplicações web.",
  },
  {
    icon: {
      Svg: SiTailwindcss,
      color: "#06b6d4",
    },
    slug: "tailwindcss",
    name: "Tailwind CSS",
    description:
      "Tailwind Css é um framework de CSS para a criação de interfaces de usuário.",
  },
  {
    icon: {
      Svg: SiNodedotjs,
      color: "#026e00",
    },
    slug: "nodejs",
    name: "Node.js",
    description: "Node.js é um ambiente de execução de JavaScript server-side.",
  },
  {
    icon: {
      Svg: SiExpress,
      color: "#000",
    },
    slug: "express",
    name: "Express",
    description:
      "Express é um framework de Node.js para a criação de aplicações web.",
    countQuestions: questions.filter((item) => item.slug === "express").length,
  },
];
