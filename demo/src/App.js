import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
import NoPage from './NoPage';
import NewIT from './NewIT';
import Digital from './Digital';

function App (){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='about/newIt' element={<NewIT/>}/>
                        <Route path='about/digital' element={<Digital/>}/>
                        <Route path='contact' element={<Contact/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>
                        
                </Routes>
            </Router>
            {/* <ControlledForm></ControlledForm> */}
        </div>
    );
}

export default App;