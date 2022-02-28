const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      { name: 'bootcamp1', date: '02-02-2022' },
      { name: 'bootcamp2', date: '02-02-2022' },
      { name: 'bootcamp3', date: '02-02-2022' },
      { name: 'bootcamp4', date: '02-02-2022' },
    ],
  });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Here is Bootcamp ${req.params.id}`,
  });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Create new Bootcamp',
  });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update Bootcamp ${req.params.id}`,
  });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `delete Bootcamp ${req.params.id}`,
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
