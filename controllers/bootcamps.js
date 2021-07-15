// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res) => {
  res.status(200).json({ success: true, msg: "Return all de bootcamps" });
};

// @desc    Get a bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Get bootcamp with id ${req.params.id}` });
};

// @desc    Create a new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res) => {
  res.status(201).json({ success: true, msg: "Create a new bootcamp" });
};

// @desc    Update a bootcamp
// @route   PUT /api/v1/bootcamps
// @access  Private
exports.updateBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp with id ${req.params.id}` });
};

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps
// @access  Private
exports.deleteBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp with id ${req.params.id}` });
};
