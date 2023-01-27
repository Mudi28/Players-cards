import { useState } from 'react'
import './stile.css';
import {people} from './data/data'
import {arraySearch} from './ultis/index'
import DataInput from './data/addelete';
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  
  
  
  const [population, setPopulation] = useState(people)
  const [count, setCount] = useState(people.length)

  const handleOnChange = async (e) => {

    let value = e.target.value;

    if (value.length > 2) {
      
                            let search = arraySearch(population, value, person => person.name.includes(value));

                            setPopulation(search)
                            setCount(search.length)

    } else {
      
                            setPopulation(people)
                            setCount(people.length)
      
    }
    
  }

  return (

<div className="App">
    
<Container>
    <Row>
      <Col sm={3} md={4} lg={4}>
        <div className="col-md-3 col-xs-6">
              <div className='all'>
    
                                    <h1>Test Players Search</h1>
                                    <h2 className='pcount'>Players: {count}</h2>

                    <div>

                          <input className='search'  type="text" name="search-form" id="search-form" placeholder='Search Name/Team' onChange={handleOnChange}/>
                            
                    </div>


                    <div className='add'>
                                          
                                          <DataInput />
                    </div>
                    
                    <div  className="container">
            
                      {population.map(person => (
                  
                          <div className="card" key={person.name}>
          
                                    <h2>{person.name}</h2>

                                        <div className='cards'>

                                             <div className='img'>

                                                     <img className='immagine' src={person.img} alt='giocatori'></img>

                                              </div>



                                            <iframe 

                                                    className="video"
                                                    height="315" 
                                                    src={person.video}
                                                    title="YouTube video player" frameborder="0" allow="accelerometer;
                                                     autoplay; 
                                                     clipboard-write; 
                                                     encrypted-media; 
                                                     gyroscope; picture-in-picture; 
                                                     web-share" allowfullscreen>
                                                    
                                            </iframe>


                                            <div>

                                                <h2 className='card-title'> {person.position}</h2>

                                                  <div className='card-content'>

                                                                                <p>Team: {person.team}</p>
                                                                                <p>Number: {person.jerseyNumber}</p>
                                                                                <p>Position: {person.position}</p>                
                                                                                <p>Goals: {person.goals}</p>
                                                                                <p>assists: {person.assists}</p>
                                                                                <p>MinutesPlayed: {person.minutesPlayed}</p>
                                                                                <p>GamesPlayed: {person.gamesPlayed}</p>
                                                                                <p>Substitutions: {person.substitutions}</p>

                                                  </div>

                                                  <div className="table-responsive">
                                                      
                                                                                    <table className="table">
  
                                                                                        <tr>
                                                                                          <th>FIFA WP of the Year:[{person['the best fifa men\'s player']}] </th>
                                                                                          <th>World Championships: [{person.mondiali}]</th>
                                                                                          <th>Champions League: [{person['champions league']}]</th>
                                                                                          <th>Championships Won: [{person['campionati vinti']}]</th>
                                                                                          <th>FIFA Puskas: [{person['fifa puskas']}]</th>
                                                                                          <th>Golden Boots: [{person['golden boots']}]</th>
                                                                                          <th>The Best FIFA Men’s Player: [{person['the best fifa men\'s player']}]</th>
                                                                                        </tr>

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

      </Col>

    </Row>

  </Container>

</div>
    
);
  
}




export default App
