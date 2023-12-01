import { NavBar } from "./Components/NavBar"
import { ItemContainer } from "./Components/ItemContainer"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={ <ItemContainer />} />
                <Route path="/category/:category" element={ <ItemContainer />} />
                <Route path="/item/:id" element={ <ItemDetailContainer />} />
            <ItemDetailContainer/>
        <BrowserRouter/>
    )
}