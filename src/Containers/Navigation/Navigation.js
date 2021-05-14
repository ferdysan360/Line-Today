import React, { useState } from "react";
import {
    Link
} from "react-router-dom";
import './Navigation.css';
import ScrollContainer from 'react-indiana-drag-scroll'

function Navigation(props) {
    const [value, setValue] = useState(0);

    return (
        <div>
            <ScrollContainer className="navbar" hideScrollbars="false">
                <div className="navbar-item">
                    {props.data.result.categoryList.map((item, index) => (
                        (value === index) ?
                        <Link className="navbar-link-active" to={"/" + item.name} onClick={() => setValue(index)}>{item.name}</Link>
                        :
                        <Link className="navbar-link" to={"/" + item.name} onClick={() => setValue(index)}>{item.name}</Link>
                    ))}
                </div>
            </ScrollContainer>
        </div>
    );
}

export default Navigation;