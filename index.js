const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 5000;

app.use(express.json({ extended: true }));

app.use('/api/pizza', require('./routes/pizza.routes'));

async function start() {
  try {
    await mongoose.connect('mongodb://localhost:27017/pizza-shop', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(PORT, () => console.log(`Server has been starting on port ${PORT} ...`));
  } catch (e) {
    console.log('Server error ', e.message);
    process.exit();
  }
}

start();
