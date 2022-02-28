const models = require('../models');
const ListenerStory = models.ListenerStory;

// @desc   Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    // Find all
    const stories = await ListenerStory.findAll();
    console.log(stories.every((user) => user instanceof ListenerStory)); // true
    console.log('All stories:', JSON.stringify(stories, null, 2));
    res.send(stories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, msg: `Server Error: ${error}` });
  }
};

// @desc   Get single bootcamp
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Here is Bootcamp ${req.params.id}`,
    hello: req.hello,
  });
};

// @desc   Create a new bootcamp
// @route  POST /api/v1/bootcamps
// @access Private
exports.createBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Create new Bootcamp',
  });
};

// @desc   Update bootcamp
// @route  PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update Bootcamp ${req.params.id}`,
  });
};

// @desc   Delete bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `delete Bootcamp ${req.params.id}`,
  });
};
