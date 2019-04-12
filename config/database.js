const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,
  {useNewUrlParser: true}
);

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Eat My Shorts is live at ${process.env.DATABASE_URL}`)
})

