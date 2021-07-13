import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Container, Form } from './LoginStyles'

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
        <Container>
            <Form onSubmit={e => e.preventDefault()}>
                <h2>LOGIN</h2>
                <input className="input" placeholder="Email" type="email" name="email" onChange={e => handleUserInput(e)} value={value.email}/>
                <input className="input" placeholder="Password" type="password" name="password" onChange={e => handleUserInput(e) } />
                <input type="submit" onClick={handleSubmitData} value="Login" />
            <Link to="/register">Go to register form</Link>
            </Form>
            <h4>User 1: </h4>
            <p>Email: peter@gmail.com</p>
            <p>Password: 12345678</p>
            <h4>User 2: </h4>
            <p>Email: janka@gmail.com</p>
            <p>Password: 12345678</p>
        </Container>
    );
};


export default Login;
