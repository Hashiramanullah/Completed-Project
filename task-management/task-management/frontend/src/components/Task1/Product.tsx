import React, { useEffect, useState } from 'react';

const ProductTable = ({ data_user }) => {
  const [userData, setUserData] = useState(data_user);

  useEffect(() => {
    setUserData(data_user);
  }, [data_user]);

  const CheckBoxChecked = (index) => {
    setUserData(prevData => 
      
      prevData.map((user, i) => 
        i === index ? { ...user, isSelected: !user.isSelected } : user
      )
    );
  };

  const DeleteColumn = () => {
    setUserData(prevData => prevData.filter(user => !user.isSelected));
  };

  return (
    <div>
      <div className="w-24 mt-6 ml-6 bg-red-600 p-2 rounded-lg">
        <button onClick={DeleteColumn}>Delete Selected</button>
      </div>

      <div className='flex justify-center items-center'>
        <div className='w-[50%] h-[60vh] bg-amber-400 mt-10'>
          <table className='w-[100%]'>
            <thead className='w-[100%] bg-red-500'>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((elem, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-red-200' : 'bg-red-300'}>
                  <td className='text-center'>{elem.name}</td>
                  <td className='text-center'>{elem.email}</td>
                  <td className='text-center'>
                    <input 
                      type="checkbox" 
                      checked={elem.isSelected || false}
                      onChange={() => CheckBoxChecked(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;