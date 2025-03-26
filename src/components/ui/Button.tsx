import { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  bg?: boolean;
  border?: boolean;
  activeClick?: boolean;
};

export function Button({
  children,
  disabled,
  bg,
  border,
  activeClick,
  className,
  ...res
}: Props & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`w-full py-2 px-4 text-sm font-bold rounded cursor-pointer transition-all ease-in-out duration-300 disabled:bg-white disabled:text-black disabled:cursor-auto md:text-base ${
        border && " border-2 "
      } ${
        bg
          ? "bg-black text-white border-black"
          : "text-gray-500 border-gray-500 hover:bg-black hover:text-white hover:border-black"
      } ${
        activeClick && "active:bg-black active:text-white active:border-black"
      } ${className}`}
      {...res}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
