import React, { useEffect, useState } from 'react'
import Cards from './cards';

const Page = () => {

    const [monsters, setMonsters] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(data => data.json())
            .then(data => setMonsters(data))
    }, [])

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(inputValue.trim().toLowerCase()))

    return (
        <>
            {console.log(inputValue)}
            <div className="inputContainer">
                <h1>Monsters Rolodex</h1>
                <input type="search" onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <div className="card-list">
               <Cards Monsters={filteredMonsters} inputvalue={inputValue}/>
            </div>
        </>
    )
}

export default Page