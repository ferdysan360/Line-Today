import React from "react";
import {
    Link
} from "react-router-dom";
import './NewsCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

function NewsCarousel(props) {
    return (
        // <div className="newscarousel-containers">
        //     <Carousel classname="carousel">
        //         <Carousel.Item interval={3000}>
        //             <img
        //                 className="newscarousel-thumbnail"
        //                 src="https://obs.line-scdn.net/0hIo5R4NumFkAIKwC6upRpFzJ9FS87RwVDbB1HXlhFSHckEwRFYxlQcyl4GCJ3GFEeZhpdJiorDXFwTllCMxhQ"
        //                 alt="First slide"
        //                 fluid
        //             />
        //             <Carousel.Caption>
        //                 <h3>First slide label</h3>
        //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item interval={3000}>
        //             <img
        //                 className="newscarousel-thumbnail"
        //                 src="https://obs.line-scdn.net/0hfpiuoMrSOV9UDC-liiFGCG5aOjBnYCpcMDpoQQRiZ2h4NCtcamwmaXcJb2t6aX4BOj92OnIPIm4saXZeOG0m"
        //                 alt="Second slide"
        //                 fluid
        //             />

        //             <Carousel.Caption>
        //                 <h3>Second slide label</h3>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item interval={3000}>
        //             <img
        //                 className="newscarousel-thumbnail"
        //                 src="https://obs.line-scdn.net/0ha8l5B7A6PhdRTCjtuA9BQGsaPXhiIC0UNXpvCQEiYCB9dCwVaCp0IXIZZCV0fXlJOCl1dHREJSYpKSlAPit0"
        //                 alt="Third slide"
        //                 fluid
        //             />

        //             <Carousel.Caption>
        //                 <h3>Third slide label</h3>
        //                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>
        // </div>
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
        // <div className="newscarousel-containers">
        //     <Carousel>
        //         <div>
        //             <img src="https://obs.line-scdn.net/0hIo5R4NumFkAIKwC6upRpFzJ9FS87RwVDbB1HXlhFSHckEwRFYxlQcyl4GCJ3GFEeZhpdJiorDXFwTllCMxhQ" />
        //             <p className="legend">Legend 1</p>
        //         </div>
        //         <div>
        //             <img src="https://obs.line-scdn.net/0hfpiuoMrSOV9UDC-liiFGCG5aOjBnYCpcMDpoQQRiZ2h4NCtcamwmaXcJb2t6aX4BOj92OnIPIm4saXZeOG0m" />
        //             <p className="legend">Legend 2</p>
        //         </div>
        //         <div>
        //             <img src="https://obs.line-scdn.net/0ha8l5B7A6PhdRTCjtuA9BQGsaPXhiIC0UNXpvCQEiYCB9dCwVaCp0IXIZZCV0fXlJOCl1dHREJSYpKSlAPit0" />
        //             <p className="legend">Legend 3</p>
        //         </div>
        //     </Carousel>
        // </div>
    );
}

export default NewsCarousel;