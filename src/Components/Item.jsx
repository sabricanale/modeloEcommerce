import React from "react";

const Item = ({item}) => {
    return(
        <div>
            <div className="card border border-0">
                <img src={item.imagen} className=" card-img-top" alt={item.nombre}/>
                <div className="card-body">
                    <p className="card-text text-center">{item.nombre}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;