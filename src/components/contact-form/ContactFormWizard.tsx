import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import BudgetChips from "./BudgetChips";
import FieldReward from "./FieldReward";
import StepSuccess from "./steps/StepSuccess";
import { contactFormSchema, type ContactFormValues } from "@/lib/contactFormSchema";
import { submitContactForm } from "@/services/contactForm";

interface ContactFormWizardProps {
  onClose: () => void;
}

const ContactFormWizard = ({ onClose }: ContactFormWizardProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      projectDetails: "",
      budget: "",
    },
    mode: "onChange",
  });

  const nameValid = (form.watch("name") || "").length >= 2 && !form.getFieldState("name").error;
  const companyValid = (form.watch("companyName") || "").length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.watch("email") || "");
  const detailsValid = (form.watch("projectDetails") || "").length >= 10;

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await submitContactForm({
        name: values.name,
        companyName: values.companyName || "",
        email: values.email,
        projectDetails: values.projectDetails,
        budget: values.budget || "",
      });
      setIsSuccess(true);
    } catch {
      toast.error("Failed to send message. Please try again or email us directly at hello@webf.love");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    form.reset();
    setIsSuccess(false);
    onClose();
  };

  if (isSuccess) {
    return <StepSuccess onClose={handleClose} />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
        {/* Row 1: Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <div className="relative">
                  <FormControl>
                    <Input placeholder="Your Name *" className="bg-white/10 border-white/20 text-[#f3f2ef] placeholder:text-[#f3f2ef]/40 h-11 pr-9" {...field} />
                  </FormControl>
                  <FieldReward show={nameValid} />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <div className="relative">
                  <FormControl>
                    <Input placeholder="Company Name" className="bg-white/10 border-white/20 text-[#f3f2ef] placeholder:text-[#f3f2ef]/40 h-11 pr-9" {...field} />
                  </FormControl>
                  <FieldReward show={companyValid} />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Row 2: Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <div className="relative">
                <FormControl>
                  <Input type="email" placeholder="Email *" className="bg-white/10 border-white/20 text-[#f3f2ef] placeholder:text-[#f3f2ef]/40 h-11 pr-9" {...field} />
                </FormControl>
                <FieldReward show={emailValid} />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Row 3: Project details */}
        <FormField
          control={form.control}
          name="projectDetails"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <div className="relative">
                <FormControl>
                  <Textarea
                    placeholder="Briefly about the project, idea, help... *"
                    className="min-h-[100px] bg-white/10 border-white/20 text-[#f3f2ef] placeholder:text-[#f3f2ef]/40 pr-9 resize-none"
                    {...field}
                  />
                </FormControl>
                <FieldReward show={detailsValid} className="top-3 translate-y-0" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Budget chips */}
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormControl>
                <BudgetChips value={field.value || ""} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full gap-2 glow-effect"
          size="lg"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactFormWizard;
