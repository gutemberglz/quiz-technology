import { questions } from "@/data/questions";
import { QuestionsAnsweredType } from "@/types/QuestionsAnsweredType";

export function verifyQuestionsFn(questionsAnswered: QuestionsAnsweredType[]) {
  const result = questionsAnswered.map((item) => {
    const question = questions.find((e) => e.id === item.id);

    if (!question) {
      return undefined;
    }

    if (question.type === "input") {
      const resSplit = item.answer.toString().toLowerCase().trim().split(" ");
      const resFilter = resSplit.filter((i) => i !== "");
      const resFinal = resFilter.join(" ");

      if (resFinal === question.answer) {
        return {
          question: question.question,
          true: question.answer,
          explanation: question.explanation,
        };
      } else {
        return {
          question: question.question,
          true: question.answer,
          false: item.answer as string,
          explanation: question.explanation,
        };
      }
    } else {
      if (question.correctAnswerId === item.answer) {
        return {
          question: question.question,
          true:
            question.options.find((a) => a.id === question.correctAnswerId)
              ?.value ?? "Erro",
          explanation: question.explanation,
        };
      } else {
        return {
          question: question.question,
          true:
            question.options.find((a) => a.id === question.correctAnswerId)
              ?.value ?? "Erro",
          false:
            question.options.find((a) => a.id === item.answer)?.value ?? "Erro",
          explanation: question.explanation,
        };
      }
    }
  });

  return result.filter((res) => res !== undefined);
}
