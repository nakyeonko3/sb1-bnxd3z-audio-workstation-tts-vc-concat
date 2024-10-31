import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Mic, Settings, ChevronUp, ChevronDown } from 'lucide-react';

interface ControlPanelProps {
  selectedBubble: number | null;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ selectedBubble }) => {
  const [showVc, setShowVc] = useState(false);
  const [showConcat, setShowConcat] = useState(false);

  if (!selectedBubble) {
    return (
      <div className="w-80 border-l bg-white p-4">
        <div className="h-full flex items-center justify-center text-gray-500">
          편집할 텍스트를 선택하세요
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 border-l bg-white p-4">
      <div className="space-y-4">
        <div className="space-y-4">
          <h3 className="font-medium">TTS 설정</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">음성 선택</label>
              <select className="w-full p-2 border rounded-md text-sm">
                <option>기본 음성</option>
                <option>여성 음성 1</option>
                <option>남성 음성 1</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm">속도</label>
              <Slider defaultValue={[1]} max={2} min={0.5} step={0.1} />
            </div>
            <div className="space-y-2">
              <label className="text-sm">피치</label>
              <Slider defaultValue={[1]} max={2} min={0.5} step={0.1} />
            </div>
            <Button className="w-full">TTS 생성</Button>
          </div>
        </div>

        <Button 
          variant="ghost" 
          className="w-full flex items-center justify-between"
          onClick={() => setShowVc(!showVc)}
        >
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            VC 설정
          </div>
          {showVc ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        {showVc && (
          <div className="space-y-4 pl-4">
            <div className="space-y-2">
              <label className="text-sm">타겟 음성</label>
              <Button variant="outline" className="w-full text-sm">
                음성 파일 업로드
              </Button>
            </div>
            <div className="space-y-2">
              <label className="text-sm">스타일</label>
              <select className="w-full p-2 border rounded-md text-sm">
                <option>기본</option>
                <option>감정적인</option>
                <option>차분한</option>
              </select>
            </div>
            <Button className="w-full">VC 변환</Button>
          </div>
        )}

        <Button 
          variant="ghost" 
          className="w-full flex items-center justify-between"
          onClick={() => setShowConcat(!showConcat)}
        >
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            최종 편집
          </div>
          {showConcat ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        {showConcat && (
          <div className="space-y-4 pl-4">
            <Button variant="outline" className="w-full">
              무음 구간 추가
            </Button>
            <Button variant="outline" className="w-full">
              선택 파일 합치기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;