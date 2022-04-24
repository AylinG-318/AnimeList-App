import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UserEdit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        username: '',
        email: '',
        listArray: [],
    })

    const fetchUserData = async () => {
        
    }
    useEffect( () => {
         
    }, [])
}