import React from "react"
import LogoIcon from "../assets/logoIcon.png"
import styles from "./components.module.css"

export default function Header(){
    return (
    <div className={styles.logoContainer}>
     <img className="header-icon" src={LogoIcon} alt="company logo image" />
    <h1>Smart Groceries List</h1>
    </div>)
}