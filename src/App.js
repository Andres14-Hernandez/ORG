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
      name:"Andrés Hernández",
      img:"https://github.com/Andres14-Hernandez.png",
      team: "Front-end",
      charge:"Desarrollador",
    },
    {
      id: uuid(),
      name: "Mason Reed", 
      img: "https://randomuser.me/api/portraits/men/21.jpg",
      team: "Back-end",
      charge: "Desarrollador",
    },
    {
      id: uuid(), 
      name: "Liam Carter", 
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      team: "Data Science",
      charge: "Analista de datos",
    },
    {
      id: uuid(), 
      name: "Emma Blake", 
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      team: "Devops",
      charge: "Ingeniera en Devops",
    },

    {
      id: uuid(), 
      name: "Noah Bennett", 
      img: "https://randomuser.me/api/portraits/men/56.jpg",
      team: "Ux y Diseño",
      charge: "Diseñador UX",
    },
    {
      id: uuid(), 
      name: "Olivia Harris", 
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      team: "Móvil",
      charge: "Desarrolladora",
    },
    {
      id: uuid(), 
      name: "Ava Morgan", 
      img: "https://randomuser.me/api/portraits/women/34.jpg",
      team: "Innovación y Gestión",
      charge: "Especialista en innovación",
    },
    {
      id: uuid(), 
      name: "Ethan Hayes", 
      img: "https://randomuser.me/api/portraits/men/43.jpg",
      team: "Innovación y Gestión",
      charge: "Project Manager",
    },
    {
      id: uuid(), 
      name: "Sophia Lane", 
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      team: "Móvil",
      charge: "Diseñadora Ux",
    },
    {
      id: uuid(), 
      name: "Lucas Parker", 
      img: "https://randomuser.me/api/portraits/men/77.jpg",
      team: "Front-end",
      charge: "Desarrollador",
    },
    {
      id: uuid(), 
      name: "Isabella Ford", 
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      team: "Ux y Diseño",
      charge: "Diseñadora UI",
    },
    {
      id: uuid(), 
      name: "Logan Brooks", 
      img: "https://randomuser.me/api/portraits/men/88.jpg",
      team: "Devops",
      charge: "Desarrollador",
    },
    {
      id: uuid(), 
      name: "Mia Coleman", 
      img: "https://randomuser.me/api/portraits/women/29.jpg",
      team: "Data Science",
      charge: "Analista de datos",
    },
    {
      id: uuid(), 
      name: "Aiden Scott", 
      img: "https://randomuser.me/api/portraits/men/19.jpg",
      team: "Back-end",
      charge: "Desarrollador",
    },
    {
      id: uuid(), 
      name: "Charlotte Dean", 
      img: "https://randomuser.me/api/portraits/women/53.jpg",
      team: "Back-end",
      charge: "Desarrolladora",
    },
    {
      id: uuid(), 
      name: "James Walker", 
      img: "https://randomuser.me/api/portraits/men/60.jpg",
      team: "Data Science",
      charge: "Desarrollador",
    },




    
])

    const [teams, updateTeams] = useState([
      {
        id: uuid(),
        title: "Front-end",
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
