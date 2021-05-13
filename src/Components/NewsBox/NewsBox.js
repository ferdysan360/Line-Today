import React from "react";
import {
    Link
} from "react-router-dom";
import './NewsBox.css';

function NewsBox(props) {
    return (
        <div>
            {props.item.sections.map(section => (
                <div className="newsbox-container">
                {
                    section.articles.slice(0, 6).map(article => (
                        <Link className="newsbox-a" to={"/article/" + article.url.hash}>
                            <div className="newsbox-items">
                                <img className="newsbox-thumbnail" src={"https://obs.line-scdn.net/" + article.thumbnail.hash} width="340" height="191.25"></img>
                                <div className="newsbox-title">{article.title}</div>
                                <div className="newsbox-publisher">{article.publisher}</div>
                            </div>
                        </Link>
                    ))
                }
                </div>
            ))}
        </div>
    );
}

export default NewsBox;