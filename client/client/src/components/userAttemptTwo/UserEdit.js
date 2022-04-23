import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UserEdit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [item, setItem] = useState({
        username: '',
        email: '',
        listArray: [],
    })
}