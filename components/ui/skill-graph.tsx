import { portfolioData } from '@/content/portfolio';

const points = [[180, 30], [315, 110], [270, 250], [90, 250], [45, 110]];

export function SkillGraph() {
  const labels = ['Mobile', 'Frontend', 'Backend', 'Data', 'Cloud'];
  return <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(83,252,248,0.12),transparent_40%)]" /><p className="relative text-sm uppercase tracking-[0.35em] text-white/45">Interactive skill graph</p><svg viewBox="0 0 360 280" className="relative mt-6 h-[280px] w-full"><polygon points={points.map((point) => point.join(',')).join(' ')} fill="rgba(83, 252, 248, 0.16)" stroke="rgba(83, 252, 248, 0.8)" strokeWidth="2" />{points.map((point, index) => <g key={labels[index]}><circle cx={point[0]} cy={point[1]} r="8" fill="rgba(255,255,255,0.95)" /><text x={point[0]} y={point[1] - 18} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12">{labels[index]}</text></g>)}<text x="180" y="270" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="12">{portfolioData.hero.title}</text></svg></div>;
}
