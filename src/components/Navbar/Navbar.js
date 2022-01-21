import React from "react";
import logo from "./logo.png";
import "./navbar.scss";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <nav className="navbar">
            <img className = "logo" src={logo} alt="city tours company" />
            <ul className="nav-links">
                <li>
                <Link className="nav-link" to="/home">home</Link>
                </li>
                <li>
                <Link className="nav-link" to="/about">about</Link>
                </li>
                <li>
                <Link className="nav-link" to="/TourList">tours</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    );
}