import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, AlertCircle, ChevronUp, ChevronDown } from 'lucide-react';
import TaskTree from './TaskTree';

interface TaskManagerProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const TaskManager: React.FC<TaskManagerProps> = ({ isExpanded, setIsExpanded }) => {
  const taskData = {
    text: "전체 작업",
    children: [
      {
        text: "진행 중 작업 (2)",
        type: "processing",
        children: [
          { text: "text_001.txt - TTS 변환 중", type: "processing", progress: 35, actions: ['pause'] },
          { text: "text_002.txt - VC 변환 중", type: "processing", progress: 78, actions: ['pause'] }
        ]
      },
      {
        text: "대기 중 작업 (5)",
        type: "waiting",
        children: [
          { text: "text_003.txt - TTS 대기 중", type: "waiting" },
          { text: "text_004.txt - VC 대기 중", type: "waiting" },
          { text: "더보기 +3", type: "waiting", actions: ["펼치기"] }
        ]
      },
      {
        text: "실패한 작업 (1)",
        type: "error",
        children: [
          { text: "text_005.txt - TTS 실패", type: "error", actions: ["retry", "cancel"] }
        ]
      }
    ]
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-green-500" />
              <span className="text-sm">진행 중 2</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-sm">대기 중 5</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-sm">실패 1</span>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>
        {isExpanded && <TaskTree item={taskData} />}
      </CardContent>
    </Card>
  );
};

export default TaskManager;