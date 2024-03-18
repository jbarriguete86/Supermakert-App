import React from "react"
import {Link} from "react-router-dom"
import Styles from "./pages.module.css"

export default function Home(){

    function handleClick(){
        console.log(searchParams)
    }


    return (
    <div className={Styles.homeContainer}>
    <h2>Welcome to the Groceries app</h2>
    <p>When you're ready to fill in your groceries list just go to the list tab of this app and start filling in your groceries list</p>
    <Link 
    to={"list"}
    className={Styles.mainBtn}><span>+</span>Create my list</Link>
    </div>)
}

