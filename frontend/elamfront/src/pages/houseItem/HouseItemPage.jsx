import React from 'react';
import { useParams } from 'react-router-dom';

function HouseItemPage() {
  const { houseId } = useParams();

  return (
    <div style={{paddingTop: "100px"}}>
      <h1>House Details</h1>
      <p>House ID: {houseId}</p>
    </div>
  );
}

export default HouseItemPage;
