import React from "react";
 
    const Navbar = ({filterItem,menuList}) => {  
        return(
            <>
            <div className='navbar'>
                    <div className='btn-group'>


                    {menuList.map((currVal)=>{
                        return <button
                        className='btn-group__item'
                        onClick={() => filterItem(currVal)}>
                            {currVal}
                         </button> 
                    })}

                        {/* <button
                            className='btn-group__item'
                            onClick={() => filterItem("BreakFast")}>
                            BreakFast</button>
    
                        <button
                            className='btn-group__item'
                            onClick={() => filterItem("Lounch")}>
                            Lounch</button>
    
                        <button
                            className='btn-group__item'
                            onClick={() => filterItem("Evening")}>
                            Evening</button>
    
                        <button
                            className='btn-group__item'
                            onClick={() => filterItem("Dinner")}>
                            Dinner</button> */}
    
                        {/* <button
                            className='btn-group__item'
                            onClick={() => setMenuData(Menu)}>
                            All</button> */}
                    </div>
                </div>
            </>
        )
    
    } 
export default Navbar;