import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Login = () => {
    const [value, setValue] = useState({ email: '', password: ''})
    const [formData, setFormData] = useState()
    
    const handleUserInput = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmitData = () => {
        const data = new FormData
        data.append('email', value.email)
        data.append('password', value.password)

        axios.post('/login', data).then(res => {
           if(res.status == 204) {
               window.location = '/'
           }
        }).catch(e => {
            console.log('nie')
        })
    }

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <input type="email" name="email" onChange={e => handleUserInput(e)} value={value.email}/>
                <input type="password" name="password" onChange={e => handleUserInput(e) } />
                <input type="submit" onClick={handleSubmitData} />
            </form>
            <Link to="/register">Go to register form</Link>
        </div>
    );
};


export default Login;
