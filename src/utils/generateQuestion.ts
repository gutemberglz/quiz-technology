import { questions } from "@/data/questions";

export function generateQuestion(slug: string, idsAnswered: number[]) {
  const questionsOfSlug = questions.filter(
    (question) =>
      question.technology === slug && !idsAnswered.includes(question.id)
  );

  if (questionsOfSlug.length === 0) {
    return null;
  }

  let random = -1;
  do {
    random = Math.floor(Math.random() * questionsOfSlug.length);
  } while (random === -1 || idsAnswered.includes(random));

  const question = questionsOfSlug[random];

  if (question.type === "option") {
    question.options = question.options.sort(
      () => Math.random() - Math.random()
    );
  }
  return question;
}
