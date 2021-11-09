import React from "react";
import Home from "./Home"
import imgw from "../../assets/img/java.jpg";
import imgq from "../../assets/img/angular.jpg";
import imgr from "../../assets/img/spring.jpg"
let Homep = () => {
    return (
        <React.Fragment>
            <Home imga={imgw} imgb={imgq} imgr={imgr} />
        </React.Fragment>
    )
}
export default Homep;