import Link from "next/link";

import { TechnologyType } from "@/types/TechnologyType";

import { Button } from "./ui/Button";

type Props = {
  data: TechnologyType;
};

export function TechnologyCard({
  data: {
    icon: { Svg, ...icon },
    slug,
    name,
    description,
  },
}: Props) {
  return (
    <div className="min-h-20 p-3 bg-white rounded-lg flex flex-col shadow-md">
      <div className="flex gap-2 items-center ">
        <div className="size-12 p-1 rounded-full flex justify-center items-center">
          {<Svg size={icon.size ?? "100%"} color={icon.color} />}
        </div>
        <div className="font-bold">{name}</div>
      </div>
      <div className="mt-3 text-sm  text-gray-700 first-letter:uppercase md:text-base">
        {description}
      </div>
      <div className="h-full mt-5 flex justify-end items-end">
        <Link href={`/quiz/${slug}`} className="flex-1">
          <Button border activeClick className="text-black">
            Iniciar Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
}
