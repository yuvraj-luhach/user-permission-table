import {useEffect, useState } from 'react'

import './App.css'
import UserTable from './components/users/UserTable'

import { Toaster } from "react-hot-toast";

function App() {

  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("http://localhost:4000/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  

  return (
    <>
      <Toaster position='bottom-center'/>
      <div className='max-w-screen-xl mx-auto p-5'>
        <div className='text-3xl mx-auto px-8 py-4 font-semibold'>
          Company Settings
        </div>
        {/* tabs component */}

        {/* user table */}
        <UserTable />
      </div>
    </>
  )
}

export default App
