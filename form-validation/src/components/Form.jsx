import React, { useState } from 'react'

const Form = () => {
    const initialData = {
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    }

    const [formData,setFormData] = useState(initialData)
    const [error,setError] = useState('This is an error')

    const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData((prevData)=>(
            {
                ...prevData,
                [name]:value
            }
        ))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        

    }
  return (
    <div className='h-screen w-full flex items-center justify-center p-5 bg-gray-800'>
        <div className='max-w-md w-full p-5 rounded-lg bg-white'>
            <h2 className='mb-5 text-3xl font-semibold'>Add User</h2>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>

                <input type="text" placeholder='Enter your name' className='px-4 py-2 text-gray-800 outline-none bg-gray-300 rounded-lg ring-green-600 focus:ring-2' name='fullName' value={formData.fullName} onChange={handleChange} />
                <input type="email" placeholder='Enter your email'  className='px-4 py-2 text-gray-800 outline-none bg-gray-300 rounded-lg ring-green-600 focus:ring-2' name='email' value={formData.email} onChange={handleChange} />
                <input type="password" placeholder='Enter your password'  className='px-4 py-2 text-gray-800 outline-none bg-gray-300 rounded-lg ring-green-600 focus:ring-2' name='password' value={formData.password} onChange={handleChange} />
                <input type="password" placeholder='Confirm password'  className='px-4 py-2 text-gray-800 outline-none bg-gray-300 rounded-lg ring-green-600 focus:ring-2' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
                {
                    error && <p className='text-red-600'>This is an error</p>
                }
                <button type='submit' className='bg-green-600 p-2 rounded-lg text-white hover:bg-green-700'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form