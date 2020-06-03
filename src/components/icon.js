import React from "react"
import{FaTimes,FaPen,FaRegCircle} from "react-icons/fa"

const Icon=({name})=>{
    switch(name)
    {
        case 'circle':
            return <FaRegCircle className="icons" size={60} />
        case 'cross':
            return <FaTimes className="icons" size={60}/>
      default:
           return <FaPen className="icons"  size={10}/>
    }
}


export default Icon;

