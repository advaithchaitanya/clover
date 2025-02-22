
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("border border-white rounded-[25px] p-8", className)}>
      {children}
    </div>
  );
}
