import React from "react";
import img1 from "../../assets/img/download.png";
import img2 from "../../assets/img/k1.jpeg"
import img3 from "../../assets/img/v3.jpg"
import img4 from "../../assets/img/r2.jpg"
import AboutUs from "./AboutUs";

let AboutPc = () => {
    return (
        <React.Fragment>
            <AboutUs f={img1} f2={img2} f3={img3} f4={img4} />
        </React.Fragment>
    )
}
export default AboutPc;