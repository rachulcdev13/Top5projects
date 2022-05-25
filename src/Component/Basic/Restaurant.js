import React from 'react'
import "./Style.css";

const Restaurant = () => {
    return (
        <>
            <div className='card-conatiner'>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>1</span>
                        <span className='card-author subtle' >Breakfast</span>
                        <span className='card-ttle'>Maggie</span>
                        <span className='card-description subtle'>
                            It is TASTY and mind-blowingly SATISFYING. Who hasn't tasted the heavenly feeling of a hot plate of Maggi when stricken with hunger. In childhood when Mothers made it or the Canteen-wala in college, the taste, the feeling and satisfaction remains the sam
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant;
