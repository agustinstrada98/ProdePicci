'use client'

import { useState } from 'react'
import Subtabs from '@/components/subtabs'
import Flag from '@/components/flag'
import { GROUPS, type Match } from '@/lib/data'

const GROUP_NAMES = Object.keys(GROUPS)

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })
}

function MatchRow({ match }: { match: Match }) {
  const [homeScore, setHomeScore] = useState('')
  const [awayScore, setAwayScore] = useState('')

  return (
    <div className="match-row">
      <div className="match-team">
        <Flag country={match.h} />
        <span className="name">{match.h}</span>
      </div>
      <input
        type="number"
        className="score-inp"
        value={homeScore}
        onChange={(e) => setHomeScore(e.target.value)}
        min="0"
        max="99"
      />
      <span className="score-sep">-</span>
      <input
        type="number"
        className="score-inp"
        value={awayScore}
        onChange={(e) => setAwayScore(e.target.value)}
        min="0"
        max="99"
      />
      <div className="match-team away">
        <Flag country={match.a} />
        <span className="name">{match.a}</span>
      </div>
      <div className="match-date">{formatDate(match.date)}</div>
    </div>
  )
}

function GroupTable({ group, teams }: { group: string; teams: string[] }) {
  return (
    <div className="card">
      <div className="card-title">Grupo {group}</div>
      <table className="std-table">
        <thead>
          <tr>
            <th>Equipo</th>
            <th className="num">PJ</th>
            <th className="num">G</th>
            <th className="num">E</th>
            <th className="num">P</th>
            <th className="num">GF</th>
            <th className="num">GC</th>
            <th className="num">Pts</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => (
            <tr key={team} className={idx < 2 ? 'qualify-line' : idx === 2 ? 'qualify-line3' : ''}>
              <td>
                <div className="team-cell">
                  <span className={`pos-badge pos-${idx + 1}`}>{idx + 1}</span>
                  <Flag country={team} />
                  <span>{team}</span>
                </div>
              </td>
              <td className="num">0</td>
              <td className="num">0</td>
              <td className="num">0</td>
              <td className="num">0</td>
              <td className="num">0</td>
              <td className="num">0</td>
              <td className="num pts-col">0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function GroupsTab() {
  const [activeGroup, setActiveGroup] = useState('A')
  const group = GROUPS[activeGroup]

  return (
    <div>
      <Subtabs tabs={GROUP_NAMES} activeTab={activeGroup} onTabChange={setActiveGroup} />

      <div className="grid2">
        <div>
          <div className="section-title">Partidos - Grupo {activeGroup}</div>
          <div className="card">
            {group.matches.map((match) => (
              <MatchRow key={match.id} match={match} />
            ))}
          </div>
        </div>

        <div>
          <div className="section-title">Tabla de Posiciones</div>
          <GroupTable group={activeGroup} teams={group.teams} />
        </div>
      </div>
    </div>
  )
}
