'use client'

import { useState } from 'react'
import { ALL_TEAMS } from '@/lib/data'

const SPECIALS = [
  { id: 'champion', label: 'Campeón', pts: 25 },
  { id: 'runnerup', label: 'Subcampeón', pts: 15 },
  { id: 'third', label: 'Tercer puesto', pts: 10 },
  { id: 'topscorer', label: 'Goleador', pts: 15, type: 'text' },
  { id: 'mvp', label: 'Mejor jugador', pts: 15, type: 'text' },
  { id: 'goals', label: 'Total de goles (Final)', pts: 10, type: 'number' },
]

export default function SpecialsTab() {
  const [values, setValues] = useState<Record<string, string>>({})

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div>
      <div className="section-title">Predicciones Especiales</div>
      <div className="card">
        <div className="specials-grid">
          {SPECIALS.map((special) => (
            <div key={special.id} className="special-field">
              <label>{special.label}</label>
              {special.type === 'text' ? (
                <input
                  type="text"
                  placeholder={`Ingresa ${special.label.toLowerCase()}`}
                  value={values[special.id] || ''}
                  onChange={(e) => handleChange(special.id, e.target.value)}
                />
              ) : special.type === 'number' ? (
                <input
                  type="number"
                  placeholder="0"
                  min="0"
                  value={values[special.id] || ''}
                  onChange={(e) => handleChange(special.id, e.target.value)}
                />
              ) : (
                <select
                  value={values[special.id] || ''}
                  onChange={(e) => handleChange(special.id, e.target.value)}
                >
                  <option value="">Seleccionar equipo</option>
                  {ALL_TEAMS.map((team) => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  ))}
                </select>
              )}
              <span className="special-pts">+{special.pts} pts si aciertas</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
