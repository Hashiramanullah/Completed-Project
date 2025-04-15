import React, { useState } from "react";
import Personal from "./Personal";
import Payment from "./Payment";

export default function MultiStepForm() {
  // Step manage karne ke liye state
  const [step, setStep] = useState(1);

  // Form ke data ko store karne ke liye state
  const [formData, setFormData] = useState({
    personalDetails: {
      name: "",
      email: "",
    },
    paymentDetails: {
      cardNumber: "",
      expiryDate: "",
    },
    addressDetails: {
      address: "",
      city: "",
    },
  });

  // Input data handle karne ka function
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Har step ke data ko alag handle karte hain
    const currentStepData = getCurrentStepData();

    setFormData((prevData) => ({
      ...prevData,
      [currentStepData]: {
        ...prevData[currentStepData],
        [name]: value,
      },
    }));
  };

  // Current step ka data return karega
  const getCurrentStepData = () => {
    if (step === 1) return "personalDetails";
    if (step === 2) return "paymentDetails";
    if (step === 3) return "addressDetails";
  };

  // Form submit karne ka function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
  };

  // Step badhne ka function
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Step peeche jane ka function
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // UI render karna
  return (
    <div>
      <h1>Multi-Step Form</h1>

      {step === 1 && (
        <Personal handleChange={handleChange} formData={formData} nextStep={nextStep} />
      )}

      {step === 2 && (
        
        <Payment handleChange={handleChange} formData={formData} nextStep={nextStep} prevStep={prevStep} />
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Address Details</h2>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.addressDetails.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.addressDetails.city}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}
