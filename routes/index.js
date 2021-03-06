const router = require('express').Router();

const usersRoutes = require('./users.route');
const loginRoutes = require('./login.route');
const healthRoutes = require('./health.route');

/**
 * @swagger
 * components:
 *  securitySchemes:
 *    BearerAuth:
 *      type: http
 *      scheme: bearer
*/

router.use('/users', usersRoutes);
router.use('/login', loginRoutes);
router.use('/health', healthRoutes);

module.exports = router;
