
/*import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/APropos">
          <APropos />
        </Route>
        <Route>
          <Error />
        </Route>
    </Router>
  </React.StrictMode>,
   document.getElementById('root')


               <Route path="/" element={<Home />}></Route>
            <Route path="/apropos" element={<APropos />}></Route>
)*/
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Layout from './pages/Layout/Layout';
import FicheLogement from './pages/FicheLogement';
import Error from './pages/Error'
 
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