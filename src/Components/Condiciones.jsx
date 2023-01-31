import React from "react";

const Condiciones = () => {
    return(
        <div className="container">
<div className="row m-3 p-3">
            <div className="col-md-4">
                <div className="text-center">
                    <img src={"./Images/Envios.png"} alt={"Envios"} width={180} />
                    <h5 className="fw-bold">Envíos a todo el país</h5>
                </div>
                
            </div>
            <div className="col-md-4">
            <div className="text-center">
                    <img className="p-2 mt-2" src={"./Images/Descuentos.png"} alt={"Descuentos"} width={150} />
                    <h5 className="fw-bold p-3">Descuentos con transferencia</h5>
                </div>
            </div>
            <div className="col-md-4">
            <div className="text-center">
                    <img src={"./Images/Tarjetas.png"} alt={"Medios de pago"} width={180} />
                    <h5 className="fw-bold">Todos los medios de pago</h5>
                </div>
                </div>
        </div>
        </div>
        
    )
}

export default Condiciones