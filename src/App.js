import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { app } from './firebase';
import './App.css';

const db = getDatabase(app);

function App() {
  const [formData, setFormData] = useState({
    name: '',
    scholarNo: '',
    email: '',
    erdid: '',
    Branch:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   const userinfo=ref(db,'users');
   push(userinfo,formData);
    alert("Data submitted successfully!");
    setFormData({ name: '', scholarNo: '', email: '', erdNo: '',branch:'' }); // reset
  };

  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="scholarNo" placeholder="Scholar Number" value={formData.scholarNo} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
        <input type="text" name="erdNo" placeholder="ERD ID" value={formData.erdNo} onChange={handleChange} required />
        <input type="text" name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;