import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    async function fetchItems(){
        const rawData = await fetch('https://www.dnd5eapi.co/api/equipment-categories/armor')
        const data = await rawData.json()
        console.log(data)
        setItems(data.equipment)
    }

    // async

    return (
        <div>
            <h1>Shop Page</h1>
            {items.map(item => (
                <h3 key={item.index}>
                    <Link to={`/shop/${encodeURIComponent(item.url.slice(1))}`}>{item.name}</Link>
                </h3>
            ))}
        </div>
    );
}

export default Shop;