import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = {
  children?: ReactElement | ReactElement[] | string;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={twMerge(`p-4 border border-gray-400 ${className ?? ""}`)}>
      {children}
    </div>
  );
}
