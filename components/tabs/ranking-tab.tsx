'use client'

const RANKINGS = [
  { pos: 1, name: 'Lucas', groups: 45, ko: 30, specials: 25, total: 100 },
  { pos: 2, name: 'Matías', groups: 42, ko: 28, specials: 20, total: 90 },
  { pos: 3, name: 'Sofía', groups: 40, ko: 25, specials: 15, total: 80 },
  { pos: 4, name: 'Juan', groups: 38, ko: 22, specials: 10, total: 70 },
  { pos: 5, name: 'María', groups: 35, ko: 20, specials: 10, total: 65 },
  { pos: 6, name: 'Pedro', groups: 30, ko: 18, specials: 5, total: 53 },
  { pos: 7, name: 'Ana', groups: 28, ko: 15, specials: 5, total: 48 },
  { pos: 8, name: 'Carlos', groups: 25, ko: 12, specials: 5, total: 42 },
]

export default function RankingTab() {
  return (
    <div>
      <div className="section-title">Ranking General</div>
      <div className="card">
        <table className="rank-table">
          <thead>
            <tr>
              <th>#</th>
              <th className="name-col">Participante</th>
              <th>Grupos</th>
              <th>KO</th>
              <th>Esp.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {RANKINGS.map((r) => (
              <tr key={r.pos} className={`rank-${r.pos}`}>
                <td className="rank-pos">{r.pos}</td>
                <td className="name-col">{r.name}</td>
                <td>{r.groups}</td>
                <td>{r.ko}</td>
                <td>{r.specials}</td>
                <td className="total-col">{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
