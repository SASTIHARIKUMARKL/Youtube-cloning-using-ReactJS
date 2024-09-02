import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header =()=>{
    return(
        <header className="header">
            <div className="logo">
                <FaYoutube className="youtube-icon" />
                <h3>Youtube</h3>
            </div>
            <div className="search">
                <input type="text" placeholder="Search"></input>
                <button><FaSearch className="search-but"/></button>
            </div>
        </header>
    );
}

export default Header;