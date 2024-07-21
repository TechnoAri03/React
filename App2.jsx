import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './login';
import Quiz from './quiz';

function App2() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginForm} />
                <Route path="/quiz" component={Quiz} />
            </Switch>
        </BrowserRouter>
    );
}

export default App2;