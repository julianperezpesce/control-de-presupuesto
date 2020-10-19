import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0); // state para registrar cantidad y guardarla
    const [error, guardarError] = useState(false); //state para validar error

    //definirPresupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) );
    }

    //Submit
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN( cantidad ) ) {
            guardarError(true);
            return;
        } 
        //Si pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false); 
    }

    return ( 
        <Fragment>
            <h2>Monto disponible</h2>
            { error ? <Error mensaje="El Presupuesto es incorrecto" /> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa el monto"     
                    onChange={definirPresupuesto}           
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    placeholder="Definir monto"                
                />

            </form>

        </Fragment>

     );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;