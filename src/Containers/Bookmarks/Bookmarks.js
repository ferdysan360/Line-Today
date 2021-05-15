import React, { useState, useEffect } from "react";
import NewsBox from '../../Components/NewsBox/NewsBox';
import './Bookmarks.css';

function Bookmarks() {
    function initialState() {
        var json_sections = {};
        json_sections['sections'] = [];
        var json_articles = {};
        json_articles['articles'] = [];

        json_sections.sections.push(json_articles);

        return json_sections;
    }

    const [bookmarks, setBookmarks] = useState(initialState());

    useEffect(() => {
        const data = window.localStorage.getItem('bookmarks');

        if (data) {
            setBookmarks(JSON.parse(data));
        }

    }, []);

    return (
        <div className="bookmarks-container">
            <h2 className="bookmarks-header">My Bookmarks</h2>
            <NewsBox item={bookmarks} limit={bookmarks.sections[0].articles.length}/>
        </div>
    );
}

export default Bookmarks;