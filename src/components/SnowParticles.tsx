import { useMemo, useEffect, useState } from 'react';

export default function SnowParticles({ count = 50 }: { count?: number }) {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handler = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, []);

  const flakes = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      dur: Math.random() * 6 + 6,
      drift: Math.random() * 60 - 30,
    })), [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {flakes.map(f => (
        <div
          key={f.id}
          className="absolute rounded-full bg-white/60"
          style={{
            width: f.size, height: f.size,
            left: `${f.left}%`, top: -10,
            animation: paused ? 'none' : `snowfall ${f.dur}s ${f.delay}s linear infinite`,
            ['--snow-drift' as string]: `${f.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
