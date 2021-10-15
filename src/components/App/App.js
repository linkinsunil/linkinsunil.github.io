import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

const SampleComponent = () => {
    return (
        <div>
            <h4>This is a homepage</h4>
        </div>
    );
}
 

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={SampleComponent} />
                    <Route path="/about" component={SampleComponent} />
                    <Route path="/projects" component={SampleComponent} />
                    <Route path="/skills" component={SampleComponent} />
                    <Route path="/contact" component={SampleComponent} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
