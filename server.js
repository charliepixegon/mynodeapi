const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

// route config
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(logger);

// mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.listen(process.env.PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
