import './App.css';
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import Products from "./components/Products/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import React from "react";


function App() {

    return (
        <div className="App">
            <Header />
            <div className={"main"}>
            <Navbar />
            <Products />
            </div>
            
            </div>



    ); }

            export default App;
