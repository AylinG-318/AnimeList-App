import { Route, Routes } from 'react-router-dom';
import RandomAnime from "./components/RandomAnime";
import Home from "./components/Home";

function Container() {
    return (
        <div className="container-div">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/random" element={<RandomAnime/>} />
            </Routes>
        </div>
    )
}

export default Container; 