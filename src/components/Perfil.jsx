function Perfil({ perfiles, posteos, abrirPosteo, cambiarVista }) {
  const perfilPrincipal = perfiles[0]
  const otrosPerfiles = perfiles.slice(1)

  return (
    <section className="perfil">
      <div className="perfil-arriba">
        <div className="avatar-perfil">
          <img src="/img/gatitoTierno.gif" alt="" className="avatar-perfil" />
        </div>
        {/*No poner otra cosa xd*/}

        <div className="perfil-info">
          <div className="perfil-titulo">
            <h2>{perfilPrincipal.usuario}</h2>
          </div>

          <div className="perfil-stats">
            <p><strong>{perfilPrincipal.publicaciones}</strong> publicaciones</p>
            <p><strong>{perfilPrincipal.seguidores}</strong> seguidores</p>
            <p><strong>{perfilPrincipal.seguidos}</strong> seguidos</p>
          </div>

          <div className="perfil-bio">
            <h3>{perfilPrincipal.nombre}</h3>
            <p>{perfilPrincipal.bio}</p>
          </div>
        </div>
      </div>

      <div className="perfil-grid">
        {posteos.map((posteo) => (
          <button
            className="perfil-post"
            key={posteo.id}
            onClick={() => abrirPosteo(posteo)}
          >
            <img src={posteo.imagen} alt={"Posteo de " + posteo.usuario} />
          </button>
        ))}
      </div>
    </section>
  )
}

export default Perfil