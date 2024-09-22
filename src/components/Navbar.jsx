import React from "react";
import Searchbar from './Searchbar';
// import Searchbar from "./Searchbar";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-0" style={{ backgroundColor: "#074173" }}>
            <div className="w-100 d-flex justify-content-between px-5" style={{ minHeight: "70px" }}>
                <div className="d-flex justify-content-center align-items-center">
                    <a className="navbar-brand" href="{{ url('beranda') }}">
                        <div className="d-flex align-items-center">Notes App</div>
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <Searchbar />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
