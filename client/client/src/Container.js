import { Route, Routes } from 'react-router-dom';
import RandomAnime from "./components/RandomAnime";
import Home from "./components/Home";
import SearchAnime from './components/SearchAnime';
import UserCreate from './components/userAttemptTwo/UserCreate';
import DisplayAllUsers from './components/userAttemptTwo/DisplayUsers';
import IndividualUser from './components/userAttemptTwo/IndividualUser';
import UserEdit from './components/userAttemptTwo/UserEdit';

function Container() {
    return (
        <div className="container-div">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/random" element={<RandomAnime/>} />
                <Route path="/search" element={<SearchAnime />} />
                <Route path="/user-create" element={<UserCreate />} />
                <Route path="/users/:id/edit" element={<UserEdit />} />
                <Route path="/users" element={<DisplayAllUsers />} />
                <Route path="/users/:id" element={<IndividualUser />} />

            </Routes>
        </div>
    )
}

export default Container; 