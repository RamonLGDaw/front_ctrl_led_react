import React from "react";
import { useState } from "react";

function control_led() {

    const [activado, setActivado] = useState(true)

    const activar = () =>{setActivado(true)} 
    const desactivar = () =>{setActivado(false)} 

    return <div className="container m-auto d-flex justify-content-centeralign-items-center flex-column p-4">
        <div className="container m-auto d-flex justify-content-center">
            <button className="btn-success m-3" onClick={activar}>Activar</button>
            <button className="btn-danger m-3" onClick={desactivar}>Desactivar</button>
        </div>

        <div className="container text-center m-3">
            <h2>Estado del LED: <strong>{activado ? 'Encendido' : 'Apagado'}</strong></h2>
        </div>
    </div>

}

export default control_led