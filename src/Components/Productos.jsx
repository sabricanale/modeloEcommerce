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
                        <div className="carousel-caption d-none d-md-block mb-5 ">
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

            <main>
        
                
                <div className="container__box">
                    <div className="box">
                    <i class="lni lni-amazon"></i>
                        <h5>Amazon</h5>
                        <h4>Amazon</h4>
                    </div>
                    <div className="box">
                        <i class="lni lni-spotify"></i>
                        <h5>Spotify</h5>
                        <h4>Spotify</h4>
                    </div>
                    <div className="box">
                        <i class="lni lni-play-store-alt"></i>
                        <h5>Play Store</h5>
                        <h4>Play Store</h4>
                    </div>
                    <div className="box">
                        <i class="lni lni-behance-original"></i>
                        <h5>Behance</h5>
                        <h4>Behance</h4>
                    </div>
                    <div className="box">
                        <i class="lni lni-chrome"></i>
                        <h5>Chrome</h5>
                        <h4>Chrome</h4>
                    </div>
                    <div className="box">
                        <i class="lni lni-css3"></i>
                        <h5>Css3</h5>
                        <h4>Css3</h4>
                    </div>
                    <div className="box">
                        <i class="lni lni-html5"></i>
                        <h5>Html5</h5>
                        <h4>Html5</h4>
                    </div>
                    <div className="box">
                        <i class="lni lni-github-original"></i>
                        <h5>Github</h5>
                        <h4>Github</h4>
                    </div>
                    <div className="box">
                        <i class="lni lni-paypal-original"></i>
                        <h5>Paypal</h5>
                        <h4>Paypal</h4>
                    </div>
                    <div className="box">
                        <i class="lni lni-paypal-original"></i>
                        <h5>Paypal</h5>
                        <h4>Paypal</h4>
                    </div>
                </div>
            </main>
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