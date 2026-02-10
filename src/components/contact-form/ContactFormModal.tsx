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
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="pb-1">
          <DialogTitle className="text-xl font-bold">Let's Talk</DialogTitle>
          <DialogDescription className="text-sm">
            Tell us about your project — we respond within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <ContactFormWizard onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
