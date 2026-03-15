'use client';

import { motion } from 'framer-motion';

export function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  return <span className={className}>{text.split(' ').map((word, index) => <span key={`${word}-${index}`} className="mr-[0.35em] inline-block overflow-hidden align-top"><motion.span initial={{ y: '115%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }} className="inline-block">{word}</motion.span></span>)}</span>;
}
