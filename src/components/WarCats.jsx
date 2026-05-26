function WarCats({ activo, posDisparo }) {
  if (!activo) {
    return null
  }

  return (
    <div className={"disparo pos-" + posDisparo}>
      <img
        className="aviso"
        src="/img/gatoFranco.png"
        alt=""
      />

      <img
        className="evento-gif"
        src="/img/GatitoTiernoBala.gif"
        alt=""
      />
    </div>
  )
}

export default WarCats