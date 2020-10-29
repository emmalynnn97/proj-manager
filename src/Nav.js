import React from 'react'

import NavLink from './NavLink'
export default function Nav(props) {
    
    return (
        <div style={{background:props.color1,height:'100px',width:'100%', display:'flex',justifyContent:'flex-end', alignItems:'center'}}>
            {NavLink({title:'Link 1'})}
        </div>
    )
}
