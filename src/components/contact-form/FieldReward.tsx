import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FieldRewardProps {
  show: boolean;
  className?: string;
}

const FieldReward = ({ show, className }: FieldRewardProps) => {
  return (
    <div
      className={cn(
        "absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300",
        show ? "opacity-100 scale-100" : "opacity-0 scale-50",
        className
      )}
    >
      <CheckCircle2 className="w-4 h-4 text-green-500 drop-shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
    </div>
  );
};

export default FieldReward;
