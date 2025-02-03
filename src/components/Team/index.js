import "./Team.css"
import Card from "../Card";
import hexToRgba from "hex-to-rgba";

const Team = (props)=>{

    const {firstColor, /* secondColor, */ title, id} = props.data;
    const styleTitle = {borderColor: firstColor}
    const {workers, deleteWorker, updateColorTeam} = props

    const colors = {
        backgroundColor: hexToRgba(firstColor, 0.4) 
    }

    return <>
        {
            workers.length > 0 &&
            <section className="team" style={colors}>
                <input className="input_color"
                    type='color'
                    value={ firstColor }
                    onChange={(event)=>{
                        updateColorTeam(event.target.value, id)
                    }}
                                    
                />                
                <h3 style={styleTitle} >{title}</h3>
                <div className="workers">
                    {
                        workers.map((worker, index)=><Card 
                        data={worker} 
                        key={index} 
                        firstColor={firstColor}
                        deleteWorker={deleteWorker}
                        />)
                    }
                </div>
        </section>
        }
    </>
}

export default Team