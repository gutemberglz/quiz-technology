"use client";

import { useEffect, useState } from "react";

import { QuestionsAnsweredType } from "@/types/QuestionsAnsweredType";
import { QuestionType } from "@/types/QuestionType";
import { generateQuestion } from "@/utils/generateQuestion";

import { Question } from "./Question";
import { Result } from "./Result";

type Props = {
  slug: string;
  initQuestion: QuestionType | null;
  questionsCount: number;
};
export function ModalQuiz({ slug, initQuestion, questionsCount }: Props) {
  const [loading, setLoading] = useState(false);
  const [final, setFinal] = useState(initQuestion === null ? true : false);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(
    initQuestion
  );
  const [idsAnswered, setIdsAnswered] = useState<number[]>(
    initQuestion?.id ? [initQuestion.id] : []
  );
  const [questionsAnswered, setQuestionsAnswered] = useState<
    QuestionsAnsweredType[]
  >([]);

  function addQuestionAnswered(questionId: number, answer: string | number) {
    setQuestionsAnswered((prev) => [
      ...prev,
      { id: questionId, answer: answer },
    ]);
    nextQuestion();
  }

  function getQuestion() {
    setLoading(true);
    const question = generateQuestion(slug, idsAnswered);
    setLoading(false);
    setCurrentQuestion(question);
  }

  async function nextQuestion() {
    if (currentQuestion) {
      await new Promise((resolve) => {
        resolve(
          setIdsAnswered((prev) => {
            prev.push(currentQuestion.id);

            return prev;
          })
        );
      });
    }

    getQuestion();
  }

  useEffect(() => {
    if (currentQuestion === null) {
      setFinal(true);
    }
  }, [currentQuestion]);

  return (
    <div>
      {!final && currentQuestion && (
        <div className="w-full md:w-[650px] flex flex-col gap-1">
          <h3 className="w-full pr-3 text-lg font-bold flex justify-end">
            {questionsAnswered.length + 1}/{questionsCount}
          </h3>

          <Question
            loading={loading}
            addQuestionAnswered={addQuestionAnswered}
            question={currentQuestion}
          />
        </div>
      )}
      {final && (
        <>
          {questionsAnswered.length === 0 && (
            <p>Essa tecnologia ainda não têm perguntas.</p>
          )}
          {questionsAnswered.length > 0 && <Result data={questionsAnswered} />}
        </>
      )}
    </div>
  );
}
