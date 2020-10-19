import React, { useState } from 'react';
import Error from "./Error";
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {    

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    //Funcion agregar gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if (cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        //Construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasar el gasto a componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //resetear el form
        guardarNombre('');
        guardarCantidad(0);

    }



    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Gastos</h2>

            { error ? <Error mensaje="Campos requerido"/> : null }

            <div className="campo">
                <label>Item</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Verdulería"
                    value={nombre}
                    onChange={e => guardarNombre( e.target.value )}
                />
            </div>

            <div className="campo">
                <label>Precio</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 100"
                    value={cantidad}
                    onChange={e => guardarCantidad( parseInt( e.target.value, 10 ) )}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            
            />
        </form>
     );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;
