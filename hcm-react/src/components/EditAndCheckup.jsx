import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditAndCheckup = () => {
  const { caseno } = useParams();
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetch(`http://localhost/HCM-React/hcm-react/get_patient_data.php?caseno=${caseno}`);
        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setPatientData(data);
        }
      } catch (error) {
        setError("Failed to fetch patient data");
      }
    };

    fetchPatientData();
  }, [caseno]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit and Checkup for Case No. {caseno}</h2>
      <p>Name: {patientData.name}</p>
      <p>File No: {patientData.fileno}</p>
      <p>Gender: {patientData.gender}</p>
      <p>Age: {patientData.age}</p>
      <p>Address: {patientData.address}</p>
      <p>Mobile: {patientData.mobile}</p>
      {/* Add more patient details as needed */}
    </div>
  );
};

export default EditAndCheckup
