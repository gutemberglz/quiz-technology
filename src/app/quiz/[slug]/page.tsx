import { ModalQuiz } from "@/components/ModalQuiz";
import { questions } from "@/data/questions";
import { generateQuestion } from "@/utils/generateQuestion";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function Quiz({ params }: Props) {
  const { slug } = await params;
  const initQuestion = generateQuestion(slug, []);
  const questionsCount = questions.filter(
    (item) => item.technology === slug
  ).length;
  return (
    <main className="min-h-screen container mx-auto px-3 flex items-center justify-center  ">
      <ModalQuiz
        slug={slug}
        initQuestion={initQuestion}
        questionsCount={questionsCount}
      />
    </main>
  );
}
