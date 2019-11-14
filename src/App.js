import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/Login";
//import './App.css';

class App extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/home" name="Home" component={Home} />
                    <Route path="/" name="Login Page" component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default App;