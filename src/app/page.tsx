import { Metadata } from "next";

import { technologies } from "@/data/technologies";

import { TechnologyCard } from "../components/TechnologyCard";

export const metadata: Metadata = {
  title: "Quiz das Tecnologias",
  description: "Teste suas habilidades em tecnologias atuais",
};

export default function Home() {
  return (
    <main className="container mx-auto px-3">
      <h1 className="my-7 text-2xl flex justify-center items-center md:justify-normal">
        Quiz das&nbsp;
        <span className="px-2 py-0.5 rounded-md bg-black text-white ">
          Tecnologias
        </span>
      </h1>
      <div className="grid grdi-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {technologies.map((item, index) => (
          <TechnologyCard key={index} data={item} />
        ))}
      </div>
    </main>
  );
}
