function Header({ vista, cambiarVista }) {
  return (
    <header className="header">
      <div className="logo-zona">
        <div className="logo-gato">🐾</div>

        <div>
          <h1>CatFighters 2D</h1>
          <p>Red social no oficial del modo gato</p>
        </div>
      </div>

      <nav className="nav">
        <button
          className={vista === "feed" ? "boton-nav activo" : "boton-nav"}
          onClick={() => cambiarVista("feed")}
        >
          Feed
        </button>

        <button
          className={vista === "perfil" ? "boton-nav activo" : "boton-nav"}
          onClick={() => cambiarVista("perfil")}
        >
          Perfil
        </button>
      </nav>
    </header>
  )
}

export default Header