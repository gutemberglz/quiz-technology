import { Dispatch, SetStateAction } from "react";

type Props = {
  data: { id: number; value: string };
  selectedOption: number | null;
  setSelectedOption: Dispatch<SetStateAction<number | null>>;
};

export function Option({
  data: { id, value },
  selectedOption,
  setSelectedOption,
}: Props) {
  function handleClick() {
    setSelectedOption(id);
  }

  return (
    <label className="flex items-start gap-3  cursor-pointer">
      <div className="mt-0.5 size-5 flex justify-center items-center ">
        <input
          className="size-4 cursor-pointer appearance-none border rounded-full checked:bg-black"
          type="radio"
          name="option"
          id={id.toString()}
          checked={selectedOption === id}
          onChange={handleClick}
        />
      </div>
      <span
        className={`flex-1  ${
          selectedOption === id
            ? "font-semibold"
            : selectedOption !== null && "text-gray-700"
        }`}
      >
        {value}
      </span>
    </label>
  );
}
