import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import Header from "./Header"
import styles from "./components.module.css"

export default function MainLayout(){

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "var(--bold-red)"
    }

return (<>
<div className={styles.heroContainer}>
    <Header/>
    <div className={styles.navContainer}>
    <NavLink
    to="."
    end
    style={({ isActive }) => isActive ? activeStyles : null}>
    Home
    </NavLink>
        
    <NavLink
    to="list"
    style={({isActive}) => isActive ? activeStyles : null}
    >List
    </NavLink>
    </div>
</div>
<Outlet/>
</>)
}