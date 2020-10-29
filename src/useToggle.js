import { useState } from 'react'
export default function useToggle(props){
    const [bgColor, setBgColor] = useState(props.color1)
    const changeBg = ()=>{
        if(bgColor === props.color1){
            setBgColor(props.color2)
        }
        else{
            setBgColor(props.color1)
        }
    }
    return [bgColor, changeBg]
}