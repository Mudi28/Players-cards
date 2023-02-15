
import React, { useState, useCallback } from 'react';
import"../stile.css";
import { people } from './data';

const localStorage = window.localStorage;



    
    const  = () => {
         
const [showModal, setShowModal] = useState(false);

        const [name, setName] = useState('');
        const [team, setTeam] = useState('');
        const [position, setPosition] = useState('');
        const [img, setImg] = useState ('');
        const [imgcard, setImgcard] = useState ('');
        const [video, setVideo ] = useState ('');
        const [palmares, setPalmares] = useState ('');
        const [goals, setGoals] = useState ('');
        const [assists, setAssists]= useState ('');
        const [minutesPlayed, setMinutesPlayed]= useState ('');
        const [gamesPlayed, setGamesPlayed]= useState ('');
        const [substitutions, setSubstitutions] = useState ('');
        

        const [jerseyNumber, setJerseyNumber] = useState('');
        
        const [selectedOption, setSelectedOption] = useState('');
        
        const handleOptionChange = useCallback((e) => {
          setSelectedOption(e.target.value);
        }, []);
      
        const handleInputChange = useCallback((e) => {
          switch (selectedOption) {
            case 'name':
              setName(e.target.value);
              break;
            case 'team':
              setTeam(e.target.value);
              break;
              
              
              
            case 'jerseyNumber':
              setJerseyNumber(e.target.value);
              break;

              case 'position':
                setPosition(e.target.value);
                    break;

                    case 'img':
  setImg(e.target.value);
      break;

      case 'imgcard':
        setImgcard(e.target.value);
            break;


            case 'video':
  setVideo(e.target.value);
      break;

      case 'palmares':
  setPalmares(e.target.value);
      break;

      case 'goals':
  setGoals(e.target.value);
      break;

      case 'assists':
  setAssists(e.target.value);
      break;

      case 'minutesPlayed':
  setMinutesPlayed(e.target.value);
      break;

      case 'gamesPlayed':
  setGamesPlayed(e.target.value);
      break;

      case 'substitutions':
        setSubstitutions(e.target.value);
            break;
            default:
              break;
          }
        }, [selectedOption]);
      
        const handleSubmit = useCallback((e) => {
          e.preventDefault();
          people.push({ name, team, jerseyNumber,position,img,imgcard,video,palmares,goals,assists,minutesPlayed,gamesPlayed,substitutions });
          localStorage.setItem('playermudi', JSON.stringify(people));
          setName('');
          setTeam('');
          setJerseyNumber('');
          setPosition('');
          setImg('');
          setImgcard('');
          setVideo('');
          setPalmares('');
          setGoals('');
          setAssists('');
          setMinutesPlayed('');
          setGamesPlayed('');
          setSubstitutions('');

        }, [name, team, jerseyNumber,position,img,imgcard,video,palmares,goals,assists,minutesPlayed,gamesPlayed,substitutions]);
      
       
       
       
    


    return (
      <div className='allt'>
        
        <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
        <div className='add'>
          <table className="player-table" onSubmit={handleSubmit}
          value={selectedOption} onChange={handleOptionChange}>
  <thead>
    <tr>
      <th value='name'>Name</th>
      <th value='team'>Team</th>
      <th value='jerseyNumber'>Jersey Number</th>
      <th value='position'>Position</th>
      <th value='img'>Img Players</th>
      <th value='imgcard'>Img Card</th>
      <th value='video'>Link Video YouTube</th>
      <th value='palmares'>Link Palmares Transfermarkt</th>
      <th value='goals'>Goals</th>
      <th value='assists'>Assists</th>
      <th value='minutesPlayed'>Minutes Played</th>
      <th value='gamesPlayed'>Games Played</th>
      <th value='substitutions'>Substitutions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td           value={
            selectedOption === 'name'
              ? name
              : selectedOption === 'team'
              ? team
              : selectedOption === 'jerseyNumber'
              ? jerseyNumber
              : selectedOption === 'position'
? position
: selectedOption === 'img'
? img
: selectedOption === 'imgcard'
? imgcard
: selectedOption === 'video'
? video
: selectedOption === 'palmares'
? palmares
: selectedOption === 'goals'
? goals
: selectedOption === 'assists'
? assists
: selectedOption === 'minutesPlayed'
? minutesPlayed
: selectedOption === 'gamesPlayed'
? gamesPlayed
: selectedOption === 'substitutions'
? substitutions
              : ''
          }
          onChange={handleInputChange}
        >

        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          
        />
      </td>
      <td>
        <input
          type="text"
          value={team}
          onChange={e => setTeam(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={jerseyNumber}
          onChange={e => setJerseyNumber(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={img}
          onChange={e => setImg(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={imgcard}
          onChange={e => setImgcard(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={video}
          onChange={e => setVideo(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={palmares}
          onChange={e => setPalmares(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={goals}
          onChange={e => setGoals(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={assists}
          onChange={e => setAssists(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={minutesPlayed}
          
          onChange={e => setMinutesPlayed(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={gamesPlayed}
          onChange={e => setGamesPlayed(e.target.value)}
          />
</td>
<td>
  <input
    type="text"
    value={substitutions}
    onChange={e => setSubstitutions(e.target.value)}
    />
    </td>
    <button className='addp' type='submit' onClick={handleSubmit}>
  Add Player
</button>
</tr>
<button onClick={() => setShowModal(false)}>Close</button>
</tbody>
</table>



      
    
      
    </div>
    </div>
    </div>
      )}
      
    
    








     
    
  
  

    
    


    

    



</div>
    )} 
      

        


export ;











    
    
