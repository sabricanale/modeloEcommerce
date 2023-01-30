import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
    <div className="container">
        <nav className="fw-bold" >
            <div className="d-flex navbar navbar-expand-lg "> 
                <div className="flex-grow-1">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                                </button>
                    <a className="navbar-brand" href="#"><img src={"./Images/Logo2.png"} className="posicion" alt={"Cirenne tienda"} width={"130"} height={"124"}/></a> 
                </div>

                <div className="p-2 d-flex justify-content-end">
                    <div className=" collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Tienda</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/gift-cards">Gift cards</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="/como-comprar">Cómo comprar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href="/contacto">Contacto</a>
                                    </li>               
                                </ul>  
                            </div>        
                        </div>
                    <div className="p-2 d-flex align-items-center">
                        <CartWidget/> 
                    </div>
                </div>
        </nav>
    </div>
    )
}

export default NavBar;