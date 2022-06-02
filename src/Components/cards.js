import React from 'react'

const Cards = ({ Monsters, inputvalue }) => {
    return (

        <>

            {
                Monsters.map((curElem) => {
                    const string = curElem.name;
                    const index = string.toLowerCase().trim().includes(inputvalue.toLowerCase().trim()) ?
                        string.trim().toLowerCase().indexOf(inputvalue.toLowerCase().trim()) : -1;
                    const Fstr = string.substring(0, index);
                    const Mstr = string.substring(index , index + inputvalue.length);
                    const Lstr = string.substring(Fstr.length + inputvalue.length, string.length)

                    return (
                        <div className="card-container" key={curElem.id}>
                            <img src={`https://robohash.org/${curElem.ids > 9 ? curElem.ids : curElem.id}?set=set2&size=180x180`} alt={string} title={`${string}'s image`} />
                            <h1>{Fstr}<span className="fstr">{Mstr}</span>{Lstr}</h1>
                            <p>{curElem.email}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Cards