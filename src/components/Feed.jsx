import Posteo from "./Posteo"

function Feed({ posteos, abrirPosteo, darLike, tieneLike, calcularLikes }) {
  if (posteos.length === 0) {
    return (
      <section className="feed-vacio">
        <p>Todavía no hay posteos para mostrar.</p>
      </section>
    )
  }

  return (
    <section className="feed">
      {posteos.map((posteo) => (
        <Posteo
          key={posteo.id}
          posteo={posteo}
          abrirPosteo={abrirPosteo}
          darLike={darLike}
          tieneLike={tieneLike}
          calcularLikes={calcularLikes}
        />
      ))}
    </section>
  )
}

export default Feed