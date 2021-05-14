import React from "react";
import NewsBox from '../../Components/NewsBox/NewsBox';
import NewsCarousel from '../../Components/NewsCarousel/NewsCarousel';
import './NewsPage.css';

function NewsPage(props) {
    return (
        <div className="newspage-container">
            {/* <NewsCarousel /> */}
            {props.data.templates.map((item, index) => (
                (item.type != "73") ?
                (
                    <div>
                        {(item.title !== undefined) ? 
                            <div className="item-container">
                                <div className="item-title">{item.title}</div>
                                <NewsBox item={item} />
                            </div>
                        : (
                            <div>
                                {(item.type == "50" || item.type == "59") ? 
                                    <div className="item-container">
                                        <NewsCarousel item={item}/>
                                    </div>
                                : (
                                    <></>
                                )}
                            </div>
                        )
                        }
                    </div>
                ) : (
                    <></>
                )
            ))}
        </div>
    );
}

export default NewsPage;