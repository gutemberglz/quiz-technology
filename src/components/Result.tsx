"use client";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2"; // Importando o componente de gráfico de linha do react-chartjs-2
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { QuestionsAnsweredType } from "@/types/QuestionsAnsweredType";
import { verifyQuestionsFn } from "@/utils/verifyQuestionsFn";

import { ResultCard } from "./ResultCard";
import { Back } from "./ui/Back";

// Registre os controladores necessários para o gráfico
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  data: QuestionsAnsweredType[];
};

const options = {
  responsive: true,
  plugins: {
    title: {
      displa: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 1,
      ticks: {
        stepSize: 1,
        callback: function (value: number) {
          return value === 1 ? "Acertou" : "Errou";
        },
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export function Result({ data }: Props) {
  const [chartData, setChartData] = useState<any>(null);
  const [openExplanation, setOpenExplanation] = useState(false);
  const verifyQuestions = verifyQuestionsFn(data);
  const hits = verifyQuestions.filter((q) => q?.false === undefined).length;

  function generateChartData() {
    return {
      labels: Array.from({ length: verifyQuestions.length }, (_, i) => ``),
      datasets: [
        {
          data: verifyQuestions.map((q) => (q?.false === undefined ? 1 : 0)),
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0,
        },
      ],
    };
  }

  function handleOpenExplanation() {
    setOpenExplanation((prev) => !prev);
  }

  useEffect(() => {
    const data = generateChartData();
    setChartData(data);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mt-5 w-full flex justify-between items-center">
        <Back href="/" value="Inicio" />
      </div>
      <h1 className="my-5 text-xl font-bold">
        Você acertou {hits}/{verifyQuestions.length}
      </h1>
      <div className="w-full">
        <div className="w-full h-[200px]">
          {chartData && (
            <Line
              data={chartData}
              options={options as any}
              className="w-full h-full"
            />
          )}
        </div>
        <div
          className={`mt-5  cursor-pointer ${
            openExplanation ? "h-fit " : "h-6 overflow-hidden"
          }`}
          onClick={handleOpenExplanation}
        >
          <div className="flex justify-between">
            <span className="font-semibold">Explicação do gráfico</span>
            <span>
              {openExplanation ? (
                <IoIosArrowUp fontSize={30} />
              ) : (
                <IoIosArrowDown fontSize={30} />
              )}
            </span>
          </div>
          <div className="text-gray-600">
            <p>Este gráfico não têm explicação kkkkkkkkkkk</p>
            <p>Eu so quis colocar ele praaaaaaa, sei lá</p>
          </div>
        </div>
      </div>
      <hr className="my-5 text-black border border-c" />

      <div className="w-full md:w-[600px] flex flex-col gap-3">
        {verifyQuestions.map((verifyQuestion, index) => (
          <ResultCard key={index} data={verifyQuestion} />
        ))}
      </div>
    </div>
  );
}
