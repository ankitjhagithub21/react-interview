import React, { useState } from 'react'
import Form from './components/Form'
import {ToastContainer} from "react-toastify"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Users from './components/Users'
const App = () => {
  const [users,setUsers] = useState([])
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
       
        <Route path='/' element={<Form users={users} setUsers ={setUsers}/>}/>
        <Route path='/users' element={<Users users={users}/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App