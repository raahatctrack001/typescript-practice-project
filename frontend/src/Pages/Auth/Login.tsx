import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {}
type loginFormSchema = {
    email: string,
    password: string,
}
const Login = (props: Props) => {
    const [formData, setFormData] = useState<loginFormSchema>({
        email: "",
        password: ""
    })

    
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setFormData(prev=>({...prev, [e.target.id]: e.target.value}))
    }
    const handleLoginFormSubmit = async (e:FormEvent)=>{
            e.preventDefault();
            console.log("data submitted: ", formData)
    }
    console.log(formData);
  return (
    <div 
        className='w-full min-h-screen flex items-center justify-center'>
        <form 
            onSubmit={handleLoginFormSubmit}
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
            </div>
            <button> Login </button>
            <p> Din't have an account? <Link to={'/register'}> Register here </Link></p>
        </form>

    </div>
  )
}

export default Login