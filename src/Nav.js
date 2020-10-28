import React from 'react'
import { useState } from 'react'
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
        <div onMouseOver={changeBg} style={{height:'100px',width:'100%', backgroundColor:bgColor}}>
            
        </div>
    )
}
