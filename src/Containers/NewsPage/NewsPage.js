import React from "react";
import NewsBox from '../../Components/NewsBox/NewsBox';
import './NewsPage.css';

function NewsPage(props) {
    return (
        <div className="newspage-container">
            {props.data.templates.map(item => (
                (item.title !== undefined && item.type != "73") ?
                (
                    <div className="item-container">
                        <div className="item-title">{item.title}</div>
                        <NewsBox item={item} />
                    </div>
                ) :
                (
                    <></>
                )
            ))}
        </div>
    );
}

export default NewsPage;