const express = require('express');

const {
  getBootcamps,
  getBootcamp,
  createBootCamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootCamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
