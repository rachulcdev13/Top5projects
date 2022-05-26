import React, { useState } from 'react'
import "./Style.css";
import Menu from "./MenuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar'; 

const uniqueData = [
    ...new Set(
        Menu.map((currVal) => {
            return currVal.Category;
        })
    ),'All'
];
console.log(uniqueData);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu); 
    const [menuList,setMenuList] = useState(uniqueData);

    const filterItem = (category) => {
        if (category==="All") {
            setMenuList(Menu);
            return;
        }

        const updatedList = Menu.filter((currElem) => {
            return currElem.Category === category
        })
        setMenuData(updatedList);
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <br />
            <MenuCard menuData={menuData} />

        </>
    )
}

export default Restaurant;
