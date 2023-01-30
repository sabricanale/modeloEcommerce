import React from "react";

const Carrousel = () => {
    return(
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Images/Carrousel.jpeg" className="d-block w-100" alt="Cirenne clothing" />
                        <div className="carousel-caption d-none d-md-block">
                            <a href="/"><button>SHOP NOW</button></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrousel;