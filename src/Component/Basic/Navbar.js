import React from "react";

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>

            <div className='navbar'>
                <div className='btn-group'>
                    {menuList.map((currVal) => {
                        return <button
                            className='btn-group__item'
                            onClick={() => filterItem(currVal)}>
                            {currVal}
                        </button>
                    })} 
                </div> 
            </div>
        </>
    )

}
export default Navbar;