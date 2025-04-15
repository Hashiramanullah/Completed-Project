import React from 'react'

const Personal = ({handleChange,formData,nextStep}) => {
  return (
     <div>
              <h2>Step 1: Personal Details</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData?.personalDetails.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData?.personalDetails.email}
                onChange={handleChange}
              />
              <button onClick={nextStep}>Next</button>
            </div>
  )
}

export default Personal