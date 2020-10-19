import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';



function App() {

  //Definir state
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ creargasto, guardarCrearGasto ] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    if (creargasto) {

      //agrega el nuevo presupesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //Resta del presupuesto actual
      const presupestoRestante = restante - gasto.cantidad;
      guardarRestante(presupestoRestante);
      
      //Resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

 

  return (
    <Fragment>      
      <div className="container">
        <header>
          <h1>Control de Presupuesto</h1>
          <div className="contenido-principal contenido">
            { mostrarpregunta ? (
                <Pregunta
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                />
              ) : (
                    <div className="row">

                      <div className="one-half column">
                        <Formulario
                          guardarGasto={guardarGasto}
                          guardarCrearGasto={guardarCrearGasto}
                        />
                      </div>

                      <div className="one-half column">   
                        <Listado
                          gastos={gastos}
                        />   

                        <ControlPresupuesto 
                          presupuesto={presupuesto}
                          restante={restante}

                        />

                      </div>
                    </div>
              )            
            } 

          </div>
        </header>     
      </div>
    </Fragment>
  )
}

export default App
