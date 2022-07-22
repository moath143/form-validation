import React from 'react'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import './style.css'
import { SnackbarProvider } from 'notistack';

const App = () => {
    return(
        <SnackbarProvider maxSnack={3}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </SnackbarProvider>
    )
}

export default App