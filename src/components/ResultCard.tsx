"use client";

import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosCheckmarkCircle,
  IoMdCloseCircle,
} from "react-icons/io";

type Props = {
  data: {
    question: string;
    true: string;
    false?: string | undefined;
    explanation?: string | undefined;
  };
};

export function ResultCard({ data }: Props) {
  const [openExplanation, setOpenExplanation] = useState(false);

  function handleOpenExplanation() {
    setOpenExplanation((prev) => !prev);
  }

  return (
    <div className=" p-3 shadow-md ">
      <h2 className="font-semibold text-lg first-letter:uppercase">
        {data.question}
      </h2>
      <div className="mt-5 flex gap-3 items-center">
        <div>
          {data.false ? (
            <IoMdCloseCircle fontSize={35} color="#C2050C" />
          ) : (
            <IoIosCheckmarkCircle fontSize={35} color="#018237" />
          )}
        </div>
        <div className="font-semibold">
          {data.false && (
            <>
              <p className="text-[#C2050C]">Sua Resposta: {data.false}</p>
              <p className="text-green-700">Resposta correta: {data.true}</p>
            </>
          )}
          {!data.false && (
            <p className="text-green-700">Acertou: {data.true}</p>
          )}
        </div>
      </div>
      <div
        className={`mt-5  cursor-pointer ${
          openExplanation ? "h-fit " : "h-6 overflow-hidden"
        }`}
        onClick={handleOpenExplanation}
      >
        <div className="flex justify-between">
          <span className="font-semibold">Explicação</span>
          <span>
            {openExplanation ? (
              <IoIosArrowUp fontSize={30} />
            ) : (
              <IoIosArrowDown fontSize={30} />
            )}
          </span>
        </div>
        <div className="text-gray-600">{data.explanation}</div>
      </div>
    </div>
  );
}
