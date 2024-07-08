import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Input = () => {
  const { caseno } = useParams();
  const [patientData, setPatientData] = useState({
    name: '',
    gender: '',
    age: '',
    date: '',
    marital: '',
    complexion: '',
    constitution: '',
    address: '',
    mobile: '',
    occupation: '',
    child: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch(`http://localhost/HCM-React/hcm-react/get_patient_data.php?caseno=${caseno}`);
        const data = await response.json();
        if (data.error) {
          setMessage(data.error);
        } else {
          setPatientData(data);
        }
      } catch (error) {
        setMessage('Failed to fetch patient data');
      }
    };

    fetchPatientData();
  }, [caseno]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/HCM-React/hcm-react/update_patient_data.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ caseno, ...patientData }),
      });
      const data = await response.json();
      if (data.error) {
        setMessage(data.error);
      } else {
        setMessage('Patient data updated successfully');
      }
    } catch (error) {
      setMessage('Failed to update patient data');
    }
  };

  return (
    <div>
      <h3>Personal Details</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            name="name"
            value={patientData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <div>
            <div className="inline p-2">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={patientData.gender === 'male'}
                onChange={handleChange}
              />
              <label className="p-1" htmlFor="male">Male</label>
            </div>
            <div className="inline p-2">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={patientData.gender === 'female'}
                onChange={handleChange}
              />
              <label className="p-1" htmlFor="female">Female</label>
            </div>
            <div className="inline p-2">
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={patientData.gender === 'other'}
                onChange={handleChange}
              />
              <label className="p-1" htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Age"
            name="age"
            value={patientData.age}
            onChange={handleChange}
          />
          <label htmlFor="age">Age</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Date"
            name="date"
            value={patientData.date}
            onChange={handleChange}
          />
          <label htmlFor="date">Date</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="marital"
            name="marital"
            value={patientData.marital}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
            <option value="divorced">Divorced</option>
            <option value="widow">Widow</option>
          </select>
          <label htmlFor="marital">Marital Status</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="complexion"
            placeholder="Complexion"
            name="complexion"
            value={patientData.complexion}
            onChange={handleChange}
          />
          <label htmlFor="complexion">Complexion</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="constitution"
            placeholder="Constitution"
            name="constitution"
            value={patientData.constitution}
            onChange={handleChange}
          />
          <label htmlFor="constitution">Constitution</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Enter address"
            id="address"
            name="address"
            value={patientData.address}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="address">Address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="mobile"
            placeholder="Mobile"
            name="mobile"
            value={patientData.mobile}
            onChange={handleChange}
          />
          <label htmlFor="mobile">Mobile</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="occupation"
            placeholder="Occupation"
            name="occupation"
            value={patientData.occupation}
            onChange={handleChange}
          />
          <label htmlFor="occupation">Occupation</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="child"
            placeholder="Number of Children"
            name="child"
            value={patientData.child}
            onChange={handleChange}
          />
          <label htmlFor="child">No. of Children</label>
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default Input;
