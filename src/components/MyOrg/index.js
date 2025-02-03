import './MyOrg.css'

const MyOrg = (props) =>{   
    return <section className='org__section'>
        <h3 className='title'>Mi Organización</h3>
        <img src='img/Button-add.png' alt='add' onClick={props.changeShow} />
    </section>       
}

export default MyOrg