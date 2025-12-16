"use client";
import { cn } from "@/lib/utils";

type TabButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "font-Outfit text-xs md:text-sm font-medium py-[8px] px-[8px] md:px-[16px] rounded-md",
        "transition-all duration-300 ease-in-out",

        active
          ? "bg-primary text-white scale-[1.03]"
          : "text-input_text hover:bg-[#E6FBF2] hover:scale-[1.01]"
      )}
    >
      {children}
    </button>
  );
}

export default TabButton;
