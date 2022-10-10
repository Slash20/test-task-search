import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/user/:id' element={<UserProfile />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
