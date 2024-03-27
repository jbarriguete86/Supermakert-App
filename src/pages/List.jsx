import React from "react"
import Styles from "./pages.module.css"

export default function List(){
const [formData, setFormData]=React.useState({
    listItem:""
})


 function handleChange(e){
    setFormData(prevFormData=>({
        ...prevFormData,
        listItem: e.target.value
    }))

}

    return (
    <form className={Styles.inputContainer}>
        <input 
            type="text"
            id="input-field"
            placeholder="bread"
            name="listItem"
            value={formData.listItem}
            onChange={handleChange}
        />
        <button>Add to cart</button>
    
    </form>)
}