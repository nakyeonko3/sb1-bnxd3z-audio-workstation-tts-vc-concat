import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Upload, Save } from 'lucide-react';
import TaskManager from './TaskManager';
import TextBubbleList from './TextBubbleList';
import ControlPanel from './ControlPanel';

const AudioWorkstation = () => {
  const [selectedBubble, setSelectedBubble] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [isTasksExpanded, setIsTasksExpanded] = useState(true);

  return (
    <div className="h-screen flex bg-background">
      <div className="flex-1 p-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">오디오 워크스테이션</h2>
          <div className="flex gap-4">
            <div className="flex gap-2">
              {['전체', '완료', '대기중', '실패'].map((filter) => (
                <Button 
                  key={filter}
                  variant={statusFilter === filter ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setStatusFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                텍스트 파일 업로드
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                저장
              </Button>
            </div>
          </div>
        </div>

        {/* Task Manager */}
        <TaskManager 
          isExpanded={isTasksExpanded}
          setIsExpanded={setIsTasksExpanded}
        />

        {/* Text Bubbles */}
        <TextBubbleList
          selectedBubble={selectedBubble}
          setSelectedBubble={setSelectedBubble}
          statusFilter={statusFilter}
        />
      </div>

      {/* Control Panel */}
      <ControlPanel selectedBubble={selectedBubble} />
    </div>
  );
};

export default AudioWorkstation;