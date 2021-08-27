import React, {useState, useEffect} from 'react';
import './App.css';
// import {Link} from 'react-router-dom';

function ItemDetail({ match }) { // match can be used to take out the url
    console.log(match)
    useEffect(() => {
        fetchItem()
    }, [])

    const [item, setItem] = useState({})

    async function fetchItem(){
        const rawData = await fetch(`https://www.dnd5eapi.co/api/${decodeURIComponent(match.params.url.slice(6))}`)
        const data = await rawData.json()
        console.log(data)
        setItem(data)
    }

    // async

    return (
        <div>
            <h1>{item.name}</h1>
            <h4>{item.armor_category}</h4>
            <h4>{item.weight}</h4>
        </div>
    );
}

export default ItemDetail;