/* eslint-disable react/style-prop-object */
import { useState } from 'react'
import './stile.css';
import {people} from './data/data'
import {arraySearch} from './ultis/arraysearch'
import DataInput from './data/addelete';
import {Modale} from './data/modale';
import {Link, useNavigate} from "react-router-dom"
import calcio from "./prova99.jpeg";


function App() {
  
  
  const [population, setPopulation] = useState(people)
  const [count, setCount] = useState(people.length)

  const [filteredPopulation, setFilteredPopulation] = useState(people)

  const [searchValue, setSearchValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

          const [selectedPerson1, setSelectedPerson1] = useState("");
          const [selectedPerson2, setSelectedPerson2] = useState("");
          const [selectedOption, setSelectedOption] = useState("option");
          const navigate = useNavigate();

          
          
        
          const handleSubmit = (e) => {
            e.preventDefault();
            if (selectedOption !== "" && selectedPerson1 !== "" && selectedPerson2 !== "") {
              navigate("/grafici", {
                state:{
                selectedOption,
                selectedPeople: [selectedPerson1, selectedPerson2]
                
                  
                }
                  
            
            
            
            
            
              });
              
              
              
                
             
            }
          };
          
          
          
        
          
          
          
          
        
          
          
          
          
          
          

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

  return (

<div className="App"
style={{
  backgroundImage: `url(${calcio})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  
}}
>

 
 
 
 
 
    
<div className="container">
    <div className="row">
      <div className="col col-sm-3 col-md-4 col-lg-4">
        <div className="col-md-3 col-xs-6">
              <div className='all'>
                
    
                                    <h1>Test Players Search</h1>
                                    <h2 className='pcount'>Players: {count}</h2>

                    <div>

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
<div>
         <Modale />
         </div>

                    <div className='add'>
                      
                                          
                                          <DataInput />
                    </div>
                   
                   
                   
                    <form onSubmit={handleSubmit} className="form-group">
 
  <select
  
    id="selectedPerson1"
    value={selectedPerson1}
    onChange={(e) => setSelectedPerson1(e.target.value)}
    className="select1"
  >
    <option value="" disabled>Select A Player</option>
    {population.map(person => (
      <option key={person.name} value={person.name}>
        {person.name}
      </option>
    ))}
  </select>

  
  <select
    id="selectedPerson2"
    value={selectedPerson2}
    onChange={(e) => setSelectedPerson2(e.target.value)}
    className="select1"
  >
    <option value="" disabled>Select A Player</option>
    {population.map(person => (
      <option key={person.name} value={person.name}>
        {person.name}
      </option>
    ))}
  </select>

  <select
    id="selectedOption"
    value={selectedOption}
    onChange={(e) => setSelectedOption(e.target.value)}
    className="select1"
  >
    <option value="option" disabled>Select A Parameter</option>
    <option value="goals">Goals</option>
    <option value="assists">Assists</option>
    <option value="minutesPlayed">MinutesPlayed</option>
    <option value="mondiali">World Cup</option>
    <option value="pallone d'oro">Golden Boots</option>
    <option value="champions league">Champions League:</option>
    <option value="campionati vinti">Championships Won</option>
    <option value="fifa puskas">FIFA Puskas</option>
    <option value="golden boots">GamesPlayed</option>
    <option value="the best fifa men's player">The Best FIFA Men’s Player</option>
  </select>

  <button type="submit" className="button1">GO</button>
</form>

           
                    
                    
                    
                    
                    <Link to={`/Grafici`} style={{textDecoration:"none"}}>
                      
                      <h2 className='lgraf'>Grafici a confronto</h2></Link>
                    <div  className="container">
            
                      {population.map(person => (
                  
                          <div className="card" key={person.name}>
          
                                    <h2 className='namep'>{person.name}</h2>

                                        <div className='cards'>

                                             <div className='img'>

                                                     <img className='immagine' src={person.img} alt='giocatori'></img>

                                              </div>



                                         
                                            <iframe 
                                                    className="video"
                                                    style={{frameBorder:"0"}}
                                                    height="315" 
                                                    src={person.video}
                                                    title="YouTube video player" allow="accelerometer;
                                                     autoplay; 
                                                     clipboard-write; 
                                                     encrypted-media; 
                                                     gyroscope; picture-in-picture; 
                                                     web-share" allowFullScreen>
                                                    
                                            </iframe>


                                            <div>

                                                <h2 className='card-title'> {person.position}</h2>

                                                  <div className='card-content'>

                                                                                <p className='pcontent'>Team: {person.team}</p>
                                                                                <p className='pcontent'>Number: {person.jerseyNumber}</p>
                                                                                <p className='pcontent'>Position: {person.position}</p>                
                                                                                <p className='pcontent'>Goals: {person.goals}</p>
                                                                                <p className='pcontent'>assists: {person.assists}</p>
                                                                                <p className='pcontent'>MinutesPlayed: {person.minutesPlayed}</p>
                                                                                <p className='pcontent'>GamesPlayed: {person.gamesPlayed}</p>
                                                                                <p className='pcontent'>Substitutions: {person.substitutions}</p>

                                                  </div>

                                                  <div className="table-responsive">
                                                      
                                                                                    <table className="table">
                                                                                      <tbody>
                                                                                        <tr>
                                                                                        <th>World Cup:[{person['mondiali']}] </th>
                                                                                        <th>Ballon D'Or:[{person['pallonedoro']}] </th>
                                                                                          <th>FIFA WP of the Year:[{person['thebestfifamensplayer']}] </th>
                                                                                          <th>World Championships: [{person.mondiali}]</th>
                                                                                          <th>Champions League: [{person['champions-eague']}]</th>
                                                                                          <th>Championships Won: [{person['campionativinti']}]</th>
                                                                                          <th>FIFA Puskas: [{person['fifapuskas']}]</th>
                                                                                          <th>Golden Boots: [{person['goldenboots']}]</th>
                                                                                          <th>The Best FIFA Men’s Player: [{person['thebestfifamensplayer']}]</th>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                     </table>
                                                </div>

                                                <div className='card-linl-wrapper'>
                                                              
                                                                <a href={person.palmares} className='card-link'>Palmares Transfermarkt.it</a>
                                                </div>
                                    

                                            </div>
                      
                                        </div>

                          </div>

                                                )
                                    )
                      }

                  </div>
    
            </div>

        </div>

      </div>

    </div>

  </div>

</div>
    
);
  
}




export {App}
