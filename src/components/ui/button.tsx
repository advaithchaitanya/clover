
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link" | "ghost" | "icon" | "outline";
  size?: "sm" | "md" | "lg" | "icon" | "default";
}

const buttonStyles = {
  variants: {
    primary: "bg-black text-white border border-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:scale-110 transition-all duration-300",
    secondary: "border border-white text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:scale-110 transition-all duration-300",
    link: "text-white hover:text-purple-400 hover:scale-110 transition-all duration-300",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    icon: "h-10 w-10 p-0",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  },
  sizes: {
    sm: "px-5 py-2 text-base",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    icon: "h-10 w-10",
    default: "h-10 px-4 py-2",
  },
};

export const buttonVariants = (props: { variant?: ButtonProps["variant"]; size?: ButtonProps["size"] } = {}) => {
  const { variant = "primary", size = "md" } = props;
  return cn(buttonStyles.variants[variant], buttonStyles.sizes[size]);
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-normal transition-colors";

    return (
      <button
        ref={ref}
        className={cn(baseStyles, buttonStyles.variants[variant], buttonStyles.sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
