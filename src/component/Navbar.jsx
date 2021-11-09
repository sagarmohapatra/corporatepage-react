import React from "react";
import { NavLink } from "react-router-dom"
let Navbar = ({ img1 }) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-warning navbar-expand-sm">
                <div className="container justify-content-between ">
                    <NavLink to="/" className="navbar-brand text-white">
                        <img src={img1} width="60" height="30" />
                        Classplus Training & Developent Center</NavLink>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#uiNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end  " id="uiNavbar">
                        <ul className="navbar-nav justify-content-end ">
                            <li className="nav-item px-2">
                                <NavLink to="/" class="nav-link">
                                    <i className="fa fa-home"></i> Home</NavLink>
                            </li>
                            <li className="nav-item active px-2">
                                <NavLink to="/aboutus" className="nav-link">
                                    <i className="fa fa-id-badge"></i> About Us</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink to="/courses" className="nav-link">
                                    <i className="fa fa-book"></i> Courses</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink to="/contactus" className="nav-link">
                                    <i className="fa fa-envelope"></i> Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;