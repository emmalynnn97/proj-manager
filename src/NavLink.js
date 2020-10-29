import React from 'react'
import useToggle from './useToggle'
export default function NavLink(props) {
    const [bgColor, toggle] = useToggle({color1:'white', color2:'black'})
    return (
        <div onMouseLeave={toggle} onMouseEnter={toggle} style={{backgroundColor:bgColor,border:'2px solid white', padding:'.6em 1em', margin:'0em .5em', color:'white'}}>
            {props.title}
        </div>
    )
}
