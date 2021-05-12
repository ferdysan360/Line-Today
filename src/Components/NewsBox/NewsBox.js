import React from "react";
import './NewsBox.css';

function NewsBox(props) {
    return (
        <div>
            {props.item.sections.map(section => (
                <div className="newsbox-container">
                {
                    section.articles.slice(0, 6).map(article => (
                        <a className="newsbox-a" href={article.url.url}>
                            <div className="newsbox-items">
                                <img className="newsbox-thumbnail" src={"https://obs.line-scdn.net/" + article.thumbnail.hash} width="340" height="191.25"></img>
                                <div className="newsbox-title">{article.title}</div>
                                <div className="newsbox-publisher">{article.publisher}</div>
                            </div>
                        </a>
                    ))
                }
                </div>
            ))}
        </div>
    );
}

export default NewsBox;