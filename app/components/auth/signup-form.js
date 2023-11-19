"use client"
import React, { useState } from 'react'
import InputField from '../input-field'
import Button from '../button'
import Link from 'next/link'
import { toast } from 'react-toastify'
import axios from "axios"

const SignupForm = () => {
    const [signupFormData, setSignupFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const handleSignupFormChange = (event) => {
        const { name, value } = event.target;
        setSignupFormData({ ...signupFormData, [name]: value });
    }

    const handleSignUpFormSubmit = async (event) => {
        event.preventDefault();
        console.log(signupFormData);
        if(signupFormData.password !== signupFormData.confirmPassword){
            console.log("toast called")
            toast.error("Passwords do not match")
        } else {
            try{
            const response = await axios.post("/api/user", {
                name: signupFormData.name,
                email: signupFormData.email,
                password: signupFormData.password
            })
            console.log(response)
            toast.success(response.data.message)
        } catch(err){
            if(!err.response?.data?.status){
                toast.error(err.response.data.message)
            }
            console.log(err)
        }
        }
    }
  return (
    <form className=' w-1/4'>
        <h2 className=' text-center w-full font-bold text-3xl py-4'>Sign up</h2>
        <InputField type="text" name="name" placeholder="Name" autoComplete="name" inputMode="text" onChange={e=>handleSignupFormChange(e)} />
        <InputField type="email" name="email" placeholder="Email" autoComplete="username" inputMode="email" onChange={e=>handleSignupFormChange(e)}  />
        <InputField type="password" name="password" placeholder="Password" inputMode="password" onChange={e=>handleSignupFormChange(e)} />
        <InputField type="password" name="confirmPassword" placeholder="Confirm Password" inputMode="password" onChange={e=>handleSignupFormChange(e)} />
        <Button onClick={handleSignUpFormSubmit}>Sign up</Button>
        <div className=' w-full text-center'>
            <p>Already have an account? <Link href={"/"} className='text-blue-400 underline text-sm font-medium hover:text-blue-500 transition-all ease-in-out duration-300'>Login</Link></p>
        </div>
    </form>
  )
}

export default SignupForm