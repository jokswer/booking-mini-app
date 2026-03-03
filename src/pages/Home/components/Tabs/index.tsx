import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export type TabValue = "all" | "my";

export type Tab = {
  value: TabValue;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  defaultValue?: TabValue;
  onChange?: (value: TabValue) => void;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultValue = "all",
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState<TabValue>(defaultValue);

  const handleTabClick = (value: TabValue) => {
    setActiveTab(value);
    onChange?.(value);
  };

  return (
    <div className="flex gap-6 text-lg/7">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleTabClick(tab.value)}
          className={twMerge(
            "h-11 font-bold transition-colors border-b",
            activeTab === tab.value
              ? "text-primary-text border-primary"
              : "text-secondary-text hover:text-primary-text  border-transparent",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
