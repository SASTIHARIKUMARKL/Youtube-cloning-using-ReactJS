import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const Header =()=>{
    return(
        <header className="header">
            <div className="logo">
            <IoIosMenu className="icons"/>
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