import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import {Home, Employment, Projects, Info} from "./PageComponents";

class Main extends React.Component{
    //
    //Renders the site.
    //
    render() {
        return (
          <BrowserRouter>
              <div>
                  <h1>Bartosz Kosakowski</h1>
                  <ul className="headeritems">
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/employment">Employments</NavLink></li>
                      <li><NavLink to="/projects">Projects</NavLink></li>
                      <li><NavLink to="/info">Info</NavLink></li>
                  </ul>
              </div>
              <div className="content">
                  <Route path="/" exact component={() => <Home/>}></Route>
                  <Route path="/employment" exact component={() => <Employment/>}></Route>
                  <Route path="/projects" exact component={() => <Projects/>}></Route>
                  <Route path="/info" exact component={() =><Info/>}></Route>
              </div>
          </BrowserRouter>
        );
      }
}


export default Main;