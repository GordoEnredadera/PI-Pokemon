import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from './components/LandingPage/landing';
import Home from './components/home/home';
import { PokeDetail } from './components/pok/poke';
import { Create } from './components/creation/create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route path="/pokemons/:id" element={<PokeDetail/>}/>
        <Route path="/pokemons/create" element={<Create/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
