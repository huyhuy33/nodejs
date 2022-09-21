const Course = require('../models/Courses')
const { multipleMongooseToObject } = require('../../util/mongoose')


class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.json(course)
            })
            .catch(next)
    }
}

module.exports = new CourseController();
