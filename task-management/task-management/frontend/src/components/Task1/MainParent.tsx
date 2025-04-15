import React from 'react'
import UserTable from './UserTable'
import TableHeader from './TableHeader'
import ProductTable from './Product'

const MainParent = () => {
    const userData = [
        {name:"hashir", email:"h@gmail.com" , isSelected:false},
        {name:"Ali", email:"a@gmail.com" , isSelected:false},
        {name:"u1", email:"a@gmail.com" , isSelected:false},
        {name:"u2", email:"a@gmail.com" , isSelected:false},
        {name:"u8", email:"u@gmail.com" , isSelected:false},
        {name:"Subhan", email:"s@gmail.com" , isSelected:false}

    ]
  return (
   <div>
     <div className='w-[100%] h-[100%]  bg-slate-700'>
  <TableHeader />
    </div>
    <UserTable data_user={userData}/>
      <ProductTable data_user={userData}/>
   </div>
  )
}

export default MainParent