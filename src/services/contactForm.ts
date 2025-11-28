export interface ContactFormData {
  email: string;
  name: string;
  phone: string;
  companyName: string;
  websiteUrl: string;
  budget: string;
  projectDetails: string;
  howDidYouFindUs: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Webhook URL not configured");
    throw new Error("Form submission is not configured");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      submittedAt: new Date().toISOString(),
      source: "webf.love/lets-talk",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }
}
