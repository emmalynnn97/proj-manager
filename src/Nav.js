import React from 'react'
import { useState } from 'react'
import NavLink from './NavLink'
export default function Nav(props) {
    const [bgColor, setBgColor] = useState(props.color1)
    const changeBg = ()=>{
        if(bgColor === props.color1){
            setBgColor(props.color2)
        }
        else{
            setBgColor(props.color1)
        }
    }
    return (
        <div style={{height:'100px',width:'100%', backgroundColor:bgColor,display:'flex',justifyContent:'flex-end', alignItems:'center'}}>
            {NavLink('Link 1')}
        </div>
    )
}
