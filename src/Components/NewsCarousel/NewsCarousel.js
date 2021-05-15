import React from "react";
import {
    Link
} from "react-router-dom";
import './NewsCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

function NewsCarousel(props) {
    return (
        <div className="newscarousel-containers">
            <Carousel className="carousel-styles" showThumbs={false} infiniteLoop={true} autoPlay={true}>
                {props.item.sections[0].articles.slice(0, 6).map(article => (
                    <div className="newscarousel-containers">
                        <Link className="newscarousel-a" to={"/article/" + article.url.hash}>
                            <img
                                className="newscarousel-thumbnail"
                                src={"https://obs.line-scdn.net/" + article.thumbnail.hash}
                                fluid
                            />
                            <p className="legend">{article.title}</p>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default NewsCarousel;