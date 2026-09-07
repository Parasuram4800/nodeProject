const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());

// Define the Schema and Model first
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// Connect to MongoDB Atlas and insert sample users if empty
mongoose.connect('mongodb+srv://parsutati24_db_user:9CC9QQEpLL0uIwwp@cluster0.tpabsbz.mongodb.net/nodeDB?retryWrites=true&w=majority')
  .then(async () => {
    console.log('Connected to MongoDB successfully! ✅');

    // Check if the collection has any users
    const count = await User.countDocuments();
    if (count === 0) {
      await User.insertMany([
        { name: 'John', email: 'john@test.com', age: 25 },
        { name: 'David', email: 'david@test.com', age: 28 }
      ]);
      console.log('Sample users seeded into database! 🚀');
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error: ❌', err.message);
  });

// GET /users Route
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-_id -__v');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




