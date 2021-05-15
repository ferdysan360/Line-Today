import React, { useState } from "react";
import {
    Link
} from "react-router-dom";
import './Navigation.css';
import ScrollContainer from 'react-indiana-drag-scroll'

function Navigation(props) {
    // const [value, setValue] = useState(0);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <ScrollContainer className="navbar" hideScrollbars="false">
                <div className="navbar-item">
                    {props.data.result.categoryList.map((item, index) => (
                        <Link key={"navbar" + item.name} className="navbar-link" to={"/" + item.name} onClick={() => scrollToTop()}>{item.name}</Link>
                        // (value === index) ?
                        // <Link className="navbar-link-active" to={"/" + item.name} onClick={() => setValue(index)}>{item.name}</Link>
                        // :
                        // <Link className="navbar-link" to={"/" + item.name} onClick={() => setValue(index)}>{item.name}</Link>
                    ))}
                </div>
            </ScrollContainer>
        </div>
    );
}

export default Navigation;