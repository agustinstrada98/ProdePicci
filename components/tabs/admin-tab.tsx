'use client'

import { useState } from 'react'
import Subtabs from '@/components/subtabs'
import Flag from '@/components/flag'
import { GROUPS } from '@/lib/data'

const ADMIN_TABS = ['Resultados', 'Ver Predicciones']

export default function AdminTab() {
  const [adminSubtab, setAdminSubtab] = useState('Resultados')
  const [selectedGroup, setSelectedGroup] = useState('A')

  const group = GROUPS[selectedGroup]

  return (
    <div>
      <div className="section-title">Panel de Administracion</div>
      <Subtabs tabs={ADMIN_TABS} activeTab={adminSubtab} onTabChange={setAdminSubtab} />

      {adminSubtab === 'Resultados' && (
        <div>
          <div className="subtabs">
            {Object.keys(GROUPS).map((g) => (
              <button
                key={g}
                className={`subtab ${selectedGroup === g ? 'active' : ''}`}
                onClick={() => setSelectedGroup(g)}
              >
                Grupo {g}
              </button>
            ))}
          </div>

          <div className="card">
            <div className="card-title">Cargar Resultados - Grupo {selectedGroup}</div>
            {group.matches.map((match) => (
              <div key={match.id} className="admin-match-row">
                <span className="admin-team">
                  <Flag country={match.h} /> {match.h}
                </span>
                <input type="number" className="admin-inp" min="0" max="99" />
                <span className="score-sep">-</span>
                <input type="number" className="admin-inp" min="0" max="99" />
                <span className="admin-team away">
                  <Flag country={match.a} /> {match.a}
                </span>
                <button className="btn-green admin-save-btn">Guardar</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {adminSubtab === 'Ver Predicciones' && (
        <div>
          <select className="participant-select">
            <option value="">Seleccionar participante</option>
            <option value="lucas">Lucas</option>
            <option value="matias">Matias</option>
            <option value="sofia">Sofia</option>
          </select>

          <div className="pts-breakdown">
            <div className="pts-chip">
              <strong>45</strong>
              <span>Grupos</span>
            </div>
            <div className="pts-chip">
              <strong>30</strong>
              <span>Fase KO</span>
            </div>
            <div className="pts-chip">
              <strong>25</strong>
              <span>Especiales</span>
            </div>
            <div className="pts-chip">
              <strong>100</strong>
              <span>Total</span>
            </div>
          </div>

          <div className="empty-state">Selecciona un participante para ver sus predicciones</div>
        </div>
      )}
    </div>
  )
}
