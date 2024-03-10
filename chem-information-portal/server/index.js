const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/drugs/:id', (req, res) => {
  // Replace this with your logic to fetch drug information from the database
  const drugId = req.params.id;
  const drugInfo = {
    id: drugId,
    name: 'Sample Drug',
    dosage: '10mg',
    precautions: 'Avoid alcohol',
    // Add more properties as needed
  };
  res.json(drugInfo);
});

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});