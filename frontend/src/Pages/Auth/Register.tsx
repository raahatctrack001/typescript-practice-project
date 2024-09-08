 import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
 
 type Props = {}
 type registerFormSchema = {
    email: string,
    password: string,
    confirmPassword: string,
 }
 const Register = (props: Props) => {
    const [formData, setFormData] = useState<registerFormSchema> ({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setFormData(prev=>({...prev, [e.target.id]: e.target.value}));
    }

    const handleRegisterFormSubmit = async (e:FormEvent)=>{
        e.preventDefault();
        console.log("register form submitted", formData);
    }
    console.log(formData)
    return (
        <div 
            className='w-full min-h-screen flex items-center justify-center'>
            <form 
                onSubmit={handleRegisterFormSubmit}
                className='flex flex-col gap-5'
            >
                <h1> Login Form </h1>
                <div className='flex flex-col gap-2 space-y-3'>
                    <div>
                        <p> Email </p>
                        <input
                            placeholder='name@company.com'
                            type='email' 
                            id="email"
                            onChange={handleInputChange}
                            />
                    </div>
                    <div>
                        <p> Password </p>
                        <input 
                            placeholder='***************'
                            type='password'
                            id="password"
                            onChange={handleInputChange}
                            />
                    </div>

                    <div>
                        <p>Confirm Password </p>
                        <input 
                            placeholder='***************'
                            type='confirmPassword'
                            id="confirmPassword"
                            onChange={handleInputChange}
                            />
                    </div>
                </div>
                        
                <button> Register </button>
                <p> Already have an account? <Link to={'/sign-in'}> Sign In </Link></p>
            </form>
    
        </div>
      )
 }
 
 export default Register