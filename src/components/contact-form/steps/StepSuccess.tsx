import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Confetti from "../Confetti";

interface StepSuccessProps {
  onClose: () => void;
}

const StepSuccess = ({ onClose }: StepSuccessProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-8 space-y-6">
      <Confetti />

      {/* Animated checkmark */}
      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center animate-scale-in">
        <CheckCircle2 className="w-12 h-12 text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]" />
      </div>

      <div className="space-y-2 animate-fade-in">
        <h3 className="text-2xl font-bold">We got your message!</h3>
        <p className="text-muted-foreground max-w-sm">
          We'll get back to you within 24 hours with an honest assessment and realistic timelines.
        </p>
      </div>

      <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
        You're awesome!
      </p>

      <Button
        onClick={onClose}
        size="lg"
        className="glow-effect animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        Close
      </Button>
    </div>
  );
};

export default StepSuccess;
