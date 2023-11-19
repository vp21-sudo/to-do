"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import InputField from '../input-field'
import Button from '../button';

const LoginForm = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });
    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(loginFormData);
    }
  return (
    <form className=' w-2/3 md:w-1/3'>
        <h2 className=' text-center w-full font-bold text-3xl py-4'>Welcome</h2>
        <InputField type="email" name="email" placeholder="Email" autoComplete="username" inputMode="email" value={loginFormData.email} onChange={e=>{handleFormChange(e)}} />
        <InputField type="password" name="password" placeholder="Password" value={loginFormData.password} onChange={e=>handleFormChange(e)} />
        <Link href={"/forgot-password"} className='text-blue-400 underline text-sm font-medium hover:text-blue-500 transition-all ease-in-out duration-300'>Forgot Password</Link>
        <Button onClick={handleFormSubmit} className=' ' >Login</Button>
        <div className=' w-full text-center'>
            <p>Don&apos;t have an account? <Link href={"/signup"} className='text-blue-400 underline text-sm font-medium hover:text-blue-500 transition-all ease-in-out duration-300'>Sign up</Link></p>
        </div>
    </form>
  )
}

export default LoginForm