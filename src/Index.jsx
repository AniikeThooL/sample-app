import { Route, Routes } from "react-router";
import App from "./App";
import { People } from "./components/People";



export const Index = ()=>{

    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/people" element={<People/>}/>
        </Routes>
    );
}