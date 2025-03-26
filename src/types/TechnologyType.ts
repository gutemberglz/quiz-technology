import { IconType } from "react-icons";

export type TechnologyType = {
  icon: {
    Svg: IconType;
    size?: number;
    color?: string;
    background?: string;
  };
  slug: string;
  name: string;
  description: string;
  countQuestions?: number;
};
