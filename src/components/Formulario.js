import React, {useState} from 'react'
import {Error} from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


export const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    const agregarGasto = e => {
        e.preventDefault();
        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        //construir gasto
        guardarError(false);
        //pasar gasto al componente ppal
        const gasto = {
            nombre,
            cantidad,
            id : shortid.generate()
        }
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //resetear form
        guardarNombre('');
        guardarCantidad(0);
        
    }
    return (
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agraga tus gastos aquí</h2>
            { error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto." /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="ej: Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar gasto"
                />
        </form>
    )
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}