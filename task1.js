// Step 1: Bring the Express library into your file
const express = require('express');

// Step 2: Create your server application
const app = express();

// Step 3: Tell the server what to do when someone visits GET /
app.get('/', (req, res) => {
  res.send('Welcome to Stackly! 🚀');
});

// Step 4: Turn the server on so it listens for visitors on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
