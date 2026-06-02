'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Tabs from '@/components/tabs'
import GroupsTab from '@/components/tabs/groups-tab'
import KnockoutTab from '@/components/tabs/knockout-tab'
import SpecialsTab from '@/components/tabs/specials-tab'
import RankingTab from '@/components/tabs/ranking-tab'
import FixtureTab from '@/components/tabs/fixture-tab'
import AdminTab from '@/components/tabs/admin-tab'

const TABS = ['Grupos', 'Fase Final', 'Especiales', 'Ranking', 'Fixture', 'Admin']

export default function Home() {
  const [activeTab, setActiveTab] = useState('Grupos')
  const [user] = useState({ name: 'Usuario Demo' })

  return (
    <div className="app-wrap">
      <Header user={user} />
      <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'Grupos' && <GroupsTab />}
      {activeTab === 'Fase Final' && <KnockoutTab />}
      {activeTab === 'Especiales' && <SpecialsTab />}
      {activeTab === 'Ranking' && <RankingTab />}
      {activeTab === 'Fixture' && <FixtureTab />}
      {activeTab === 'Admin' && <AdminTab />}
    </div>
  )
}
