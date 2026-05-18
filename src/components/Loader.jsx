function Loader({ texto = "Cargando..." }) {
  return (
    <div className="loader">
      <div className="ruedita"></div>
      <p>{texto}</p>
    </div>
  )
}

export default Loader