import { createContext, useCallback, useContext, useState } from "react";
import ContactFormModal from "@/components/contact-form/ContactFormModal";

interface ContactFormContextType {
  isOpen: boolean;
  openContactForm: () => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = useCallback(() => setIsOpen(true), []);
  const closeContactForm = useCallback(() => setIsOpen(false), []);

  return (
    <ContactFormContext.Provider value={{ isOpen, openContactForm, closeContactForm }}>
      {children}
      <ContactFormModal open={isOpen} onOpenChange={setIsOpen} />
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context) throw new Error("useContactForm must be used within ContactFormProvider");
  return context;
}
