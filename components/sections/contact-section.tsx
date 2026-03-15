import { Github, Linkedin, Mail } from 'lucide-react';

import { ContactForm } from '@/components/forms/contact-form';
import { SectionHeading } from '@/components/ui/section-heading';
import type { ContactData } from '@/types/portfolio';

const icons = { GitHub: Github, LinkedIn: Linkedin, Email: Mail };

export function ContactSection({ contact }: { contact: ContactData }) {
  return <section id="contact" className="relative py-24 sm:py-28"><div className="section-shell"><SectionHeading eyebrow="Contact" title="Let us build the next high-performance product experience together" description="Reach out for product engineering roles, freelance builds, or conversations around mobile architecture, modern frontend systems, and scalable APIs." /><div className="mt-16 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]"><div className="space-y-6"><div className="glass-panel rounded-[2rem] p-6"><p className="text-xs uppercase tracking-[0.35em] text-primary">Direct contact</p><a href={`mailto:${contact.email}`} className="mt-5 block font-display text-2xl text-white" data-cursor="hover">{contact.email}</a><p className="mt-3 text-sm text-white/55">{contact.phone}</p></div>{contact.socialLinks.map((item) => { const Icon = icons[item.label as keyof typeof icons] ?? Mail; return <a key={item.label} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel={item.href.startsWith('mailto') ? undefined : 'noreferrer'} className={`glass-panel flex items-center justify-between rounded-[2rem] p-5 transition ${item.placeholder ? 'opacity-50' : 'hover:border-primary/30 hover:bg-white/8'}`} data-cursor="hover"><div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6"><Icon className="h-5 w-5 text-primary" /></span><div><p className="text-sm uppercase tracking-[0.24em] text-white/45">{item.label}</p><p className="mt-1 text-sm text-white/72">{item.placeholder ? 'Placeholder link' : item.href.replace('mailto:', '')}</p></div></div></a>; })}</div><ContactForm /></div></div></section>;
}
