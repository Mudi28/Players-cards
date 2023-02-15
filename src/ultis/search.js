import { useState } from 'react'
import '../stile.css';
import {people} from '../data/data'
import {arraySearch} from './arraysearch'


function Search (){

  
    const [population, setPopulation] = useState(people)

    const [count, setCount] = useState(people.length)

    const [filteredPopulation, setFilteredPopulation] = useState(people)

    const [searchValue, setSearchValue] = useState("");

    const [dropdownOpen, setDropdownOpen] = useState(false);


    const handleClick = (person) => {
        setSearchValue(person.name);
        setDropdownOpen(false);
      }

    const handleOnChange =  (e) => {

        setSearchValue(e.target.value);

        let value = e.target.value;

        if (value.length > 2) {
                                let list = filteredPopulation.filter(person => person.name.toLowerCase().includes(value.toLowerCase()));

            let search = arraySearch(population, value, person => person.name.includes(value));
                                
                                setPopulation(search)
                                setCount(search.length)
                                setFilteredPopulation(list)
        } else {
                                setFilteredPopulation(population)
                                setPopulation(people)
                                setCount(people.length)
          
        }
        
      }

return(

    <div>

        <h2 className='pcount'>Players: {count}</h2>
        
        <input className='search'  type="text"  placeholder='Search Name/Team' onChange={handleOnChange} 
        onClick={() => setDropdownOpen(!dropdownOpen)} value={searchValue}/>
       
          {dropdownOpen && (
            
          <div className='lista'>

                {filteredPopulation.map((person, index) => {
                return <p className='lista1' key={index} onClick={() => handleClick(person)}>{person.name}</p>
                })}               

          </div>   

)}

</div>

)
    }    




export {Search}