import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Form  from './components/Form'
import Tarea from './components/Tarea'
const App = ()=>{

  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
  if(!tareasIniciales){
    tareasIniciales = [];
  }

  const [tareas,setTareas] = useState(tareasIniciales);

  useEffect( ()=>{
    let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));

    if(tareasIniciales){
      localStorage.setItem('tareas',JSON.stringify(tareas))
    }else{
      localStorage.setItem('tareas',JSON.stringify([]));
    }
  },[tareas])

  const crearTarea = tarea =>{
    setTareas([
      ...tareas,tarea
    ])
  }

  const eliminarTarea = id =>{
    const nuevasTareas = tareas.filter((tarea)=> tarea.id !==id)    
    setTareas(nuevasTareas);
  }

  const titulo = tareas.length === 0 ? 'No tienes Tareas Homs' : 'Tus Tareas'

  
  return (
    <>
      <Header/>

      <div className="container">
        <div className="row">
          <div className="one-half column"> 
          <Form crearTarea={crearTarea}/>
          </div>
          <div className="one-half column"> 
          <h2>{titulo}</h2>
          {tareas.map((tarea)=>(
              <Tarea key={tarea.id} tarea={tarea} eliminar={eliminarTarea}/>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
