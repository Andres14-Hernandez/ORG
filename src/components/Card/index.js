import "./Card.css"
import { IoIosCloseCircle } from "react-icons/io";

const Card = (props)=>{

    const {name, charge, img, id} = props.data
    const {firstColor, deleteWorker} = props

    return <div className="card">
        <IoIosCloseCircle className="delete" onClick={()=> deleteWorker(id)} />
        <div className="header" style={{backgroundColor: firstColor}}>
            <img src={img} alt={name}/>
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{charge}</h5>
        </div>
    </div>
}

export default Card