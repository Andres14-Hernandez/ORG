import GitHubIcon from "../../Icons/GitHub"
import LinkedinIcon from "../../Icons/Linkedin"
import "./Footer.css"
const Footer = ()=>{
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>            
                <GitHubIcon fill={"white"}/>         
                <LinkedinIcon fill={"white"}/>            
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong className="textFooter">Desarrollado por Andrés Hernández</strong>
    </footer>
}

export default Footer