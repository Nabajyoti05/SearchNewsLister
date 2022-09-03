import axios from "axios";
import React, {useEffect, useState} from "react";

export default function ArticlePage(props){
    const [propsData, setPropsData] = useState([]);
    const [resultData, setResultData] = useState([]);

    useEffect(() => {
        let {params} = props.location.state
        if(params){
            setPropsData(params.data)
        }

        axios.get('http://content.guardianapis.com/search?api-key=test&amp;q='+propsData.heading+'&amp;show-')
        .then((res) => {
            setResultData(res.results)
        })
        .catch((e) => {
            console.log(e)
        })
    })

    let displayData = resultData.map((item) => {
        return (
            <div>
                <p>{item.heading}</p>
                <img src={item.thumbnails} />
                <text>{item.article}</text>
            </div>
        )
    })

    return (
        <div>
            {displayData}
        </div>
    )
}