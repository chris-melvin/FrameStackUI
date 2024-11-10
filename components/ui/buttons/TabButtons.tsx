"use client";

import { Icon, PiIcon } from "lucide-react";
import { useState } from "react";

interface TabButtonsProps {
  tabs: string[];
  onTabChange?: (tab: string) => void;
}

export const TabButtons = ({ tabs, onTabChange }: TabButtonsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="flex border border-gray-300 rounded-lg overflow-hidden p-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`px-4 py-2 text-sm font-medium focus:relative hover:bg-gray-100  rounded-md ${
            activeTab === tab ? "bg-gray-100" : ""
          }`}
        >
          <span className="flex items-center gap-2">
            <PiIcon className="w-4 h-4" />
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
};
