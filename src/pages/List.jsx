import React from "react"
import Styles from "./pages.module.css"
import shoppingListInDB from "../configuration/configuration"
import Card from "../components/Card"
import CategoryCard from "../components/CategoryCard"
import {push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

export default function List(){
const [formData, setFormData]=React.useState([])
const [inputData, setInputData]= React.useState({
   name:"",
   id:"",
   category:"" 
})

console.log(formData)
const [category, setCategory] = React.useState(false)
const [filter, setFilter] = React.useState("")
const categories= ["fruitAndVegetables", "bread", "meat", "misc", "pet", "dairy"]

React.useEffect(()=>{
    setFormData(shoppingListInDB)
},[])

React.useEffect(()=>{
   const listItems= renderList()
},[formData])

React.useEffect(()=>{
    console.log(inputData)
    console.log(formData)
},[inputData])

React.useEffect(()=>{
    if(filter){
        filterItems(filter) 
    }
},[filter])


function renderList(){
    const listItem=formData.map(item=>{
        return <Card key={item.id} category={item.category}>{item.name}</Card>
    })

    return listItem
}

function renderFilters(){
    const filters=categories.map(cat=>{
        if(cat === "fruitAndVegetables"){
            return <a onClick={getFilterData} className={Styles.filterOption}>Fruit & Vegetables</a>
        } else {
            return <a onClick={getFilterData} className={Styles.filterOption}>{cat.slice(0,1).toUpperCase() + cat.slice(1)}</a>
        }
    })
    
    return filters
}

function getFilterData(e){
    let cat=e.target.textContent === "Fruit & Vegetables" ? "fruitAndVegetable" : e.target.textContent.toLowerCase()
    setFilter(cat)
}

function filterItems(filt){
    const sortedItems = [...formData].sort((a, b) => {
        if (a.category === b.category) {
          return 0;
        } else if (a.category === filt) {
          return -1;
        } else if (b.category === filt) {
          return 1;
        } else {
          return 0;
        }
      })

      setFormData(sortedItems)
}

 function handleChange(e){
    setInputData(prevInputData=>(
        {
            ...prevInputData,
            name:e.target.value,
            id:e.target.value
        })
    )
}

function toggleCategoryCard(){
    if(inputData.name){
        setCategory(prevCategory=>!prevCategory)
    }else{
        console.log("no input yet")
    }
}

function handleSelectCategory(e){
    setInputData(prevInputData=>(
        {
            ...prevInputData,
            category: e.target.textContent
        })
    )
    toggleCategoryCard()
}


function handleSubmit(){
    setFormData(prevFormData=>[...prevFormData, inputData])
    setInputData({
        name:"",
        id:"",
        category:""
    }

    )

}

    return (
        <div className={Styles.mainContainer}>
        {category && 
        <CategoryCard 
            handleClose={toggleCategoryCard} 
            categories={categories}
            handleClick={handleSelectCategory}/>}

        <form  className={Styles.inputContainer}>
            <input 
                type="text"
                id="input-field"
                placeholder="bread"
                name="listItem"
                value={inputData.name}
                onChange={handleChange}
            />
            {!inputData.category ? 
            (<a onClick={toggleCategoryCard} className={Styles.submitBtn} >Select Category</a>) 
            : 
            ((<a onClick={handleSubmit} className={Styles.submitBtn} >Add to cart</a>))}
        <div className={Styles.filterContainer}>
            {renderFilters()}
        </div>
        </form>
        <div className={Styles.cardContainer}>
            {formData ? renderList() : (<p>There's no list...yet</p>)}
        </div>
        </div>
    )
}