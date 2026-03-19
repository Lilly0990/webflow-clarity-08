import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface BudgetChipsProps {
  value: string;
  onChange: (value: string) => void;
}

const budgetOptions = [
  { value: "dont-know", label: "Don't Know" },
  { value: "less-5k", label: "Less than $5k" },
  { value: "less-10k", label: "Less than $10k" },
  { value: "more-25k", label: "More than $25k" },
];

const BudgetChips = ({ value, onChange }: BudgetChipsProps) => {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-[#f3f2ef]">Your potential budget</p>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Budget selection">
        {budgetOptions.map((option) => {
          const isSelected = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(isSelected ? "" : option.value)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium",
                "transition-all duration-300 ease-out cursor-pointer",
                "hover:border-primary/50 hover:shadow-sm",
                "active:scale-95",
                isSelected
                  ? "bg-[#d4292b]/20 border-[#d4292b] text-[#f3f2ef] scale-[1.02] shadow-[0_0_12px_rgba(212,41,43,0.15)]"
                  : "bg-white/10 border-white/20 text-[#f3f2ef]/60 hover:text-[#f3f2ef]"
              )}
            >
              {isSelected && (
                <Check className="w-3.5 h-3.5 animate-scale-in" />
              )}
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetChips;
