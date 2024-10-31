import React from 'react';
import TextBubble from './TextBubble';

interface TextBubbleListProps {
  selectedBubble: number | null;
  setSelectedBubble: (id: number) => void;
  statusFilter: string;
}

const TextBubbleList: React.FC<TextBubbleListProps> = ({
  selectedBubble,
  setSelectedBubble,
  statusFilter
}) => {
  const bubbles = [
    { 
      id: 1, 
      status: 'complete', 
      badge: 'TTS✓', 
      text: '안녕하세요, 이것은 첫 번째 텍스트입니다.',
      settings: {
        voice: "Announcer voice",
        volume: "40%",
        speed: "1.2x"
      }
    },
    { 
      id: 2, 
      status: 'processing', 
      badge: 'TTS⚡', 
      text: '두 번째 텍스트는 현재 처리 중입니다.',
      settings: {
        voice: "Female voice 1",
        volume: "60%",
        speed: "1.0x"
      }
    },
    { 
      id: 3, 
      status: 'error', 
      badge: 'TTS❌', 
      text: '세 번째 텍스트에서 오류가 발생했습니다.',
      settings: {
        voice: "Male voice 1",
        volume: "50%",
        speed: "1.1x"
      }
    },
    { 
      id: 4, 
      status: 'complete', 
      badge: 'TTS✓VC✓', 
      text: '네 번째 텍스트는 모든 처리가 완료되었습니다.',
      settings: {
        voice: "Custom voice",
        volume: "45%",
        speed: "1.3x"
      }
    },
  ];

  const filteredBubbles = statusFilter === 'all' 
    ? bubbles 
    : bubbles.filter(b => {
        switch(statusFilter) {
          case '완료': return b.status === 'complete';
          case '대기중': return b.status === 'processing';
          case '실패': return b.status === 'error';
          default: return true;
        }
      });

  return (
    <div className="flex-1 overflow-y-auto space-y-4 mb-4 bg-muted/30 rounded-lg p-4">
      {filteredBubbles.map((bubble) => (
        <TextBubble
          key={bubble.id}
          bubble={bubble}
          isSelected={selectedBubble === bubble.id}
          onClick={() => setSelectedBubble(bubble.id)}
        />
      ))}
    </div>
  );
};

export default TextBubbleList;