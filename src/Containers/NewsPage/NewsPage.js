import React from "react";
import {
    Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

function NewsPage(props) {
    return (
        <div>
            <h2>
                {props.page}
            </h2>
        </div>
    );
}

export default NewsPage;