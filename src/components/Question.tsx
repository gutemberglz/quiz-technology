"use client";

import { useState } from "react";

import { QuestionType } from "@/types/QuestionType";

import { Option } from "./Option";
import { Button } from "./ui/Button";

type Props = {
  question: QuestionType;
  loading: boolean;
  addQuestionAnswered: (questionId: number, answer: string | number) => void;
};
export function Question({ question, loading, addQuestionAnswered }: Props) {
  const [answer, setAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  function handleNextQuestion() {
    if (question.type === "input" && answer.trim()) {
      addQuestionAnswered(question.id, answer);
    } else if (question.type === "option" && selectedOption) {
      addQuestionAnswered(question.id, selectedOption);
    }
    setAnswer("");
    setSelectedOption(null);
  }

  return (
    <div className="w-full flex flex-col gap-5  shadow-md p-5 rounded-lg">
      <div>
        <h1 className="text-lg font-bold md:text-xl first-letter:uppercase">
          {question.question}
        </h1>
        {question.type === "option" && (
          <div className="text-sm text-gray-500">
            Assinale a alternativa correta:
          </div>
        )}
      </div>

      <div>
        {question.type === "option" && (
          <ul className="flex flex-col gap-3">
            {question.options.map((option, index) => (
              <Option
                key={index}
                data={option}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            ))}
          </ul>
        )}
        {question.type === "input" && (
          <input
            type="text"
            placeholder="Digite sua resposta?"
            className="w-full px-3 py-1 text-lg rounded-md border-b outline-none "
            value={answer}
            onChange={(e) => setAnswer(e.currentTarget.value)}
          />
        )}
      </div>
      <div className="w-full flex justify-end">
        <div>
          <Button
            bg
            onClick={handleNextQuestion}
            disabled={
              loading || question.type === "input"
                ? !answer.trim()
                : selectedOption === null
            }
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}
