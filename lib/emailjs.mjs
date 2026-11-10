// Next.js replaces these explicit NEXT_PUBLIC references at build time.
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

export async function sendInquiry(formData, { config = emailjsConfig, fetcher = fetch } = {}) {
  if (!config.serviceId || !config.templateId || !config.publicKey) {
    throw new Error('EmailJS is not configured.');
  }

  const field = name => String(formData.get(name) || '').trim();
  const templateParams = {
    from_name: field('name'),
    reply_to: field('email'),
    business_name: field('business'),
    social: field('social') || 'Not provided',
    service: field('package'),
    message: field('message'),
  };
  if (!templateParams.from_name || !templateParams.reply_to || !templateParams.business_name
      || !templateParams.service || !templateParams.message) {
    throw new Error('Please complete all required fields.');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetcher('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        service_id: config.serviceId,
        template_id: config.templateId,
        user_id: config.publicKey,
        template_params: templateParams,
      }),
    });
    if (!response.ok) throw new Error('EmailJS did not accept the inquiry.');
  } finally {
    clearTimeout(timeout);
  }
}
