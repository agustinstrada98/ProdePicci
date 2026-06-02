export interface Match {
  id: string
  h: string
  a: string
  date: string
  time: string
}

export interface Group {
  teams: string[]
  matches: Match[]
}

export const GROUPS: Record<string, Group> = {
  A: {
    teams: ['México', 'Sudáfrica', 'Corea del Sur', 'Chequia'],
    matches: [
      { id: 'A1', h: 'México', a: 'Sudáfrica', date: '2026-06-12', time: '18:00' },
      { id: 'A2', h: 'Corea del Sur', a: 'Chequia', date: '2026-06-12', time: '21:00' },
      { id: 'A3', h: 'Chequia', a: 'Sudáfrica', date: '2026-06-24', time: '18:00' },
      { id: 'A4', h: 'México', a: 'Corea del Sur', date: '2026-06-24', time: '21:00' },
      { id: 'A5', h: 'Sudáfrica', a: 'Corea del Sur', date: '2026-07-06', time: '20:00' },
      { id: 'A6', h: 'Chequia', a: 'México', date: '2026-07-06', time: '20:00' },
    ],
  },
  B: {
    teams: ['Canadá', 'Bosnia y Herzegovina', 'Qatar', 'Suiza'],
    matches: [
      { id: 'B1', h: 'Canadá', a: 'Bosnia y Herzegovina', date: '2026-06-13', time: '18:00' },
      { id: 'B2', h: 'Qatar', a: 'Suiza', date: '2026-06-13', time: '21:00' },
      { id: 'B3', h: 'Suiza', a: 'Bosnia y Herzegovina', date: '2026-06-25', time: '18:00' },
      { id: 'B4', h: 'Canadá', a: 'Qatar', date: '2026-06-25', time: '21:00' },
      { id: 'B5', h: 'Bosnia y Herzegovina', a: 'Qatar', date: '2026-07-07', time: '20:00' },
      { id: 'B6', h: 'Suiza', a: 'Canadá', date: '2026-07-07', time: '20:00' },
    ],
  },
  C: {
    teams: ['Brasil', 'Marruecos', 'Haití', 'Escocia'],
    matches: [
      { id: 'C1', h: 'Brasil', a: 'Marruecos', date: '2026-06-14', time: '18:00' },
      { id: 'C2', h: 'Haití', a: 'Escocia', date: '2026-06-14', time: '21:00' },
      { id: 'C3', h: 'Brasil', a: 'Haití', date: '2026-06-26', time: '18:00' },
      { id: 'C4', h: 'Escocia', a: 'Marruecos', date: '2026-06-26', time: '21:00' },
      { id: 'C5', h: 'Marruecos', a: 'Haití', date: '2026-07-08', time: '20:00' },
      { id: 'C6', h: 'Escocia', a: 'Brasil', date: '2026-07-08', time: '20:00' },
    ],
  },
  D: {
    teams: ['Estados Unidos', 'Paraguay', 'Australia', 'Turquía'],
    matches: [
      { id: 'D1', h: 'Estados Unidos', a: 'Paraguay', date: '2026-06-15', time: '18:00' },
      { id: 'D2', h: 'Australia', a: 'Turquía', date: '2026-06-15', time: '21:00' },
      { id: 'D3', h: 'Estados Unidos', a: 'Australia', date: '2026-06-27', time: '18:00' },
      { id: 'D4', h: 'Turquía', a: 'Paraguay', date: '2026-06-27', time: '21:00' },
      { id: 'D5', h: 'Paraguay', a: 'Australia', date: '2026-07-09', time: '20:00' },
      { id: 'D6', h: 'Turquía', a: 'Estados Unidos', date: '2026-07-09', time: '20:00' },
    ],
  },
  E: {
    teams: ['Alemania', 'Curazao', 'Ecuador', 'Costa de Marfil'],
    matches: [
      { id: 'E1', h: 'Alemania', a: 'Curazao', date: '2026-06-16', time: '18:00' },
      { id: 'E2', h: 'Costa de Marfil', a: 'Ecuador', date: '2026-06-16', time: '21:00' },
      { id: 'E3', h: 'Ecuador', a: 'Curazao', date: '2026-06-28', time: '18:00' },
      { id: 'E4', h: 'Alemania', a: 'Costa de Marfil', date: '2026-06-28', time: '21:00' },
      { id: 'E5', h: 'Ecuador', a: 'Alemania', date: '2026-07-10', time: '20:00' },
      { id: 'E6', h: 'Curazao', a: 'Costa de Marfil', date: '2026-07-10', time: '20:00' },
    ],
  },
  F: {
    teams: ['Países Bajos', 'Japón', 'Suecia', 'Túnez'],
    matches: [
      { id: 'F1', h: 'Países Bajos', a: 'Japón', date: '2026-06-17', time: '18:00' },
      { id: 'F2', h: 'Suecia', a: 'Túnez', date: '2026-06-17', time: '21:00' },
      { id: 'F3', h: 'Países Bajos', a: 'Suecia', date: '2026-06-29', time: '18:00' },
      { id: 'F4', h: 'Túnez', a: 'Japón', date: '2026-06-29', time: '21:00' },
      { id: 'F5', h: 'Túnez', a: 'Países Bajos', date: '2026-07-11', time: '20:00' },
      { id: 'F6', h: 'Japón', a: 'Suecia', date: '2026-07-11', time: '20:00' },
    ],
  },
  G: {
    teams: ['Bélgica', 'Egipto', 'Irán', 'Nueva Zelanda'],
    matches: [
      { id: 'G1', h: 'Bélgica', a: 'Egipto', date: '2026-06-18', time: '18:00' },
      { id: 'G2', h: 'Irán', a: 'Nueva Zelanda', date: '2026-06-18', time: '21:00' },
      { id: 'G3', h: 'Bélgica', a: 'Irán', date: '2026-06-30', time: '18:00' },
      { id: 'G4', h: 'Nueva Zelanda', a: 'Egipto', date: '2026-06-30', time: '21:00' },
      { id: 'G5', h: 'Nueva Zelanda', a: 'Bélgica', date: '2026-07-12', time: '20:00' },
      { id: 'G6', h: 'Egipto', a: 'Irán', date: '2026-07-12', time: '20:00' },
    ],
  },
  H: {
    teams: ['España', 'Cabo Verde', 'Arabia Saudita', 'Uruguay'],
    matches: [
      { id: 'H1', h: 'Arabia Saudita', a: 'Uruguay', date: '2026-06-19', time: '18:00' },
      { id: 'H2', h: 'España', a: 'Cabo Verde', date: '2026-06-19', time: '21:00' },
      { id: 'H3', h: 'Uruguay', a: 'Cabo Verde', date: '2026-07-01', time: '18:00' },
      { id: 'H4', h: 'España', a: 'Arabia Saudita', date: '2026-07-01', time: '21:00' },
      { id: 'H5', h: 'Cabo Verde', a: 'Arabia Saudita', date: '2026-07-13', time: '20:00' },
      { id: 'H6', h: 'Uruguay', a: 'España', date: '2026-07-13', time: '20:00' },
    ],
  },
  I: {
    teams: ['Francia', 'Senegal', 'Irak', 'Noruega'],
    matches: [
      { id: 'I1', h: 'Francia', a: 'Senegal', date: '2026-06-20', time: '18:00' },
      { id: 'I2', h: 'Irak', a: 'Noruega', date: '2026-06-20', time: '21:00' },
      { id: 'I3', h: 'Senegal', a: 'Irak', date: '2026-07-02', time: '18:00' },
      { id: 'I4', h: 'Noruega', a: 'Francia', date: '2026-07-02', time: '21:00' },
      { id: 'I5', h: 'Noruega', a: 'Senegal', date: '2026-07-14', time: '20:00' },
      { id: 'I6', h: 'Francia', a: 'Irak', date: '2026-07-14', time: '20:00' },
    ],
  },
  J: {
    teams: ['Argentina', 'Argelia', 'Austria', 'Jordania'],
    matches: [
      { id: 'J1', h: 'Austria', a: 'Jordania', date: '2026-06-21', time: '18:00' },
      { id: 'J2', h: 'Argentina', a: 'Argelia', date: '2026-06-21', time: '21:00' },
      { id: 'J3', h: 'Argentina', a: 'Austria', date: '2026-07-03', time: '18:00' },
      { id: 'J4', h: 'Jordania', a: 'Argelia', date: '2026-07-03', time: '21:00' },
      { id: 'J5', h: 'Argelia', a: 'Austria', date: '2026-07-15', time: '20:00' },
      { id: 'J6', h: 'Jordania', a: 'Argentina', date: '2026-07-15', time: '20:00' },
    ],
  },
  K: {
    teams: ['Portugal', 'República Democrática del Congo', 'Uzbekistán', 'Colombia'],
    matches: [
      { id: 'K1', h: 'Uzbekistán', a: 'Colombia', date: '2026-06-22', time: '18:00' },
      { id: 'K2', h: 'Portugal', a: 'República Democrática del Congo', date: '2026-06-22', time: '21:00' },
      { id: 'K3', h: 'Portugal', a: 'Uzbekistán', date: '2026-07-04', time: '18:00' },
      { id: 'K4', h: 'Colombia', a: 'República Democrática del Congo', date: '2026-07-04', time: '21:00' },
      { id: 'K5', h: 'Colombia', a: 'Portugal', date: '2026-07-16', time: '20:00' },
      { id: 'K6', h: 'República Democrática del Congo', a: 'Uzbekistán', date: '2026-07-16', time: '20:00' },
    ],
  },
  L: {
    teams: ['Inglaterra', 'Croacia', 'Ghana', 'Panamá'],
    matches: [
      { id: 'L1', h: 'Ghana', a: 'Panamá', date: '2026-06-23', time: '18:00' },
      { id: 'L2', h: 'Inglaterra', a: 'Croacia', date: '2026-06-23', time: '21:00' },
      { id: 'L3', h: 'Inglaterra', a: 'Ghana', date: '2026-07-05', time: '18:00' },
      { id: 'L4', h: 'Panamá', a: 'Croacia', date: '2026-07-05', time: '21:00' },
      { id: 'L5', h: 'Croacia', a: 'Ghana', date: '2026-07-17', time: '20:00' },
      { id: 'L6', h: 'Panamá', a: 'Inglaterra', date: '2026-07-17', time: '20:00' },
    ],
  },
}

export const ALL_TEAMS = Object.values(GROUPS).flatMap((g) => g.teams)
