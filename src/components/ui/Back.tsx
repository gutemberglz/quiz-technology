"use client";

import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

type Props = {
  value: string;
  href: string;
};

export function Back({ value, href }: Props) {
  return (
    <Link href={href} className="flex gap-2 items-center ">
      <HiArrowSmLeft fontSize={25} />
      <span className="font-semibold">{value}</span>
    </Link>
  );
}
