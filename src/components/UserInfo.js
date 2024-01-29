import React, { useState } from 'react';

const UserForm = () => {
   // Use the useState hook to manage form data (name and age)
   const [formData, setFormData] = useState({ name: '', age: '' });

   // Function to handle input changes for both name and age
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     
     // Use spread operator to maintain the previous form data and update the changed field
     setFormData({ ...formData, [name]: value });
   };
 
   // Function to handle form submission (for this example, we're just logging the form data)
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('Form submitted:', formData);
   };
 
   // Ensure that the age input only accepts positive numbers
   const handleAgeInputChange = (e) => {
     const ageValue = e.target.value;
     // Check if the input is a positive number before updating the state
     if (/^\d+$/.test(ageValue) || ageValue === '') {
       setFormData({ ...formData, age: ageValue });
     }
   };
 
   return (
     <div>
       <form onSubmit={handleSubmit}>
         <label>
           Name:
           <input
             type="text"
             name="name"
             value={formData.name}
             onChange={handleInputChange}
           />
         </label>
         <br />
         <label>
           Age:
           <input
             type="number"
             name="age"
             value={formData.age}
             onChange={handleAgeInputChange}
           />
         </label>
         <br />
         <button type="submit">Submit</button>
       </form>
       <div>
         <h2>User Information:</h2>
         <p>Name: {formData.name}</p>
         <p>Age: {formData.age}</p>
       </div>
     </div>
   );
};

export default UserForm;
