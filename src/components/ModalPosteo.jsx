function ModalPosteo({ posteo, cerrarPosteo, darLike, tieneLike, calcularLikes }) {
  const likeActivo = tieneLike(posteo.id)

  return (
    <section className="modal-fondo" onClick={cerrarPosteo}>
      <article className="modal-posteo" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar-modal" onClick={cerrarPosteo}>
          ×
        </button>

        <div className="modal-imagen-zona">
          <img
            className="modal-imagen"
            src={posteo.imagen}
            alt={"Publicación ampliada de " + posteo.usuario}
          />
        </div>

        <div className="modal-info">
          <div className="posteo-header">
            <div className="avatar">
              {posteo.usuario.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2>{posteo.usuario}</h2>
              <p>{posteo.fecha}</p>
            </div>
          </div>

          <p className="caption modal-caption">
            <strong>{posteo.usuario}</strong> {posteo.caption}
          </p>

          {posteo.esPromo && (
            <a
              className="link-juego"
              href={posteo.link}
              target="_blank"
              rel="noreferrer"
            >
              Entrar a fighters2d.netlify.app
            </a>
          )}

          <div className="posteo-acciones">
            <button
              className={likeActivo ? "boton-like activo" : "boton-like"}
              onClick={() => darLike(posteo.id)}
            >
              {likeActivo ? "♥" : "♡"}
            </button>

            <p className="likes-modal">{calcularLikes(posteo)} likes</p>
          </div>

          <div className="comentarios">
            <h3>Comentarios</h3>

            {posteo.comentarios.map((comentario, index) => (
              <p key={index}>
                <strong>usuario{index + 1}</strong> {comentario}
              </p>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

export default ModalPosteo