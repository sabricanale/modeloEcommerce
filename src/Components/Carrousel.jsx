import React from "react";

const Carrousel = () => {
    return(
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Images/Banner.png" className="d-block w-100" alt="Cirenne clothing" />
                        <div className="carousel-caption d-none d-md-block m-5">
                            <a href="/"><button className="m-5 p-2">SHOP NOW</button></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrousel;