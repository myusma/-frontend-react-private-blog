import React, {useState} from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Blogposts from './pages/blogposts/Blogposts';
import BlogId from './pages/BlogId/BlogId';
import Navigation from './components/navigation/Navigation'
import NotFound from "./pages/NotFound/NotFound";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);



    return (
        <>

            <Navigation isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>

            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login isAuthenticated={isAuthenticated}
                                                     toggleIsAuthenticated={toggleIsAuthenticated}/>}/>

                <Route path="/blogposts" element={isAuthenticated ? <Blogposts/> : <Navigate to='/login'/>}/>
                <Route path="/blogposts/:id" element={isAuthenticated ? <BlogId/> : <Navigate to='/login'/>}/>
                <Route path="*" element={<NotFound/>}/>


            </Routes>
        </>
    );
}

export default App;
