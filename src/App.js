import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Compra from './Components/Compra/Compra';
import Aluguel from './Components/Aluguel/Aluguel';
import Ajuda from './Components/Ajuda/Ajuda';
import Login from './Components/Login/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Compra" element={<Compra/>} />
                    <Route path="/Aluguel" element={<Aluguel/>} />
                    <Route path="/Ajuda" element={<Ajuda/>} />
                    <Route path="/Login" element={<Login/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;
