import axios from "axios";
import React, {useState} from "react";

export default function SearchPage(props){
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const onChangeTextHandler = (event) => {
        setSearchText(event.target.value)
    }

    const onClickSearchHandler = () => {
        axios.post('http://content.guardianapis.com/search?api-key=test&amp;show-')
        .then((response) => {
            let resResult = JSON.stringify(response.results)
            setSearchResult(resResult);
            console.log(searchResult);
        })
        .catch((e) => {
            console.log(e)
        })
        
    }

    const onClickItem = (data) => {
        props.history.push('/articles', {state: data})
    }

    let displayResult = searchResult.map((item) => {
       return ( 
       <div>
            <li onClick={() => onClickItem(item)}>
                <p> {item.heading} </p>
                <img src={item.heading} style={{minWidth:150, minHeight: 150}}/>
            </li>
        </div>
        )
    })

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:300}}>
            <div style={{display:'flex', justifyContent:'center', paddingTop:50, paddingBottom:50}}>
                <text>News Lister</text>
            </div>
            <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
                <text style={{padding:5}}>Enter Search Text</text>
                <input style={{padding:5}} type="text" value={searchText} placeholder="Search text" onChange={(e) => onChangeTextHandler(e)} />
                <div>
                    <button style={{marginLeft:10, marginRight:10, padding:5}} type="submit" onClick={() => onClickSearchHandler()}>Search</button>
                </div>
            </div>
            {displayResult}
        </div>
    )
}