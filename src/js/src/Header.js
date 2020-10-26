import React,{useState,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
const  Header=(props)=>
{


const goHome=(e)=>{
    e.preventDefault();
    props.history.push('/')
}
    return (
        <div className="navbar navbar-inverse">
           <div className="appname" onClick={goHome}>Cinibuzz</div>
        </div>
    );
}

export default withRouter(Header);