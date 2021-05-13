import React from "react";
import {
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';

function Navigation(props) {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-item">
                    {props.data.result.categoryList.map(item => (
                        <Link className="navbar-link" to={"/" + item.name}>{item.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navigation;