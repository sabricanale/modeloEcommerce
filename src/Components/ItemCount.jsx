import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) =>{
    const [counter, setCounter] = useState(0) //4- 2
    const [stock, setStock] = useState(stockItems) //10 -6

    const incrementarStock = () =>{
        if(counter < stock) {
            setCounter(counter + 1)
        }  
    }

    const decrementarStock = () =>{
        if(counter > 0){
            setCounter(counter - 1)
        }
        
    }

    const onAdd = () =>{
        if(counter <= stock){
            console.log("Agregaste " + counter + " productos al carrito!")
            setStock(stock - counter) //6 -4
            setCounter(0) //4 - 2
        }
       
    }

    return(
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-primary">{counter}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
             <div className="row">
                <div className="col-md-2">
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
        
    )
}

export default ItemCount