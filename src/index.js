
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Layout from './pages/Layout/Layout';
import FicheLogement from './pages/FicheLogement';
import Error from './pages/Error'

 /*
async function getLogements() {
  fetch("logements.json", { mode: "no-cors" })
      .then((response) => response.json())
      .then((data) => displayData(data.logements));
}

async function displayData(logements) {
  const logementsSection = document.querySelector(".photographer_section");

  logements.forEach((photographer) => {
          const logementsModel = logementsFactory(logements);
          const userCardDOM = logementsModel.getUserCardDOM();
          logementsSection.appendChild(userCardDOM);
      });
}*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<APropos />} />
          <Route path="logement/:id" element={<FicheLogement/>} />
          <Route path="notfound" element={<Error/>} />
          <Route path="*" element={<Error />} />
        
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
document.getElementById('root')
)


/*
async function init() {
  // Récupère les datas des photographes
  await getLogements();
  //   displayData(photographers);
}



init();*/