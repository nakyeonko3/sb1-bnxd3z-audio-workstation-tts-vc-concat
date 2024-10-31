import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, AlertCircle, Pause } from 'lucide-react';

interface TaskItem {
  text: string;
  type?: string;
  progress?: number;
  actions?: string[];
  children?: TaskItem[];
}

interface TaskTreeProps {
  item: TaskItem;
}

const TaskTree: React.FC<TaskTreeProps> = ({ item }) => {
  const getIcon = () => {
    if (item.type === 'processing') return <Play className="w-4 h-4 text-green-500" />;
    if (item.type === 'waiting') return <Clock className="w-4 h-4 text-blue-500" />;
    return <AlertCircle className="w-4 h-4 text-red-500" />;
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'pause': return <Pause className="w-3 h-3" />;
      case 'retry': return <Play className="w-3 h-3" />;
      case 'cancel': return <AlertCircle className="w-3 h-3" />;
      default: return action;
    }
  };

  return (
    <div className="pl-4">
      <div className="flex items-center justify-between py-1 hover:bg-muted/50 rounded">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className="text-sm">{item.text}</span>
          {item.progress && (
            <>
              <Progress value={item.progress} className="w-24" />
              <span className="text-xs text-muted-foreground">{item.progress}%</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1">
          {item.actions?.map((action, idx) => (
            <Button key={idx} size="sm" variant="ghost" className="h-6">
              {getActionIcon(action)}
            </Button>
          ))}
        </div>
      </div>
      {item.children && (
        <div className="border-l-2 border-muted/50 ml-2">
          {item.children.map((child, idx) => (
            <TaskTree key={idx} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskTree;