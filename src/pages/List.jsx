import React from "react"
import Styles from "./pages.module.css"
import {shoppingListInDB, database} from "../configuration/configuration"
import Card from "../components/Card"
import CategoryCard from "../components/CategoryCard"
import {push, onValue, remove, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

export default function List(){

    const [formData, setFormData]= React.useState([])
    const [innerValue, setInnerValue]=React.useState({
        name:"",
        category:"fruitVegetable"
    })

    React.useEffect(() => {
        getFormData()
    }, [])

   





    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setInnerValue(prevInnerVal => {
            return {
                ...prevInnerVal,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(){
        if(innerValue.name){
            push(shoppingListInDB, innerValue)
            setInnerValue({
                name:"",
                category:"fruitVegetable"
            })
            getFormData()
        }
    }

    function getFormData(){
        onValue(shoppingListInDB, (snapshot) => {
            if (snapshot.exists()) {
                setFormData(Object.entries(snapshot.val()))
            } else{
                setFormData([])
            }
        })
    }

    function renderElements(){
        if(!formData.length){
            return <p className={Styles.emptyText}>Add items to your list, please </p>
        } else{
            return formData.map((element) => {
              return  (
              <Card 
              key={element[0]} 
              id={element[0]}
              handleClick={removeCard} 
              category={element[1].category}>
                {element[1].name}
            </Card>)
            })

        }
    }

    function removeCard(e){
        const itemToRemove= formData.filter(element=>element[0]=== e.target.id)[0]
        const exactLocation =ref(database, `shoppingList/${itemToRemove[0]}`)
        remove(exactLocation)
    }

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.formContainer}>
                <input 
                type="text"
                placeholder="enter your item"
                name="name"
                value={innerValue.name}
                onChange={handleChange}/>


                <select 
                    id="category"
                    value={innerValue.category}
                    onChange={handleChange}
                    name="category"
                >
                    <option value="fruitVegetable" >Fruit & Vegetables</option>
                    <option value="dairy">Dairy products</option>
                    <option value="bread">Bread</option>
                    <option value="protein">Protein</option>
                    <option value="pet">Pet products</option>
                    <option value="misc">Miscellaneous</option>
                </select>
                <button onClick={handleSubmit}>Submit</button>
            </div>

            <div className={Styles.listContainer}>
                {formData.length ? renderElements() : (<p className={Styles.emptyText}>Add items to your list, please </p>)}
            </div>

        </div>
    )
}