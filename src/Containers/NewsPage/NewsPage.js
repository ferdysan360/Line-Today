import React from "react";
import NewsBox from '../../Components/NewsBox/NewsBox';

function NewsPage(props) {
    return (
        <div>
            <h2>
                {props.data.name}
            </h2>
            {props.data.templates.map(item => (
                (item.title !== undefined && item.type != "73") ?
                (
                    <div>
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