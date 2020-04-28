import React from 'react'
import PropTypes from 'prop-types';
const Tarea = ({tarea,eliminar}) => {

    const{actividad,materia,fecha,hora} = tarea;
    return (
        <div className="tarea">
            <p>Actividad : {actividad} </p>                        
            <p>Materia : {materia} </p>                        
            <p>Fecha : {fecha} </p>                        
            <p>Hora : {hora} </p>      

            <button
                className="button eliminar u-full-witdh"
                onClick={ ()=> eliminar(tarea.id) }
            >Eliminar</button>                  
        </div>
    )
}

Tarea.propTypes = {
    tarea :PropTypes.object.isRequired,
    eliminar : PropTypes.func.isRequired
}
export default Tarea
