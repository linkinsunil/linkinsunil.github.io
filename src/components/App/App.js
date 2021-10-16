import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './App.css'; 


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/contact" component={Contact} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
