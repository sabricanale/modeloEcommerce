import React from "react";

const Footer = () => {
    return(
        <footer>
            <div className="row">

            <div className="col">
                    <h4 className="pt-3 mt-3 pb-3 fw-bold text-center">Contactános</h4>
                    <div>
                        <ul className="navbar-nav mb-lg-0 m-3 text-center">
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a href="https://walink.co/af71f2"><img src={"./Images/Whatsapp.svg"} alt={"Whatsapp tienda"} width={25} /></a>
                                    <a href="https://walink.co/af71f2" id="datos"><p>+5493513451127</p></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a href="https://instagram.com/cirenne.clothing/"><img src={"./Images/Instagram.svg"} alt={"Instagram tienda"} width={25} /></a>
                                    <a href="https://instagram.com/cirenne.clothing/" id="datos"><p>@cirenne.clothing</p></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a href="https://walink.co/af71f2"><img src={"./Images/Mail.svg"} alt={"Mail tienda"} width={25} /></a>
                                    <a href="mailto:cirenne.tienda@gmail.com" id="datos"><p>cirenne.tienda@gmail.com</p></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <div className="d-flex justify-content-center">
                        <a href={"/"}><img src={"./Images/LogoSinFondo.png"} alt={"Logo Cirenne"} width={250} /></a>
                    </div>
                </div>

                <div className="col">
                    <h4 className="pt-3 mt-3 pb-3 fw-bold text-center">Categorías</h4>
                    <div>
                        <ul className="navbar-nav mb-lg-0 text-center">
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a className="nav-link" href="/" ><p>Inicio</p></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a className="nav-link" href="/tienda"><p>Productos</p></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex justify-content-center">
                                    <a className="nav-link" href="mailto:cirenne.tienda@gmail.com"><p>Contacto</p></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="infoFinal fw-bold" >
                <p >Sitio desarrollado por <a className="fw-bold infoFinal2" href="https://sabricanale.github.io/portfolio/">Sabrina Canale</a></p>
            </div>
            
        </footer>
    )
}

export default Footer;