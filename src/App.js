import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home'
import About from './About'
import ClassDemo from './ClassDemo'

// function App() {
//   return (
//     <h1>Hello world1111</h1>
//   )
// }

const App=() => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/class-demo">ClassDemo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/class-demo" element={<ClassDemo name='guandashuai'/>}/>
        </Routes>
      </div>
    </Router>
  )
};



export default App;
