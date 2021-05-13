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
            {/* <div className="App-header"> */}
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            {/* <Navbar.Collapse id="navbarScroll"> */}
                <Nav
                    className="navbar"
                    // style={{ maxHeight: '100px' }}
                    // navbarScroll
                >
                {props.data.result.categoryList.map(item => (
                    <Nav.Item className="navbar-item">
                        <Nav.Link as={Link} to={"/" + item.name}>{item.name}</Nav.Link>
                    </Nav.Item>
                    // <Link className="navbar-item" to={"/" + item.name}>{item.name}</Link>
                ))}
                </Nav>
            {/* </Navbar.Collapse> */}
            {/* </div> */}
        </div>
    );
}

export default Navigation;