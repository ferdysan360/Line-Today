import React, { useEffect } from "react";
import NewsBox from '../../Components/NewsBox/NewsBox';
import NewsList from '../../Components/NewsList/NewsList';
import NewsCarousel from '../../Components/NewsCarousel/NewsCarousel';
import './NewsPage.css';

function NewsPage(props) {
    useEffect(() => {
        document.title = "LINE TODAY";
    }, []);

    return (
        <div className="newspage-container">
            <h2 className="newspage-header">{props.data.name}</h2>
            {props.data.templates.map((item, index) => (
                (item.type != "73") ?
                (
                    <div>
                        {(item.title !== undefined) ? 
                            <div className="item-container">
                                <div className="item-title">{item.title}</div>
                                {
                                (item.type == "6303" || item.type == "59") ?
                                    <NewsList item={item} limit={6} />
                                :
                                    <NewsBox item={item} limit={6} />
                                }
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