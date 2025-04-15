import React from 'react'

const Payment = ({handleChange,formData,nextStep,prevStep}) => {
  return (
   <div>
             <h2>Step 2: Payment Details</h2>
             <input
               type="text"
               name="cardNumber"
               placeholder="Card Number"
               value={formData.paymentDetails.cardNumber}
               onChange={handleChange}
             />
             <input
               type="text"
               name="expiryDate"
               placeholder="Expiry Date"
               value={formData.paymentDetails.expiryDate}
               onChange={handleChange}
             />
             <button onClick={prevStep}>Back</button>
             <button onClick={nextStep}>Next</button>
           </div>
  )
}

export default Payment