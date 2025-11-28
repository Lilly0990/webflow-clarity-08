import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { submitContactForm } from "@/services/contactForm";

const LetsTalk = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    companyName: "",
    websiteUrl: "",
    budget: "",
    projectDetails: "",
    howDidYouFindUs: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Check if basic info is filled to show extended form
  const isBasicInfoFilled = formData.email.includes("@") && formData.name.length >= 2;

  // Lock body scroll when form is not expanded (desktop only)
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      document.body.style.overflow = isBasicInfoFilled ? 'auto' : 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isBasicInfoFilled]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.name || !formData.companyName || !formData.websiteUrl ||
        !formData.budget || !formData.projectDetails || !formData.howDidYouFindUs) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setFormData({
        email: "",
        name: "",
        phone: "",
        companyName: "",
        websiteUrl: "",
        budget: "",
        projectDetails: "",
        howDidYouFindUs: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column - Hero (Fixed) */}
        <div className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2 relative bg-gradient-to-br from-background via-secondary/50 to-background p-8 lg:p-16 flex flex-col justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text">
            webf.love
          </Link>

          {/* Main Content */}
          <div className="py-12 lg:py-0">
            <p className="text-primary font-medium mb-4">Let's talk</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn how we can help you{" "}
              <span className="gradient-text italic">grow your project</span>
            </h1>
          </div>

          {/* Testimonial */}
          <div className="border-t border-border pt-8">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/team/vlad-logo.png"
                alt="Vlad"
                className="w-12 h-12 rounded-full object-cover bg-secondary"
              />
              <div>
                <p className="font-semibold">Vlad</p>
                <p className="text-sm text-muted-foreground">webf.love</p>
              </div>
            </div>
            <blockquote className="text-lg text-muted-foreground italic">
              "We focus on delivering exceptional Webflow experiences. Every project is a partnership where we bring your vision to life with precision and care."
            </blockquote>
          </div>
        </div>

        {/* Right Column - Form (Scrollable) */}
        <div className={`lg:w-1/2 lg:ml-[50%] bg-card p-8 lg:p-16 flex justify-center ${
          isBasicInfoFilled ? 'items-start py-16' : 'lg:h-screen items-center'
        }`}>
          <div className="w-full max-w-md">
            {/* Progress Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`flex items-center gap-2 ${!isBasicInfoFilled ? 'text-primary' : 'text-muted-foreground'}`}>
                <span className={`w-2 h-2 rounded-full ${!isBasicInfoFilled ? 'bg-primary' : 'bg-muted-foreground'}`}></span>
                <span className="text-sm font-medium">Fill out the form</span>
              </div>
              <div className={`flex items-center gap-2 ${isBasicInfoFilled ? 'text-primary' : 'text-muted-foreground'}`}>
                <span className={`w-2 h-2 rounded-full ${isBasicInfoFilled ? 'bg-primary' : 'bg-muted-foreground'}`}></span>
                <span className="text-sm font-medium">Project details</span>
              </div>
            </div>

            {/* Form Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Meet with webf.love</h2>
              <p className="text-muted-foreground">
                {!isBasicInfoFilled
                  ? "Tell us who you are to get started."
                  : "Tell us about your project so we can prepare."
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 -mx-1 px-1">
              {/* Basic Info - Always visible */}
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="mt-2 bg-background"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 bg-background"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>

              {/* Extended Fields - Appear when basic info filled */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isBasicInfoFilled
                    ? 'max-h-[2000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-5 py-1">
                <div className="pt-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+380 ..."
                    className="mt-2 bg-background"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Your company"
                    className="mt-2 bg-background"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    required={isBasicInfoFilled}
                  />
                </div>

                <div>
                  <Label htmlFor="websiteUrl">Website URL *</Label>
                  <Input
                    id="websiteUrl"
                    type="url"
                    placeholder="https://..."
                    className="mt-2 bg-background"
                    value={formData.websiteUrl}
                    onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
                    required={isBasicInfoFilled}
                  />
                </div>

                <div>
                  <Label>Budget *</Label>
                  <RadioGroup
                    value={formData.budget}
                    onValueChange={(value) => handleInputChange("budget", value)}
                    className="mt-3 space-y-2"
                  >
                    {[
                      { value: "3-5k", label: "$3,000 - $5,000" },
                      { value: "5-10k", label: "$5,000 - $10,000" },
                      { value: "10-20k", label: "$10,000 - $20,000" },
                      { value: "20k+", label: "$20,000+" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                      >
                        <RadioGroupItem value={option.value} id={`budget-${option.value}`} />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="projectDetails">Tell us about your project *</Label>
                  <Textarea
                    id="projectDetails"
                    placeholder="Describe your project, goals, and requirements..."
                    className="mt-2 min-h-[100px] bg-background"
                    value={formData.projectDetails}
                    onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                    required={isBasicInfoFilled}
                  />
                </div>

                <div>
                  <Label>How did you find us? *</Label>
                  <RadioGroup
                    value={formData.howDidYouFindUs}
                    onValueChange={(value) => handleInputChange("howDidYouFindUs", value)}
                    className="mt-3 grid grid-cols-2 gap-2"
                  >
                    {[
                      { value: "organic-search", label: "Organic Search" },
                      { value: "ai-search", label: "AI Search" },
                      { value: "referral", label: "Referral" },
                      { value: "webflow", label: "Webflow" },
                      { value: "social-media", label: "Social Media" },
                      { value: "other", label: "Other" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                      >
                        <RadioGroupItem value={option.value} id={`source-${option.value}`} />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>
                </div>
              </div>

              {/* Terms - Always visible */}
              <p className="text-xs text-muted-foreground">
                By entering your information, you consent to your data being saved in accordance with our{" "}
                <Link to="/terms" className="underline hover:text-foreground">Terms</Link> &{" "}
                <Link to="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</Link>
              </p>

              {/* Submit Button - Only show when extended form is visible */}
              <div
                className={`transition-all duration-300 ${
                  isBasicInfoFilled ? 'opacity-100' : 'opacity-50 pointer-events-none'
                }`}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full glow-effect"
                  disabled={isSubmitting || !isBasicInfoFilled}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
              <p>
                Or email us at{" "}
                <a href="mailto:hello@webf.love" className="text-primary hover:underline">
                  hello@webf.love
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
