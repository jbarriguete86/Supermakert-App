import React from "react"
import Styles from "./components.module.css"

export default function Card( {children, category}){
    const categoryClass = Styles[category]
    let combinedClasses=`${Styles.card} ${categoryClass}`
return <p className={combinedClasses}>{children}</p>
}