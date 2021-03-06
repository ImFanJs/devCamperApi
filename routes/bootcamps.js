const router = require('express').Router();
const { getBootcamps, createBootcamp, updateBootcamp, deleteBootcamp, getBootcamp } = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

module.exports = router;
