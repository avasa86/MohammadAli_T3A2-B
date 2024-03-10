import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [drugId, setDrugId] = useState(''); // State to store the drug ID from user input
  const [drugInfo, setDrugInfo] = useState(null); // State to store the fetched drug information

  useEffect(() => {
    if (drugId) {
      // Fetch drug information from the Express.js server
      fetch(/api/drugs/${drugId})
        .then((response) => response.json())
        .then((data) => setDrugInfo(data))
        .catch((error) => console.error('Error fetching drug information:', error));
    }
  }, [drugId]);

  return (
    <div className="App">
      <h1>Chemist Information Portal</h1>
      <label>
        Enter Drug ID:
        <input type="text" value={drugId} onChange={(e) => setDrugId(e.target.value)} />
      </label>
      {drugInfo && (
        <div>
          <h2>{drugInfo.name}</h2>
          <p>Dosage: {drugInfo.dosage}</p>
          <p>Precautions: {drugInfo.precautions}</p>
          {/* Add more drug information properties here */}
        </div>
      )}
    </div>
  );
}

export default App;