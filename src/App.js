import React from "react";
import Carrousel from "./Components/Carrousel";
import Condiciones from "./Components/Condiciones";
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar"
import Productos from "./Components/Productos";

function App() {
  return (
    <div>
      <NavBar/>
      <Carrousel/>
      <Condiciones/>
      <Productos/>
      <ItemListContainer greeting={"Próximamente SALE SUMMER!"} />
      <Footer/>
    </div>
  );
}

export default App;
