type QuestionAnswerInput = {
  type: "input";
  answer: string;
};

type QuestionAnswerOption = {
  type: "option";
  options: { id: number; value: string }[];
  correctAnswerId: number;
};

export type QuestionType = {
  id: number;
  question: string;
  explanation?: string;
  technology: string;
} & (QuestionAnswerInput | QuestionAnswerOption);
