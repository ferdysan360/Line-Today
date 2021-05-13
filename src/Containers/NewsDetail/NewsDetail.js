import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import './NewsDetail.css';
import axios from "axios";

function NewsDetail() {
    const [data, setData] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    let { articleHash } = useParams();

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
    }, []);

    return (
        <div className="newsdetail-container">
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <div>
                    <div className="newsdetail-title">
                        {data.data.title}
                    </div>
                    <div class="newsdetail-publisherInfo">
                        <img className="newsdetail-publisherIcon" src={"https://obs.line-scdn.net/" + data.data.publisherIcon.hash} width="42" height="42"/>
                        <div>
                            <div className="newsdetail-publisher">
                                {data.data.publisher}
                            </div>
                            <div className="newsdetail-publishTimeAuthor">
                                Dipublikasikan {data.data.publishTime} • {data.data.author}
                            </div>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data.data.content }} />
                </div>
            )}
        </div>
    );
}

export default NewsDetail;