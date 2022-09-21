import React from 'react'
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home/Home';
import User from './pages/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/user' element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
