import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Login = () => {
    const [value, setValue] = useState({ name: '', email: '', password: '', password_confirmation: ''})
    const [formData, setFormData] = useState()
    
    const handleUserInput = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }


    const submitData = () => {
        const data = new FormData
        data.append('name', value.name)
        data.append('email', value.email)
        data.append('password', value.password)
        data.append('password_confirmation', value.password_confirmation)

        axios.post('/register', data).then(res => {
            if(res.status == 201) {
                window.location = '/'
            }
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" name="name" onChange={e => handleUserInput(e)} value={value.name}/>
                <input type="email" name="email" onChange={e => handleUserInput(e)} value={value.email}/>
                <input type="password" name="password" onChange={e => handleUserInput(e) } />
                <input type="password" name="password_confirmation" onChange={e => handleUserInput(e) } />
                <input type="submit" onClick={submitData} />
            </form>
            <Link to="/login">Go to login form</Link>
        </div>
    );
};


export default Login;
