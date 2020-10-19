import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuestos = ({ presupuesto, restante }) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div> 
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Resto: ${restante}
            </div>           
        </Fragment>
     );
}

ControlPresupuestos.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
 }
 
 
export default ControlPresupuestos;
