
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  size?: "sm" | "md" | "lg";
}

export const buttonVariants = {
  primary: "bg-black text-white border border-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:scale-110 transition-all duration-300",
  secondary: "border border-white text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:scale-110 transition-all duration-300",
  link: "text-white hover:text-purple-400 hover:scale-110 transition-all duration-300",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-normal transition-colors";

    const sizes = {
      sm: "px-5 py-2 text-base",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, buttonVariants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
