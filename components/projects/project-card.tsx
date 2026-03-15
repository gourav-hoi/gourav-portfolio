'use client';

import { Github, Globe2 } from 'lucide-react';
import { useState } from 'react';

import type { Project } from '@/types/portfolio';

import { Card } from '@/components/ui/card';
import { MagneticButton } from '@/components/ui/magnetic-button';

export function ProjectCard({ project }: { project: Project }) {
  const [transform, setTransform] = useState('perspective(1200px) rotateX(0deg) rotateY(0deg)');

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -18;
    setTransform(`perspective(1200px) rotateX(${y}deg) rotateY(${x}deg)`);
  };

  return (
    <Card className="group relative h-full overflow-hidden rounded-[2rem] border-white/10 p-0 transition duration-300 hover:border-primary/30" onMouseMove={onMove} onMouseLeave={() => setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg)')} style={{ transform }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-secondary/12 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col p-6">
        <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">Preview</p>
          <p className="mt-4 text-sm leading-7 text-white/65">{project.preview}</p>
        </div>
        <div className="mt-6 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl text-white">{project.name}</h3><p className="mt-2 text-sm text-primary">{project.metric}</p></div></div>
          <p className="mt-4 text-sm leading-7 text-white/68">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">{item}</span>)}</div>
          <div className="mt-6 flex flex-wrap gap-3">
            <MagneticButton href={project.github} variant="secondary" size="sm" external className={project.github === '#' ? 'pointer-events-none opacity-50' : ''}><Github className="h-4 w-4" />GitHub</MagneticButton>
            <MagneticButton href={project.live} variant="primary" size="sm" external className={project.live === '#' ? 'pointer-events-none opacity-50' : ''}><Globe2 className="h-4 w-4" />Live Demo</MagneticButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
