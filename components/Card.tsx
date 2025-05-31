import { ReactNode, HTMLAttributes } from "react";

type CardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ children, ...props }: CardProps) {
  return (
    <div className="rounded-2xl border p-4 shadow-md" {...props}>
      {children}
    </div>
  );
}
