import React from "react";

const Productos = () => {
    return(
        <div className="container p-3">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="d-flex justify-content-center carousel-item active">
                        <img src="./Images/Vestidos.png" alt="Vestidos Cirenne" width={500}/>
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <a href="/"><button className="m-2 p-2 boton">COMPRÁ ACÁ</button></a> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center carousel-item active">
                        <img src="./Images/Conjuntos.png" alt="Conjuntos Cirenne" width={500}/>
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <a href="/"><button className="m-2 p-2 boton">COMPRÁ ACÁ</button></a> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center carousel-item active">
                        <img src="./Images/Remeras.png" alt="Remeras Cirenne" width={500}/>
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <a href="/"><button className="m-2 p-2 boton">COMPRÁ ACÁ</button></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


)














{/*
        <div className="container">
            

            <div className="row text-center">
                <div className="col-md-4">
                    <img src="./Images/Vestidos.png" alt="Vestidos" width={500}/>
                </div>
                <div className="col-md-4 text-center">
                    <img src="./Images/Short.png" alt="Shorts" width={500}/>
                </div>
                <div className="col-md-4">
                    <img src="./Images/Remeras.jpg" alt="Remeras" width={500}/>
                </div>
            </div>
        </div>
        
    )
*/}
}

export default Productos