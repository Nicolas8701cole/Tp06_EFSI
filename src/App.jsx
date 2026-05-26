import { useEffect, useState } from "react"
import "./App.css"

import { traerImgGatos } from "./api/catsApi"
import { posteosBase } from "./data/Posteo"
import { perfil } from "./data/Perfil"

import WarCats from "./components/WarCats"
import Perfil from "./components/Perfil"
import Header from "./components/Header"
import Feed from "./components/Feed"
import ModalPosteo from "./components/ModalPosteo"
import Loader from "./components/Loader"
import ErrorMessage from "./components/ErrorMessage"

function App() {
  const [posteos, setPosteos] = useState([])
  const [cantidadVisible, setCantidadVisible] = useState(6)
  const [posteoSeleccionado, setPosteoSeleccionado] = useState(null)
  const [posDisparo, setPosDisparo] = useState(1)

  const [vista, setVista] = useState("feed")
  //Se les define así a las publicaciones "feed"
  const [likesDados, setLikesDados] = useState([])

  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState("")
  const [eventoActivo, setEventoActivo] = useState(false)

  useEffect(() => {
    //Gatitos feed
    cargarPosteos()
    //Gatitos disparados
    let tiempoParaAparecer
    let tiempoParaSalir

    function prepararSiguienteEvento() {
      const tiempoRandom = 5000 + Math.random() * 8000

      tiempoParaAparecer = setTimeout(() => {
        setPosDisparo(Math.floor(Math.random() * 3) + 1)
        setEventoActivo(true)

        tiempoParaSalir = setTimeout(() => {
          setEventoActivo(false)
          prepararSiguienteEvento()
        }, 1800)
      }, tiempoRandom)
    }

    prepararSiguienteEvento()

    return () => {
      clearTimeout(tiempoParaAparecer)
      clearTimeout(tiempoParaSalir)
    }
    //Es el bloque de código que se va a 
    //ejecutar de manera asíncrona inmediatamente después 
    // de que el componente se dibuje en la pantalla por primera vez.
  }, [])

  async function cargarPosteos() {
    setCargando(true)
    setError("") //¿? Probar de eliminar

    try {
      const gatos = await traerImgGatos(18)

      const posteosArmados = gatos.map((gato, index) => {
        const datosDelPosteo = posteosBase[index % posteosBase.length] //Repite datos simulados si nos quedamos sin?

        return {
          id: gato.id || `posteo-${index}`,
          imagen: gato.url,
          ancho: gato.width,
          alto: gato.height,
          ...datosDelPosteo,
        }
      })

      setPosteos(posteosArmados)
    } catch (err) {
      setError("No pude cargar los posteos. Probá recargando la página.")
    } finally {
      setCargando(false)
    }
  }

  //Definimos funciones
  function cargarMas() {
    setCantidadVisible(cantidadVisible + 3)
  }

  function abrirPosteo(posteo) {
    setPosteoSeleccionado(posteo)
  }

  function cerrarPosteo() {
    setPosteoSeleccionado(null)
  }

  function cambiarVista(nuevaVista) {
    setVista(nuevaVista)
    setPosteoSeleccionado(null)
  }

  function darLike(idPosteo) {
    if (likesDados.includes(idPosteo)) {
      setLikesDados(likesDados.filter((id) => id !== idPosteo))
      //Si ya tenía el like rehace la lista menos el
    } else {
      setLikesDados([...likesDados, idPosteo])
      //Si no lo añade
    }
  }

  function verSiTieneLike(idPosteo) {
    return likesDados.includes(idPosteo)
  }

  function calcularLikes(posteo) {
    const likesBase = posteo.likes || 0

    if (verSiTieneLike(posteo.id)) {
      return likesBase + 1
    }

    return likesBase
  }

  const posteosVisibles = posteos.slice(0, cantidadVisible)
  //Solo se veran los permitidos
  const quedanPosteos = cantidadVisible < posteos.length

  return (
    <main className="app">
      <Header
        vista={vista}
        cambiarVista={cambiarVista}
      />

      {cargando && (
        <Loader texto="Cargando posteos de CatFighters 2D..." />
      )}

      {!cargando && error !== "" && (
        <ErrorMessage mensaje={error} />
      )}

      {!cargando && error === "" && vista === "feed" && (
        <>
          <Feed
            posteos={posteosVisibles}
            abrirPosteo={abrirPosteo}
            darLike={darLike}
            tieneLike={verSiTieneLike}
            calcularLikes={calcularLikes}
          />

          {quedanPosteos && (
            <div className="zona-cargar-mas">
              <button className="boton-cargar-mas" onClick={cargarMas}>
                Cargar más
              </button>
            </div>
          )}
        </>
      )}

      {!cargando && error === "" && vista === "perfil" && (
        <Perfil
          perfiles={perfil}
          posteos={posteos}
          abrirPosteo={abrirPosteo}
          cambiarVista={cambiarVista}
        />
      )}

      {posteoSeleccionado && (
        <ModalPosteo
          posteo={posteoSeleccionado}
          cerrarPosteo={cerrarPosteo}
          darLike={darLike}
          tieneLike={verSiTieneLike}
          calcularLikes={calcularLikes}
        />
      )}
      <WarCats activo={eventoActivo} posDisparo={posDisparo} />
    </main>
  )
}

export default App