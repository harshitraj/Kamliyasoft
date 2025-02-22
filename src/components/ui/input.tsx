import * as React from "react";
import { cn } from "@/lib/utils";

// Extending the InputHTMLAttributes to ensure InputProps can take in all valid attributes for an <input>
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // You can add additional props if needed, e.g.:
  // label?: string; // Example of a custom prop if necessary
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => { // Default type to 'text'
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
