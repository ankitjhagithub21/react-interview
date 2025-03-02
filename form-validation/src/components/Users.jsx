import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({users}) => {

  return (
   <div className='h-screen w-full bg-gray-800'>
    <Link to={"/"} className='m-5 inline-block bg-green-600 text-white rounded-lg px-4 py-2'>Back to home</Link>
    
     <div className='max-w-6xl mx-auto w-full px-5  py-12 grid md:grid-cols-3 grid-cols-1 gap-5'>
        {
          users.length==0 ? <p className='text-white'>No user found.</p> :  users.map((user,idx)=>{
                return <div key={idx} className='rounded-lg shadow-xl border text-white px-3'>
                    <h1 className='my-2'>Name : {user.fullName}</h1>
                    <hr />
                    <p className='my-2'>Email : {user.email}</p>
                    <hr />
                    <p className='my-2'>Password : {user.password}</p>
                </div>
            })
        }
    </div>
   </div>
  )
}

export default Users