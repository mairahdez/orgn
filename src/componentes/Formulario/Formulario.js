import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import Boton from "../Boton"
import ListaOpciones2 from "../ListaOpciones2"

const Formulario = (props) => {
//la letra "e" se refiere al evento que esta ejecutando
const [nombre,actualizarNombre] = useState("")
const [puesto,actualizarPuesto] = useState("")
const [foto,actualizarFoto] = useState("")
const [equipo, actualizarEquipo] = useState("")

const [titulo, actualizarTitulo] = useState("")
const[color, actualizarColor] = useState("")

const { registrarColaborador, crearEquipo} = props

    const manejarEnvio =(e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
        
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre"
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />

            <Campo titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto} 
        />

            <Campo titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto}
                actualizarValor={actualizarFoto}
        />
            <ListaOpciones2 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo"
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
            />

            <Campo titulo="Color" 
                placeholder="Ingresar el color en hex" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color" 
        />
        <Boton>Registrar equipo</Boton>
        </form>
        </section>

}

export default Formulario