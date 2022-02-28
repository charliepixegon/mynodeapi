const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Here is Bootcamp ${req.params.id}`,
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Create new Bootcamp',
  });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update Bootcamp ${req.params.id}`,
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `delete Bootcamp ${req.params.id}`,
  });
});

module.exports = router;
