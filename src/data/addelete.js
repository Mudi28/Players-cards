
import React, { useState, useCallback } from 'react';
import"../stile.css";
import { people } from './data';

const localStorage = window.localStorage;


const DataInput = () => {
                            const [name, setName] = useState('');
                            const [team, setTeam] = useState('');
                            const [jerseyNumber, setJerseyNumber] = useState('');
    
    const handleSubmit = useCallback((e) => {
                                                e.preventDefault();
                                                people.push({name, team, jerseyNumber});
                                                localStorage.setItem('playerprova', JSON.stringify(people));
                                                setName('');
                                                setTeam('');
                                                setJerseyNumber('');
    }, [name, team, jerseyNumber]);


    const handleDelete = useCallback((index) => {
                                                    people.splice(index, 1);
                                                    localStorage.setItem('playerprova', JSON.stringify(people));
    },[]);

    

    return (
        <div>
        <form className="playeradd" onSubmit={handleSubmit}>
                                                        <input className='add' type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                                        <input className='add' type="text" placeholder="Team" onChange={(e) => setTeam(e.target.value)} />
                                                        <input className='add' type="text" placeholder="Jersey Number" onChange={(e) => setJerseyNumber(e.target.value)} />
                                                        <button className='addp' type="submit">Add Player</button>   
        </form>

        <ul className='persdelete'>
            
        {people.map((person, index) => (
                                        <li key={index}>
                                            {person.name} - {person.team} - {person.jerseyNumber}
                                            <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                                        </li>
            ))}
        </ul>
    </div>
    );

    }


export default DataInput;











    
    
