import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: ReactElement | ReactElement[] | string;
  className?: string;
  onClick?: () => void;
  variant: string;
  type: "button" | "submit" | "reset" | undefined;
};

interface Variant {
  [key: string]: string | undefined;
}

const variants: Variant = {
  default: "bg-white hover:shadow-grey-300 border-gray-200",
  primary: "bg-red-800 text-white border-red-900 hover:shadow-red-900",
};

export default function Button({
  children,
  className,
  onClick,
  variant,
  type,
}: Props) {
  return (
    <button
      className={twMerge(
        `${
          variants[variant] ?? "bg-white"
        } px-8 py-2 border rounded  hover:shadow-sm ${className ?? ""}`
      )}
      onClick={onClick}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
}
