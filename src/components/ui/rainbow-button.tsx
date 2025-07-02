import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        // Uiverse.io styles only, no rainbow effect
        "bg-white border border-gray-300 rounded-lg text-gray-900 text-sm font-semibold leading-5 px-4 py-3 text-center shadow-sm cursor-pointer select-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black/10 hover:bg-gray-50 focus-visible:shadow-none",
        className,
      )}
      style={{
        color: '#111827',
        fontSize: '0.875rem',
        fontWeight: 600,
        lineHeight: '1.25rem',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
      }}
      {...props}
    >
      {children}
    </button>
  );
} 