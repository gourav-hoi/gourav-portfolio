import { cn } from '@/utils/cn';

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition focus:border-primary/60 focus:bg-white/10 focus:ring-2 focus:ring-primary/20 dark:placeholder:text-white/35 light:text-slate-900 light:placeholder:text-slate-500', className)} {...props} />;
}
