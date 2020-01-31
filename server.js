const express = require('express');
const connectDB = require('./config/db');
app = express();

app.use(function(req, res, next) {
  res.setHeader(
    'Access-Control-Expose-Headers',
    'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-*, x-auth-token, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/injury', require('./routes/injury'));
app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started ${PORT}`));
