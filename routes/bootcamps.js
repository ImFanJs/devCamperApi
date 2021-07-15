const router = require('express').Router();
const {
    getBootcamps,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
} = require('../controllers/bootcamps');

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').put(updateBootcamp).delete(deleteBootcamp);

module.exports = router;
