'use client';

import emailjs from '@emailjs/browser';
import { Loader2, Send } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type FormState = { name: string; email: string; message: string };
const initialState: FormState = { name: '', email: '', message: '' };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });
  const [loading, setLoading] = useState(false);
  const emailConfig = useMemo(() => ({ serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }), []);
  const updateField = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus({ type: 'error', message: 'Please fill in all fields before sending your message.' }); return; }
    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) { setStatus({ type: 'error', message: 'EmailJS keys are missing. Add them to your environment before using the contact form.' }); return; }
    try {
      setLoading(true);
      setStatus({ type: 'idle', message: '' });
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, { from_name: form.name, from_email: form.email, reply_to: form.email, message: form.message, to_name: 'Gourav Sharma' }, { publicKey: emailConfig.publicKey });
      setForm(initialState);
      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong while sending the message. Please try again or email directly.' });
    } finally {
      setLoading(false);
    }
  };

  return <form onSubmit={onSubmit} className="glass-panel rounded-[2rem] p-6 sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.28em] text-white/45">Name</label><Input id="name" value={form.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Your name" /></div><div><label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.28em] text-white/45">Email</label><Input id="email" type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder="you@example.com" /></div></div><div className="mt-4"><label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.28em] text-white/45">Message</label><Textarea id="message" value={form.message} onChange={(event) => updateField('message', event.target.value)} placeholder="Tell me about your product, team, or idea." /></div><div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className={`text-sm ${status.type === 'error' ? 'text-rose-300' : 'text-white/60'}`}>{status.message || 'EmailJS-powered form. Configure public keys in .env to enable submissions.'}</p><Button type="submit" size="lg" className="min-w-[180px]" data-cursor="hover">{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}{loading ? 'Sending...' : 'Send Message'}</Button></div></form>;
}
