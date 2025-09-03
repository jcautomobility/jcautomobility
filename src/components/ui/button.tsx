import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

export function Button({ className, variant="default", size="default", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = variant === "outline"
    ? "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900"
    : "bg-slate-900 text-white hover:bg-slate-700";
  const sizes = size === "sm" ? "h-9 px-3"
    : size === "lg" ? "h-11 px-8 rounded-md"
    : "h-10 px-4";
  return <button className={cn(base, variants, sizes, className)} {...props} />;
}
