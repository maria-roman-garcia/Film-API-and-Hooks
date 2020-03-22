import React from 'react';
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom';
import Movies from './Movies';
import About from './About'

function App() {
  return (
      <div className="App">
        {/* Menu */}
        <div className="container-fluid menu">
          < div className = "row justifyCenter" >
            < div className = "col-12 col-md-4 menu_Link justifyCenter" >
              <Link to="/movies">PELICULAS</Link>
            </div>
            < div className = "col-12 col-md-4 menu_Link justifyCenter" >
              <Link to="/about">CURIOSIDADES</Link>
            </div>
          </div>
        </div>
        {/* Establecemos las rutas y los componentes que queremos renderizar */}
        <div>
          <Route exact path="/movies" component={Movies} />
          <Route path="/about" component={About} />
        </div>
      </div>
  );
}

export default App;
