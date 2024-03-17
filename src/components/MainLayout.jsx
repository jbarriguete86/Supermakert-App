import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import Header from "./Header"

export default function MainLayout(){

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

return (<>
<div>
<Header/>
<NavLink
to="."
end
style={({ isActive }) => isActive ? activeStyles : null}>
Home
</NavLink>
<NavLink
to="list"
style={({isActive}) => isActive ? activeStyles : null}
>List</NavLink>
</div>
<Outlet/>
</>)
}