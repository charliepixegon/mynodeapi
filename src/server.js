const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const path = require('path');
const morgan = require('morgan');

// route config
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });

require('./config/sequelize');

const app = express();

// app.use(logger);
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.listen(process.env.PORT, () => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.PORT);

  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
