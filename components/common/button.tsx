import { ReactElement } from "react";

type Props = {
  children?: ReactElement | ReactElement[] | string;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={`bg-white px-8 py-2 border rounded border-1 hover:shadow-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
