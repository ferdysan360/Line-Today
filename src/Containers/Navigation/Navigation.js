import React from "react";
import {
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navigation.js';

function Navigation(props) {
    return (
        <div>
            {/* <div className="App-header"> */}
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
            {/* <Navbar.Collapse id="navbarScroll"> */}
                <Nav 
                    // className="mr-auto my-2 my-lg-0"
                    // style={{ maxHeight: '100px' }}
                    // navbarScroll
                >
                {props.data.result.categoryList.map(item => (
                    <Nav.Item>
                        <Nav.Link as={Link} to={"/" + item.name}>{item.name}</Nav.Link>
                    </Nav.Item>
                ))}
                </Nav>
            {/* </Navbar.Collapse> */}
            {/* </div> */}
        </div>
    );
}

export default Navigation;