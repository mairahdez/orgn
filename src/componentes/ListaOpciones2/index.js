import "./ListaOpciones2.css"

const ListaOpciones2 = (props) =>{

//metodo map -> arreglo.map ( (equipos, index) => {})
//  return <option><option/>
//})    
   

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones2">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}
export default ListaOpciones2