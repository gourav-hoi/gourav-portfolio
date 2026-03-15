'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';
import { Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import type { LinkItem, NavItem } from '@/types/portfolio';
import { scrollToTarget } from '@/utils/scroll';

type CommandPaletteProps = {
  navigation: NavItem[];
  socialLinks: LinkItem[];
};

export function CommandPalette({ navigation, socialLinks }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = useMemo(() => [
    ...navigation.map((item) => ({
      label: item.label,
      action: () => {
        setOpen(false);
        scrollToTarget(item.id, { offset: -24 });
      },
    })),
    ...socialLinks.map((item) => ({ label: item.label, action: () => { window.open(item.href, item.href.startsWith('mailto') ? '_self' : '_blank', 'noreferrer'); setOpen(false); } })),
  ], [navigation, socialLinks]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <button type="button" onClick={() => setOpen(true)} className="fixed right-4 top-6 z-[72] hidden h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs uppercase tracking-[0.28em] text-white/60 backdrop-blur-xl transition hover:border-primary/30 hover:text-white md:flex">
        <Search className="h-4 w-4" />
        Command
      </button>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[85] bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-[16%] z-[86] w-[min(640px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090d17]/95 p-3 shadow-2xl">
          <Dialog.Title className="sr-only">Quick actions</Dialog.Title>
          <Dialog.Description className="sr-only">
            Jump to a section or open a contact link.
          </Dialog.Description>
          <Command className="rounded-[1.25rem] border border-white/10 bg-transparent text-white">
            <div className="flex items-center gap-3 border-b border-white/10 px-4">
              <Search className="h-4 w-4 text-white/40" />
              <Command.Input className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-white/35" placeholder="Jump to a section or action..." />
            </div>
            <Command.List className="max-h-[420px] overflow-y-auto p-2">
              <Command.Empty className="px-3 py-8 text-center text-sm text-white/45">No results found.</Command.Empty>
              <Command.Group heading="Navigation" className="text-white/45">
                {commands.map((command) => <Command.Item key={command.label} onSelect={command.action} className="flex cursor-none items-center rounded-2xl px-3 py-3 text-sm text-white/75 outline-none data-[selected=true]:bg-white/8 data-[selected=true]:text-white">{command.label}</Command.Item>)}
              </Command.Group>
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
