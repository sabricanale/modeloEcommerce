import React from "react";

const ItemListContainer = ({greeting}) =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 py-5 text-center">
                    <div className="alert" role="alert">
                        <h1 className="bw-bold">{greeting}</h1>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;