"use client"

interface SubtabsProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Subtabs({ tabs, activeTab, onTabChange }: SubtabsProps) {
  return (
    <div className="subtabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`subtab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
