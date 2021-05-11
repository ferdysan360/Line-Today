import React from "react";

function NewsBox(props) {
    return (
        <div>
            <h3>{props.item.title}</h3>
            {props.item.sections.map(section => (
                section.articles.map(article => (
                    <div>{article.title}</div>
                ))
            ))}
        </div>
    );
}

export default NewsBox;