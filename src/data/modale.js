

                  import React, { useState, useCallback, useEffect } from 'react';
                  import"../stile.css";
                  import { people } from './data';
              
                  const Modale = () => {
                    const [showModal, setShowModal] = useState(false);
                    const [population, setPopulation] = useState({
                      name: '',
                      team: '',
                      jerseyNumber: '',
                      position: '',
                      img: '',
                      imgcard: '',
                      video: '',
                      palmares: '',
                      goals: '',
                      assists: '',
                      minutesPlayed: '',
                      gamesPlayed: '',
                      substitutions: '',
                      pallonedoro: '',
                      mondiali: '',
                      championsleague: '',
                      fifapuskas: '',
                      goldenboots: '',
                      thebestfifamensplayer:''

        
                    });
                    const [peopleData, setPeopleData] = useState(people);
                  
                    const handleInputChange = useCallback((e) => {
                      setPopulation({ ...population, [e.target.name]: e.target.value });
                    }, [population]);
                  
                    const handleSubmit = useCallback((e) => {
                      e.preventDefault();
                      setPeopleData([...peopleData, population]);
                      localStorage.setItem('playermudi10', JSON.stringify([...peopleData, population]));
                      setPopulation({
                        name: '',
                        team: '',
                        jerseyNumber: '',
                        position: '',
                        img: '',
                        imgcard: '',
                        video: '',
                        palmares: '',
                        goals: '',
                        assists: '',
                        minutesPlayed: '',
                        gamesPlayed: '',
                        substitutions: '',
                        pallonedoro: '',
                        mondiali: '',
                        championsleague: '',
                        fifapuskas: '',
                        goldenboots: '',
                        thebestfifamensplayer:''
                      });
                    }, [peopleData, population]);
                  
                    useEffect(() => {
                      localStorage.setItem('playermudi2', JSON.stringify(peopleData));
                    }, [peopleData]);
                  
                    return (
                      <div className='allt'>
                        <button onClick={() => setShowModal(true)}>Open Modal</button>
                        {showModal && (
                          <div className="modal-overlay">
                            <div className="modal-content">
                              <div className='add'>
                                  
                                <table className="player-table" onSubmit={handleSubmit}>
                                  <tbody>
                                    <tr>
                                      <th className='th1'>Name</th>  <td><input type="text"  className="td1" name="name" value={population.name} onChange={handleInputChange} /></td>
                                      <th className='th1'>Team</th> <td ><input type="text" className="td1" name="team" value={population.team} onChange={handleInputChange} /></td>
                                      </tr>
                                      <tr>
                                      <th className="th1">Jersey Number</th> <td><input type="text"  className="td1" name="jerseyNumber" value={population.jerseyNumber} onChange={handleInputChange} /></td>
                                      <th className="th1">Position</th>  <td><input type="text" className="td1" name="position" value={population.position} onChange={handleInputChange} /></td>
                                      </tr>                                     
                                      <tr>
                                      <th className="th1">Img Players</th> <td><input type="text" className="td1" value={population.img} onChange={handleInputChange} /></td>
     
                                      <th className="th1"> Img Card</th> <td><input type="text" className="td1" value={population.imgcard} onChange={handleInputChange} ></input></td>
                                        </tr>
                                        <tr>

                                        <th className="th1">Video</th> <td><input type="text" className="td1"  value={population.video} onChange={handleInputChange} /></td>                                      
                                        <th className="th1" >Palmares</th> <td><input type="text" className="td1" value={population.palmares} onChange={handleInputChange}></input></td>

                                        </tr>
                                        <tr>
                                    <th className="th1" >Goals</th><td><input type="text"   className="td1" value={population.goals} onChange={handleInputChange} /></td>
                                    <th className="th1" >Assists</th><td><input type="text" className="td1"   value={population.assists} onChange={handleInputChange} /></td>
                                      </tr>
                                      <th className="th1">Minutes Played</th><td><input type="text" className="td1"  value={population.position} onChange={handleInputChange} /></td>
                                      <th className="th1">Games Played</th><td><input type="text"   className="td1" value={population.gamesPlayed} onChange={handleInputChange} /></td>
                                      <tr>

                                        </tr>
                                      
                                      
                                  
                                      <tr>
                                      <th className="th1" >Substitutions</th><td><input type="text" className="td1" value={population.substitutions} onChange={handleInputChange} /></td>
                                      <th className="th1" >Ballon D'or</th><td><input type="text" className="td1" value={population.pallonedoro} onChange={handleInputChange} /></td>
                                      </tr>

                                      <tr>
                                      <th className="th1" >World Championships:</th><td><input type="text" className="td1" value={population.mondiali} onChange={handleInputChange} /></td>
                                      <th className="th1" >Champions League:</th><td><input type="text" className="td1" value={population.championsleague} onChange={handleInputChange} /></td>

                                      </tr>

                                      <tr>

                                      <th className="th1" >Fifa Puskas:</th><td><input type="text" className="td1" value={population.fifapuskas} onChange={handleInputChange} /></td>
                                      <th className="th1" >Golden Boots:</th><td><input type="text" className="td1" value={population.goldenboots} onChange={handleInputChange} /></td>

                                      </tr>
                                      <tr>
                                      <th className="th1" >The Best Fifa Men's Player:</th><td><input type="text" className="td1" value={population.thebestfifamensplayer} onChange={handleInputChange} /></td>

                                      </tr>

                                      
                                                
                      <button className='addp' type='button' onClick={handleSubmit}>
    Add Player
  </button>
  </tbody>
  <button className='close' onClick={() => setShowModal(false)}>X</button>
  </table>
  </div>
  </div>
  </div>

        )
        }
        </div>
    )
      }

        export {Modale}