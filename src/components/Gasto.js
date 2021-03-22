import React from 'react'
import PropTypes from 'prop-types';

export const Gasto = ({gasto}) => {
    return (
        <li key={gasto.key} className="gastos">
            <p>
                {gasto.nombre}
                <span className="gasto">$ {gasto.cantidad}</span>
            </p>
        </li>
    )
}

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}