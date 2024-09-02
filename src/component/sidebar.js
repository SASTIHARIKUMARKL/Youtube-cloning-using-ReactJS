import React from "react";
import { FaHome, FaFire, FaRegListAlt, FaHistory, FaRegClock, FaThumbsUp } from 'react-icons/fa';


const Sidebar =()=>{
    return(
        <aside className="sidebar">
            <ul>
        <li><FaHome className="icon" /></li>
        <li><FaFire className="icon" /></li>
        <li><FaRegListAlt className="icon" /></li>
        <li><FaHistory className="icon" /></li>
        <li><FaRegClock className="icon" /></li>
        <li><FaThumbsUp className="icon" /></li>
      </ul>
        </aside>
    );
}

export default Sidebar;