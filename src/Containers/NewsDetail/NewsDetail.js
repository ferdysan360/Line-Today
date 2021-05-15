import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './NewsDetail.css';
import axios from "axios";
import publisherIcon from '../../Assets/publisherIcon.png';
import ReactHtmlParser from 'react-html-parser';
import bookmarkPlus from '../../Assets/bookmark-plus.png'
import bookmarkChecked from '../../Assets/bookmark-check-fill.png';

function NewsDetail() {
    function initialState() {
        var json_sections = {};
        json_sections['sections'] = [];
        var json_articles = {};
        json_articles['articles'] = [];

        json_sections.sections.push(json_articles);

        return json_sections;
    }
    
    const [data, setData] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [bookmarks, setBookmarks] = useState(initialState());
    const [value, setValue] = useState(0);
    let { articleHash } = useParams();


    useEffect(() => {
        const data = window.localStorage.getItem('bookmarks');

        if (data) {
            setBookmarks(JSON.parse(data));
        }

    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const result = await axios(
                'https://today.line.me/api/v6/pages/id/articles/setting?hash=' + articleHash,
            );

            setData(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, [articleHash]);

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
        <div className="newsdetail-container">
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <div>
                    <div className="newsdetail-title">
                        {data.data.title}
                    </div>
                    <div class="newsdetail-publisher-bookmark">
                        <div class="newsdetail-publisherInfo">
                            {
                                data.data.publisherIcon ?
                                (
                                    <img className="newsdetail-publisherIcon" src={"https://obs.line-scdn.net/" + data.data.publisherIcon.hash} width="42" height="42" />
                                ) :
                                (
                                    <img className="newsdetail-publisherIcon" src={publisherIcon} width="42" height="42" />
                                )
                            }
                            <div>
                                <div className="newsdetail-publisher">
                                    {data.data.publisher}
                                </div>
                                <div className="newsdetail-publishTimeAuthor">
                                    Dipublikasikan {data.data.publishTime} • {data.data.author}
                                </div>
                            </div>
                        </div>
                        <div>
                            {findArticleId(data.data) ?
                                <img alt={value} className="bookmark" src={bookmarkChecked} onClick={() => deleteBookmark(data.data)} />
                                :
                                <img alt={value} className="bookmark" src={bookmarkPlus} onClick={() => addBookmark(data.data)} />
                            }
                        </div>
                    </div>
                    {/* <div dangerouslySetInnerHTML={{ __html: data.data.content }} /> */}
                    <div>{ReactHtmlParser(data.data.content)}</div>
                </div>
            )}
        </div>
    );
}

export default NewsDetail;