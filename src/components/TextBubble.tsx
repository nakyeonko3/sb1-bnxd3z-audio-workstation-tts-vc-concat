import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, Play, Volume2, FastForward, Mic } from 'lucide-react';
import WaveformMini from './WaveformMini';
import SettingsTag from './SettingsTag';

interface BubbleSettings {
  voice: string;
  volume: string;
  speed: string;
}

interface BubbleProps {
  bubble: {
    id: number;
    status: string;
    badge: string;
    text: string;
    settings: BubbleSettings;
  };
  isSelected: boolean;
  onClick: () => void;
}

const TextBubble: React.FC<BubbleProps> = ({ bubble, isSelected, onClick }) => {
  const getBadgeVariant = (status: string) => {
    switch(status) {
      case 'complete': return 'text-green-500 bg-green-50 dark:bg-green-950/50';
      case 'processing': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-950/50';
      case 'error': return 'text-red-500 bg-red-50 dark:bg-red-950/50';
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-900/50';
    }
  };

  return (
    <div 
      className={`group transition-opacity duration-200 ${
        isSelected ? 'opacity-100' : 'opacity-80 hover:opacity-90'
      }`}
      onClick={onClick}
    >
      <div className="flex-1 max-w-3xl">
        <div className="bg-card rounded-lg p-4 shadow-sm border transition-all duration-200 hover:shadow-md">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">텍스트 #{bubble.id}</span>
              <Badge variant="outline" className={getBadgeVariant(bubble.status)}>
                {bubble.badge}
              </Badge>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Play className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-muted-foreground mb-4">
            {bubble.text}
          </p>

          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              <SettingsTag icon={Mic} value={bubble.settings.voice} />
              <SettingsTag icon={Volume2} value={bubble.settings.volume} />
              <SettingsTag icon={FastForward} value={bubble.settings.speed} />
            </div>
            
            <WaveformMini />
          </div>
          
          {bubble.status === 'processing' && (
            <div className="mt-3 space-y-1">
              <Progress value={45} className="h-1" />
              <span className="text-xs text-muted-foreground">변환 중... (1분 남음)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextBubble;