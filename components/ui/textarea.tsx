import { cn } from '@/utils/cn';

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn('min-h-[150px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:bg-white/10 focus:ring-2 focus:ring-primary/20 dark:placeholder:text-white/35 light:text-slate-900 light:placeholder:text-slate-500', className)} {...props} />;
}
