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
<<<<<<< HEAD
    ),"All", 
=======
    ),'All'
>>>>>>> 9d8420b12a59f38ff203b4caad298f65b23f43e3
];
console.log(uniqueData);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu); 
    const [menuList,setMenuList] = useState(uniqueData);

<<<<<<< HEAD
    const filterItem = (Category) => {
        if (Category==="All") {
=======
    const filterItem = (category) => {
        if (category==="All") {
>>>>>>> 9d8420b12a59f38ff203b4caad298f65b23f43e3
            setMenuList(Menu);
            return;
        }

        const updatedList = Menu.filter((currElem) => {
<<<<<<< HEAD
            return currElem.Category === Category
=======
            return currElem.Category === category
>>>>>>> 9d8420b12a59f38ff203b4caad298f65b23f43e3
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
