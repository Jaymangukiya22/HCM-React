import React, { useState } from "react";
import Input from "./Input";
import CHECKUPandPRESCRIPTIONS from "./CHECKUPandPRESCRIPTIONS";

const ParentComponent = () => {
  const [l_id, setLId] = useState(null);

  const handleUpdateLId = (newLId) => {
    setLId(newLId);
  };

  return (
    <div>
      <Input onUpdateLId={handleUpdateLId} />
      <CHECKUPandPRESCRIPTIONS l_id={l_id} />
    </div>
  );
};

export default ParentComponent;
