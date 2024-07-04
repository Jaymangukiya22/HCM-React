import React from 'react';
import { useParams } from 'react-router-dom';

const EditAndCheckup = () => {
  const { caseno } = useParams();

  return (
    <div>
      <h2>Edit and Checkup for Case No. {caseno}</h2>
      {/* Add your edit and checkup components here */}
    </div>
  );
};

export default EditAndCheckup
