import React, { useState } from "react";

import { useAppNavigation } from "navigation";

import { Tabs, type TabValue, type Tab } from "../Tabs";
import { TimeSlotsCard } from "../TimeSlotsCard";
import { MOCK_GAMES } from "./mock";

const TABS: Tab[] = [
  { value: "all", label: "Все игры" },
  { value: "my", label: "Мои игры" },
] as const;

export const TimeSlotsList: React.FC = () => {
  const { goToSlot } = useAppNavigation();
  const [activeTab, setActiveTab] = useState<TabValue>("all");

  const handleTabChange = (value: TabValue) => {
    setActiveTab(value);
  };

  const handleGameClick = () => {
    goToSlot();
  };

  return (
    <div className="mt-7 pb-25">
      <Tabs tabs={TABS} defaultValue="all" onChange={handleTabChange} />

      <div className="mt-6">
        {activeTab === "all" && (
          <div className="flex flex-col gap-6">
            {MOCK_GAMES.map((data, index) => (
              <TimeSlotsCard
                key={index}
                daySchedule={data}
                onClick={handleGameClick}
              />
            ))}
          </div>
        )}

        {activeTab === "my" && (
          <div className="flex flex-col gap-6">
            {MOCK_GAMES.slice(0, 1).map((data, index) => (
              <TimeSlotsCard
                key={index}
                daySchedule={data}
                onClick={handleGameClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
