import './App.css';
// import Query from './components/Query';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2'
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/looseleaf-assignment' element={<Page1/>}/>
        <Route path='/contact' element={<Page2/>}/>
      </Routes>
    </div>
  );
}

export default App;
