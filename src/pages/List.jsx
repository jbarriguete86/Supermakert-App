import React from "react"

export default function List({items}){
    const {fruits, bread, vegetables, dairyProducts, meat, miscellaneous, pet, other, id} = items
    
    function getElements(categ){
        return categ.map((element)=><p>{element}</p>)
    }

    return (<>
    {getElements(fruits)}
    
    </>)
}