import React, {Fragment, useState} from 'react'
import { Error } from './Error';
import PropTypes from 'prop-types';

export const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    //Def state 
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    //leer presupuesto
    const handleChange = e =>{
        guardarCantidad( parseInt(e.target.value, 10));
    }

    const agregarPresupuesto = e =>{
        e.preventDefault();
        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }        
        //si pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
        // console.log('HOLA')
        // console.log(typeof guardarRestante)
    }
    //submitPresupuesto

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}
            <form 
                onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}