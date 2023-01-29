import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Layout from './pages/Layout/Layout';
import FicheLogement from './pages/FicheLogement';
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
//document.getElementById('root')
)
