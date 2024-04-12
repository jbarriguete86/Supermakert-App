import React from "react"
import Styles from "./components.module.css"

export default function Card( {children, category, handleClick, id}){
    const categoryClass = Styles[category]
    // console.log(categoryClass)
    let combinedClasses=`${Styles.card} ${categoryClass}`
return <p id={id} onClick={handleClick}className={combinedClasses}>{children}</p>
}