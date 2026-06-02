'use client'

import Flag from '@/components/flag'

const KO_MATCHES = {
  R16: [
    { id: 'R16_1', label: '1A vs 2B', h: 'México', a: 'Suiza' },
    { id: 'R16_2', label: '1C vs 2D', h: 'Brasil', a: 'Turquía' },
    { id: 'R16_3', label: '1E vs 2F', h: 'Alemania', a: 'Japón' },
    { id: 'R16_4', label: '1G vs 2H', h: 'Bélgica', a: 'Uruguay' },
    { id: 'R16_5', label: '1B vs 2A', h: 'Canadá', a: 'Corea del Sur' },
    { id: 'R16_6', label: '1D vs 2C', h: 'Estados Unidos', a: 'Marruecos' },
    { id: 'R16_7', label: '1F vs 2E', h: 'Países Bajos', a: 'Ecuador' },
    { id: 'R16_8', label: '1H vs 2G', h: 'España', a: 'Egipto' },
    { id: 'R16_9', label: '1I vs 2J', h: 'Francia', a: 'Austria' },
    { id: 'R16_10', label: '1K vs 2L', h: 'Portugal', a: 'Croacia' },
    { id: 'R16_11', label: '1J vs 2I', h: 'Argentina', a: 'Senegal' },
    { id: 'R16_12', label: '1L vs 2K', h: 'Inglaterra', a: 'Colombia' },
  ],
  QF: [
    { id: 'QF_1', label: 'QF1', h: '', a: '' },
    { id: 'QF_2', label: 'QF2', h: '', a: '' },
    { id: 'QF_3', label: 'QF3', h: '', a: '' },
    { id: 'QF_4', label: 'QF4', h: '', a: '' },
    { id: 'QF_5', label: 'QF5', h: '', a: '' },
    { id: 'QF_6', label: 'QF6', h: '', a: '' },
  ],
  SF: [
    { id: 'SF_1', label: 'SF1', h: '', a: '' },
    { id: 'SF_2', label: 'SF2', h: '', a: '' },
  ],
  F: [{ id: 'F', label: 'Final', h: '', a: '' }],
}

function KOSlot({ match }: { match: { id: string; label: string; h: string; a: string } }) {
  return (
    <div className="ko-slot">
      <div className="ko-team">
        {match.h ? <Flag country={match.h} /> : <span className="text-muted text-xs">TBD</span>}
        <span className="ko-name">{match.h || 'Por definir'}</span>
        <input type="number" className="ko-score-inp" min="0" max="99" />
      </div>
      <div className="ko-team">
        {match.a ? <Flag country={match.a} /> : <span className="text-muted text-xs">TBD</span>}
        <span className="ko-name">{match.a || 'Por definir'}</span>
        <input type="number" className="ko-score-inp" min="0" max="99" />
      </div>
    </div>
  )
}

export default function KnockoutTab() {
  return (
    <div>
      <div className="section-title">Fase Eliminatoria</div>
      <div className="bracket-wrap">
        <div className="bracket">
          <div className="round-col">
            <div className="round-label">Octavos</div>
            {KO_MATCHES.R16.map((m) => (
              <KOSlot key={m.id} match={m} />
            ))}
          </div>
          <div className="round-col">
            <div className="round-label">Cuartos</div>
            {KO_MATCHES.QF.map((m) => (
              <KOSlot key={m.id} match={m} />
            ))}
          </div>
          <div className="round-col">
            <div className="round-label">Semifinal</div>
            {KO_MATCHES.SF.map((m) => (
              <KOSlot key={m.id} match={m} />
            ))}
          </div>
          <div className="round-col">
            <div className="round-label">Final</div>
            {KO_MATCHES.F.map((m) => (
              <KOSlot key={m.id} match={m} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
