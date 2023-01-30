import React from "react";

const CartWidget = () => {
    return(
        <div>
            <button type="button" className="btn fondoVerde position-relative" >
                <img src={"./Images/Carrito.svg"} alt={"Carrito de compras"} width={20} />
                {/*<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning letra">0</span>*/}
            </button>
        </div>
    )
}
export default CartWidget