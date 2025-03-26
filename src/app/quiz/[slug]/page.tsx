import { ModalQuiz } from "@/components/ModalQuiz";
import { questions } from "@/data/questions";
import { technologies } from "@/data/technologies";
import { generateQuestion } from "@/utils/generateQuestion";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const technology = technologies.find((e) => e.slug === slug);

  return {
    title: technology
      ? `Quiz | ${technology.name}`
      : "Tecnologia não encontrada!",
    description: "",
  };
}

export default async function Quiz({ params }: Props) {
  const { slug } = await params;
  const technology = technologies.find((e) => e.slug === slug);
  const initQuestion = generateQuestion(slug, []);
  const questionsCount = questions.filter(
    (item) => item.technology === slug
  ).length;
  return (
    <main className="min-h-screen container mx-auto px-3 flex items-center justify-center  ">
      {technology && (
        <ModalQuiz
          slug={slug}
          initQuestion={initQuestion}
          questionsCount={questionsCount}
        />
      )}
      {!technology && (
        <div className="text-center text-gray-700">
          <p className="mb-3 text-xl font-semibold ">
            Tecnologia não encontrada!
          </p>
          <p>Verifique o nome da Tecnologia</p>
        </div>
      )}
    </main>
  );
}
