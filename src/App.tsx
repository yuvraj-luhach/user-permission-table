import {useEffect, useState } from 'react'

import './App.css'
import UserTable from './components/users/UserTable'

import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Toaster position='bottom-center'/>
      <div className='max-w-screen-xl mx-auto p-5'>
        <div className='text-3xl mx-auto px-8 py-4 font-semibold'>
          Company Settings
          <div className='text-red-500 italic font-normal pt-3 text-sm'>
            Please reload the page if no data is visible and wait for a moment
          </div>
        </div>
        {/* tabs component */}

        {/* user table */}
        <UserTable />
      </div>
    </>
  )
}

export default App
