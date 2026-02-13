export interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  projectDetails: string;
  budget: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL || "https://8.webflow.digist.agency/webhook/webf.love";

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      submittedAt: new Date().toISOString(),
      source: "webf.love/contact-form",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }
}
