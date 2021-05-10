import React from "react";
import {
    Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

function Navigation() {
    return (
        <div>
            {/* <div className="App-header"> */}
                <Nav>
                <Nav.Item>
                    <Nav.Link as={Link} to="/top">Top</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/users">Users</Nav.Link>
                </Nav.Item>
                </Nav>
            {/* </div> */}
            {/* <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                </ul>
            </nav> */}
        </div>
    );
}

export default Navigation;