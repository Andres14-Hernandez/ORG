import { useState } from "react"
import TextForm from "../TextForm"
import "./Form.css"
import ListForm from "../ListForm"
import Button from "../Bottom"

const Form = (props) =>{

    const [name, setName] = useState("")
    const [charge, setCharge] = useState("")
    const [img, setImg] = useState("")
    const [team, setTeam] = useState("")

    const [title, setTitle] = useState("")
    const [color, setColor] = useState("")

    const {login, createTeam} = props


    const send = (e) =>{
        e.preventDefault();
        console.log('manejar envio')
        let sendData = {
            name: name,
            charge: charge,
            img: img,
            team: team
        }
        login(sendData)
    }

    const sendTeam = (e)=>{
        e.preventDefault()
        createTeam( {title, firstColor: color} )
    }

    return <section className="form">
        <form onSubmit={send}>
            <h2>Rellena el formulario para añadir a un colaborador</h2>
            <TextForm 
                title="Nombre" 
                placeholder="Ingresa un nombre" 
                required 
                valor={name} 
                setValor={setName} 
            />

            <TextForm 
                title="Cargo" 
                placeholder="Ingresa su cargo" 
                required 
                valor={charge} 
                setValor={setCharge}
            />

            <TextForm 
                title="Foto"  
                placeholder="Ingresa la url de la foto" 
                required 
                valor={img} 
                setValor={setImg}
            />

            <ListForm 
                valor={team} 
                setTeam={setTeam} 
                teams={props.teams} 
            />

            <Button>
                Crear
            </Button>
        </form>

        <form onSubmit={sendTeam}>
            <h2>Rellena el formulario para crear un nuevo equipo</h2>
            <TextForm 
                title="Nombre del equipo" 
                placeholder="Ingresa un titulo" 
                required 
                valor={title} 
                setValor={setTitle} 
            />

            <TextForm title="Color" 
                placeholder="Ingresa un color" 
                required 
                valor={color} 
                setValor={setColor}
                type="color"
            />

            <Button>Registrar equipo</Button>
        </form>
    </section>
}

export default Form