import { ReactElement } from "react";

type CardProps = {
  children?: ReactElement | ReactElement[];
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`p-4 border border-gray-400 ${className}`}>{children}</div>
  );
}
