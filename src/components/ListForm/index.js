import "./ListForm.css"

const ListForm = (props) =>{



    const controlChange= (e)=>{
        console.log("cambio", e.target.value)
        props.setTeam(e.target.value)
    }

    return <div className="listoptions">
        <label>Equipos</label>
        <select value={props.valor} onChange={controlChange}>
            <option value="" disabled defaultValue={""} hidden>Seleccionar equipo</option>
            { props.teams.map( (team, index) =>{
                return <option key={index}>{team} </option>
            } ) }
        </select>
    </div>
}

export default ListForm