import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ContactFormWizard from "./ContactFormWizard";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg overflow-hidden bg-black border-white/10 text-[#f3f2ef]">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/freepik_abstract.mp4"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative">
          <DialogHeader className="pb-1">
            <DialogTitle className="text-xl font-bold text-[#f3f2ef]">Let's Talk</DialogTitle>
            <DialogDescription className="text-sm text-[#f3f2ef]/60">
              Tell us about your project — we respond within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <ContactFormWizard onClose={() => onOpenChange(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
