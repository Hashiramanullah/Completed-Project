import React, { useEffect } from 'react'

const TableHeader = () => {
 
  return (
    <div className='bg-orange-600 w-full h-16 p-10 flex justify-between items-center'>
        <div id="logo">
            <h1>Hello</h1>
        </div>
        <ul className='flex gap-4 cursor-pointer'>
            <li className='text-2xl'>Users</li>
            <li className='text-2xl'>Products</li>
            
        </ul>
        <div className="themeParent  bg-slate-600 p-2 rounded-lg">
            <button>DarkMode</button>
        </div>
    </div>
  )
}

export default TableHeader