import { ArrowUpRight } from 'lucide-react';

import type { ContactData } from '@/types/portfolio';

export function FooterSection({ contact }: { contact: ContactData }) {
  return <footer className="relative border-t border-white/10 py-10"><div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="font-display text-xl text-white">Gourav Sharma</p><p className="mt-2 text-sm text-white/45">Full Stack Mobile Developer building performant product systems.</p></div><div className="flex flex-wrap gap-3">{contact.socialLinks.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel={item.href.startsWith('mailto') ? undefined : 'noreferrer'} className={`rounded-full border px-4 py-2 text-sm transition ${item.placeholder ? 'border-white/10 text-white/35' : 'border-white/12 bg-white/5 text-white/70 hover:border-primary/30 hover:text-white'}`} data-cursor="hover">{item.label}</a>)}<a href="#hero" className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary transition hover:bg-primary/16" data-cursor="hover">Back to top<ArrowUpRight className="ml-2 inline h-4 w-4" /></a></div></div></footer>;
}
