import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
const Form = ({crearTarea}) => {


 
    
    
    //States 
    const [tarea,setTarea] = useState({
        actividad  :'',
        materia    :'',
        fecha      :'10101111',
        hora       :''
    });




    const[isError,setError] = useState(false);
    const {actividad,materia,fecha,hora} = tarea;


    const actualizarTarea = (event)=>{
        setTarea({
            ...tarea,
            [event.target.name]: event.target.value   
        })
    }

    const handleSumbit = (event) =>{
        event.preventDefault();
        
        if(actividad.trim() === '' || materia.trim() === '' || fecha.trim() === '' || hora.trim() === '')
        {
            console.log('Escribe todo');        
            setError(true)
            return;
        }

        setError(false)
        
        tarea.id = uuidv4();

        crearTarea(tarea);


        setTarea({
            actividad  :'',
            materia    :'',
            fecha      :'',
            hora       :''
        })

        
    }


    

    
    return (
       <>
        <h2>Create Task</h2>
        {isError ?  <p className="alerta-error">Escribe todos los campos</p> : null}
        <form
            onSubmit={handleSumbit}>
            <label>Actividad</label>
            <input
                type="text"                
                name="actividad"
                className="u-full-width"
                placeholder="Write your activitie"
                onChange={actualizarTarea}
                value={actividad}
            />

            <label>Materia</label>
            <input
                type="text"                
                name="materia"
                className="u-full-width"
                placeholder="Write your activitie"
                onChange={actualizarTarea}
                value={materia}
            />
            <label>Date</label>
            <input
                type="date"                
                name="fecha"
                className="u-full-width"
                onChange={actualizarTarea}
                value={fecha}
            />
            <label>Hora</label>
            <input
                type="time"                
                name="hora"
                className="u-full-width"
                onChange={actualizarTarea}                
                value={hora}
            />

            <button
            type="submit"
            className="u-full-width  btn-agregar"
            > 
            Agregar
            </button>
        </form>
       </>
    )
}

Form.propTypes = {
    crearTarea: PropTypes.func.isRequired
}

export default Form
