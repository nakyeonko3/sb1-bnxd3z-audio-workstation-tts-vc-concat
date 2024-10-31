import React, { useMemo } from 'react';

const WaveformMini = () => {
  const waveformData = useMemo(() => {
    return Array.from({ length: 40 }, () => ({
      height: Math.random() * 0.8 + 0.2,
      highlighted: Math.random() > 0.7,
    }));
  }, []);

  return (
    <div className="flex items-center h-8 gap-[1px] bg-muted/30 rounded-md px-1">
      {waveformData.map(({ height, highlighted }, i) => (
        <div 
          key={i}
          className={`w-1 rounded-full transition-all duration-300 ${
            highlighted 
              ? 'bg-primary/60 hover:bg-primary/80' 
              : 'bg-primary/30 hover:bg-primary/50'
          }`}
          style={{ height: `${height * 32}px` }}
        />
      ))}
    </div>
  );
};

export default WaveformMini;