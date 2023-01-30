import React from "react";
import Carrousel from "./Components/Carrousel";
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="container-fluid">
      <NavBar/>
      <Carrousel/>
      <ItemListContainer greeting={"No se encontraron productos!"} />
      <Footer/>
    </div>
  );
}

export default App;
