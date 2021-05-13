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
                    <h2>{data.data.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.data.content }} />
                </div>
            )}
        </div>
    );
}

export default NewsDetail;