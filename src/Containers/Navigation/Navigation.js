import React from "react";
import {
    Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

function Navigation(props) {
    return (
        <div>
            {/* <div className="App-header"> */}
                <Nav>
                {props.data.result.categoryList.map(item => (
                    <Nav.Item>
                        <Nav.Link as={Link} to={"/" + item.name}>{item.name}</Nav.Link>
                    </Nav.Item>
                ))}
                </Nav>
            {/* </div> */}
        </div>
    );
}

export default Navigation;