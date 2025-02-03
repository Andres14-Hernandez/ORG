import "./TextForm.css"

const TextForm = (props) =>{
    const controlChange = (e)=>{
        props.setValor(e.target.value)
    }
   
    const {type = "text"} = props

    const points = "...";
    return <div className={`input input-${type}`}>
        <label> { props.title } </label>
        <input 
        placeholder= { props.placeholder + points } 
        required={props.required}
        value={props.valor}
        onChange={controlChange}
        type={type}
        />
    </div>
}

export default TextForm