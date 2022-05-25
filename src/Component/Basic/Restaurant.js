import React, { useState } from 'react'
import "./Style.css";
import Menu from "./MenuApi";
import MenuCard from './MenuCard';

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData);
const filterItem = (category) =>{
const updatedList = Menu.filter((currElem,ind)=>{
return currElem.category === category 
})
setMenuData(updatedList);
}

    return (
        <>
            <div className='navbar'>
                <div className='btn-group'>
                    <button 
                    className='btn-group__item' 
                    onClick={()=>filterItem("BreakFast")}>
                    BreakFast</button>

                    <button 
                    className='btn-group__item' 
                    onClick={()=>filterItem("Lounch")}>
                    Lounch</button>

                    <button 
                    className='btn-group__item' 
                    onClick={()=>filterItem("Evening")}>
                    Evening</button>
                    
                    <button 
                    className='btn-group__item' 
                    onClick={()=>filterItem("Dinner")}>
                    Dinner</button>

                    <button 
                    className='btn-group__item' 
                    onClick={()=>filterItem("All")}>
                    All</button>
                </div>
            </div>
            <br />
            <MenuCard menuData={menuData} />

        </>
    )
}

export default Restaurant;
