import React, { useState, useEffect } from "react";
import {
    Link
} from "react-router-dom";
import './NewsList.css';
import bookmarkPlus from '../../Assets/bookmark-plus.png'
import bookmarkChecked from '../../Assets/bookmark-check-fill.png';

function NewsList(props) {
    function initialState() {
        var json_sections = {};
        json_sections['sections'] = [];
        var json_articles = {};
        json_articles['articles'] = [];

        json_sections.sections.push(json_articles);

        return json_sections;
    }

    const [bookmarks, setBookmarks] = useState(initialState());
    const [value, setValue] = useState(0);

    useEffect(() => {
        const data = window.localStorage.getItem('bookmarks');

        if (data) {
            setBookmarks(JSON.parse(data));
        }

    }, []);

    function findArticleId(article) {
        var isFound = false;
        for (let i = 0; i < bookmarks.sections[0].articles.length; i++) {
            if (bookmarks.sections[0].articles[i].id == article.id) {
                isFound = true;
                break;
            }
            else {
                continue;
            }
        }

        return isFound;
    }

    function addBookmark(article) {
        var temp_bookmarks = bookmarks;
        var json_bookmark = {};
        json_bookmark['id'] = article.id;
        json_bookmark['title'] = article.title;
        json_bookmark['publisher'] = article.publisher;

        var json_thumbnail = {};
        json_thumbnail['hash'] = article.thumbnail.hash;
        json_bookmark['thumbnail'] = json_thumbnail;

        var json_url = {};
        json_url['hash'] = article.url.hash;
        json_bookmark['url'] = json_url;
        temp_bookmarks.sections[0].articles.push(json_bookmark);

        setValue(value + 1);
        setBookmarks(temp_bookmarks);
        window.localStorage.setItem("bookmarks", JSON.stringify(temp_bookmarks));
    }

    function deleteBookmark(article) {
        var temp_bookmarks = bookmarks;
        for (let i = 0; i < temp_bookmarks.sections[0].articles.length; i++) {
            if (temp_bookmarks.sections[0].articles[i].id == article.id) {
                temp_bookmarks.sections[0].articles.splice(i, 1);
                break;
            }
            else {
                continue;
            }
        }

        setValue(value - 1);
        setBookmarks(temp_bookmarks);
        window.localStorage.setItem("bookmarks", JSON.stringify(temp_bookmarks));
    }

    return (
        <div>
            {props.item.sections.map(section => (
                <div className="newslist-container">
                {
                    section.articles.slice(0, props.limit).map(article => (
                        <div className="newslist-items">
                            <div>
                                <Link className="newslist-a" to={"/article/" + article.url.hash}>
                                    <img className="newslist-thumbnail" src={"https://obs.line-scdn.net/" + article.thumbnail.hash} width="112" height="64"></img>
                                </Link>
                            </div>
                            <div className="newslist-publisher">
                                <Link className="newslist-a" to={"/article/" + article.url.hash}>
                                    <div className="newslist-title">{article.title}</div>
                                </Link>
                                <div>
                                    {article.publisher}
                                </div>
                                <div>
                                    {findArticleId(article) ?
                                        <img alt={value} className="bookmark" src={bookmarkChecked} onClick={() => deleteBookmark(article)} />
                                    :
                                        <img alt={value} className="bookmark" src={bookmarkPlus} onClick={() => addBookmark(article)}/>
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            ))}
        </div>
    );
}

export default NewsList;