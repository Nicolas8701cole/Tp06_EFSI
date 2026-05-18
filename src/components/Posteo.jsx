function Posteo({ posteo, abrirPosteo, darLike, tieneLike, calcularLikes }) {
  const likeActivo = tieneLike(posteo.id)

  return (
    <article className="posteo">
      <div className="posteo-header">
        <div className="avatar">
          {posteo.usuario.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2>{posteo.usuario}</h2>
          <p>{posteo.fecha}</p>
        </div>
      </div>

      <button className="boton-imagen" onClick={() => abrirPosteo(posteo)}>
        <img
          className="posteo-imagen"
          src={posteo.imagen}
          alt={"Publicación de " + posteo.usuario}
        />
      </button>

      <div className="posteo-acciones">
        <button
          className={likeActivo ? "boton-like activo" : "boton-like"}
          onClick={() => darLike(posteo.id)}
        >
          {likeActivo ? "♥" : "♡"}
        </button>

        <button className="boton-comentar" onClick={() => abrirPosteo(posteo)}>
          Ver detalle
        </button>
      </div>

      <p className="likes">{calcularLikes(posteo)} likes</p>

      <p className="caption">
        <strong>{posteo.usuario}</strong> {posteo.caption}
      </p>

      {posteo.esPromo && (
        <a
          className="link-juego"
          href={posteo.link}
          target="_blank"
          rel="noreferrer"
        >
          Jugar Fighters 2D
        </a>
      )}

      <button className="ver-comentarios" onClick={() => abrirPosteo(posteo)}>
        Ver comentarios
      </button>
    </article>
  )
}

export default Posteo