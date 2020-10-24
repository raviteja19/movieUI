import React,{useState,useEffect} from 'react';

function Header()
{
    return (
        <div className="navbar navbar-inverse">
           <div className="applicationname">
                Cinibuzz
           </div>
           <ul className="nav navbar-nav navbar-right">
                <li><a href="#"> Movie</a></li>
                <li><a href="#"> TV Shows</a></li>
                <li><a href="#"> Kids</a></li>
            </ul>
        </div>
    );
}

export default Header;