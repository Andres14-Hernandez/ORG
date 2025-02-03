import {v4 as uuid} from 'uuid';
import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.js';
import MyOrg from './components/MyOrg/index.js';
import Team from './components/Team/index.js';
import Footer from './components/Footer/index.js';


function App() {

  const [showFrom, updateForm] = useState(false);
  const [workers, updateWorkers] = useState([
    {
      id: uuid(),
      charge:"Desarrollador",
      img:"https://github.com/Andres14-Hernandez.png",
      name:"Andrés Hernández",
      team: "Front end",
    },

    {
      id: uuid(),
      charge: "Instructor",
      team: "Front End",
      img: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
    },

    {
      id: uuid(),
      charge: "Instructora en Alura Latam",
      team: "Ux y Diseño",
      img: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
    },

    {
      id: uuid(),
      charge: "Head de Alura e Instructor",
      team: "Back-end",
      img: "https://github.com/christianpva.png",
      name: "Christian Velasco",
    },

    {
      id: uuid(),
      charge: "Dev FullStack",
      team: "Innovación y Gestión",
      img: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
    }
])

    const [teams, updateTeams] = useState([
      {
        id: uuid(),
        title: "Front end",
        firstColor: "#82CFFA",
        secondColor: "#E8F8FF",
      },
      {
        id: uuid(),
        title: "Back-end",
        firstColor: "#57C278",
        secondColor: "#D9F7E9",
      },
      
      {
        id: uuid(),
        title: "Data Science",
        firstColor: "#A6D157",
        secondColor: "#F0F8E2",
      },
      {
        id: uuid(),
        title: "Devops",
        firstColor: "#E06B69",
        secondColor: "#FDE7E8",
      },
      {
        id: uuid(),
        title: "Ux y Diseño",
        firstColor: "#DB6EBF",
        secondColor: "#FAE9F5",
      },
      {
        id: uuid(),
        title: "Móvil",
        firstColor: "#FFBA05",
        secondColor: "#FFF5D9",
      },
      {
        id: uuid(),
        title: "Innovación y Gestión",
        firstColor: "#FF8A29",
        secondColor: "#FFEEDF",
      },
  
  ])

  const changeShow = ()=>{
    updateForm(!showFrom)
  }


  // Añadir colaborador
  const login = (worker)=>{
    console.log("Nuevo colaborador: ", worker)
    updateWorkers([...workers, worker])
  }

  // Eliminar colaborador
  const deleteWorker = (id)=>{
    console.log("Eliminar Colaborador", id)
    const newWorkers = workers.filter((worker)=> worker.id !== id)
    updateWorkers(newWorkers)
  }

  // Actualizar Color
  const updateColorTeam = (color, id)=>{
    console.log('actualizar: ', color, id)
    const teamsUpdated = teams.map((team)=>{
      if(team.id === id){
        team.firstColor = color
      }
      return team

    })
    updateTeams(teamsUpdated)
  }

  // Crear Equipo
  const createTeam = (newTeam)=>{
    console.log(newTeam)
    updateTeams([...teams, {...newTeam, id: uuid()}])
  }



  return (
    <div>
      <Header/>
      { showFrom === true ? 
        <Form 
        teams={teams.map((teams)=>teams.title)}
        login={login}
        createTeam={createTeam}
        /> : <></> }

      <MyOrg changeShow={changeShow} />

      {
        teams.map( (team)=>{
          console.log("Equipo: ", team)
          return <Team 
          data={team} key={team.title}
          workers={workers.filter(worker => worker.team === team.title)}
          deleteWorker={deleteWorker}
          updateColorTeam={updateColorTeam}
          />  
        } )
      }

      <Footer/>
    </div>
  );
}

export default App;
