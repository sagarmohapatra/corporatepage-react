import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Homep from "./component/Home/Homep";
import CoursesP from "./component/Courses/CoursesP"
import ContactP from "./component/contactus/ContactP";
import Inav from "./component/Inav";
import AboutPc from './component/About/AboutPc';



let App = () => {
  return (
    <React.Fragment>
      <Inav />
      <Switch>
        <Route exact path="/" component={Homep} />
        <Route path="/courses" component={CoursesP} />
        <Route path="/contactus" component={ContactP} />
        <Route path="/aboutus" component={AboutPc} />
        <Route component={Error} />
      </Switch>

    </React.Fragment>
  )
}

export default App;
