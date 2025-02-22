import { cn } from "@/lib/utils";
interface CardProps {
  className?: string;
  children: React.ReactNode;
}
export function Card({
  className,
  children
}: CardProps) {
  return <div className="bg-orange-500 hover:bg-orange-400 rounded-3xl w-full py-[70px]">
      {children}
    </div>;
}