import React from 'react'
import "./Style.css"

const Weather = () => {
  return (
      <>
    <div className='wrap'>
       <div className='search'>
           <input 
           type="search" 
           id="search" 
           placeholder='Search..'
           autoFocus
           className='searchTerm'
           />
           <button className='searchButton' type='button'>Search</button>
       </div>
    </div>

    {/* Our weather Card */}
    <article className='widget'>
    <div className='weatherIcon'>
        <i className={"wi wi-day-sunny"}></i>
    </div>    
     <div className='weatherInfo'>
         <div className='tempreture'>
             <span>25.6°</span>
         </div>
         <div className='description'>
             <div className='weatherCondition'>
                 
             </div>
         </div>
     </div>
    </article>
    
    </>
  )
}

export default Weather 