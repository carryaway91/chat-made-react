import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Container, Form } from './RegisterStyles';
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
        <Container>
            <Form onSubmit={e => e.preventDefault()}>
                <h3>Register</h3>
                <input className="input" placeholder="Name" type="text" name="name" onChange={e => handleUserInput(e)} value={value.name}/>
                <input className="input" placeholder="Email" type="email" name="email" onChange={e => handleUserInput(e)} value={value.email}/>
                <input className="input" placeholder="Password (at least 8 characters)" type="password" name="password" onChange={e => handleUserInput(e) } />
                <input className="input" placeholder="Confirm Password" type="password" name="password_confirmation" onChange={e => handleUserInput(e) } />
                <input type="submit" onClick={submitData} value="Register" />
                <Link to="/login">Go to login form</Link>
            </Form>
        </Container>
    );
};


export default Login;
