import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
import Recado from "../pages/recado/recado";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/recados" element={<Recado />}></Route> 
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes