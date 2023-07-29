import React,{useState} from 'react';
import './Banner.css';
import Search from './Search';
import { useNavigate } from "react-router-dom";



function Banner() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };

    const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
        <div className = 'banner__search'>
        {showSearch && <Search/>}
            <button onClick = {() =>
            setShowSearch(!showSearch)}
             className = 'banner__searchButton' 
            variant = 'outlined'>
                Search Dates</button>

        </div>
    
     <div className = 'banner__info'>
     <h1> Get out and stretch your imagination</h1>
     <h5>
        Plan a different kind of getaway to uncover the hidden gems near you.
     </h5>
      <button onClick={handleClick} variant='outlined'>Explore Nearby</button>
     </div>

    </div>
  )
}

export default Banner