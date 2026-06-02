interface HeaderProps {
  user: { name: string }
  onLogout?: () => void
}

export default function Header({ user, onLogout }: HeaderProps) {
  return (
    <header className="header">
      <h1>Prode Mundial 2026</h1>
      <div className="header-user">
        <span>{user.name}</span>
        {onLogout && (
          <button className="btn-ghost btn-sm" onClick={onLogout}>
            Salir
          </button>
        )}
      </div>
    </header>
  )
}
