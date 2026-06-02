'use client'

import Flag from '@/components/flag'
import { GROUPS } from '@/lib/data'

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  })
}

const allMatches = Object.entries(GROUPS).flatMap(([group, data]) =>
  data.matches.map((m) => ({ ...m, group }))
)

const sortedMatches = allMatches.sort(
  (a, b) => new Date(a.date + 'T' + a.time).getTime() - new Date(b.date + 'T' + b.time).getTime()
)

const groupedByDate = sortedMatches.reduce(
  (acc, match) => {
    if (!acc[match.date]) acc[match.date] = []
    acc[match.date].push(match)
    return acc
  },
  {} as Record<string, typeof sortedMatches>
)

export default function FixtureTab() {
  return (
    <div>
      <div className="section-title">Fixture Completo</div>
      {Object.entries(groupedByDate).map(([date, matches]) => (
        <div key={date} className="fixture-day">
          <div className="fixture-day-header">{formatDate(date)}</div>
          <div className="card">
            {matches.map((match) => (
              <div key={match.id} className="fixture-match">
                <div className="fixture-team">
                  <Flag country={match.h} />
                  <span>{match.h}</span>
                </div>
                <div className="fixture-score pending">vs</div>
                <div className="fixture-team right">
                  <Flag country={match.a} />
                  <span>{match.a}</span>
                </div>
                <div className="fixture-time">{match.time}</div>
                <span className="fixture-round">Grupo {match.group}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
