import React from "react"
import Styles from "./components.module.css"

export default function CategoryCard({handleClick,handleClose, categories}){
    

        function renderCategories(){
            const categoriesItems=categories.map(cat=>{
                return <p className={Styles.categoryOption} id={cat} onClick={(e)=>handleClick(e)}>{cat}</p>
    
            })
            return categoriesItems
        }

    return (
        <div className={Styles.categoriesContainer}>
            <p className={Styles.closeBtn} onClick={handleClose}>X</p>
            <p className={Styles.categoryText}>Please, select the category for this item</p>
            <div className={Styles.categoriesOptions}>
                {renderCategories()}
            </div>
        </div>
    )
}