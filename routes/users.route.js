const router = require('express').Router();
const jwt = require('../middleware/jwt.middleware');
const users = [
    {
        name: 'Software Wright',
        username: 'softwarebywright@gmail.com'
    },
    {
        name: 'Rick James',
        username: 'rick.james@gmail.com'
    },
    {
        name: 'John Taylor',
        username: 'john.taylor@gmail.com'
    }
].map((u, id) => ({ ...u, id: `${id}` }))


/**
 * @swagger
 * components:
 *  schemas:
 *    UserModel:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          example: '0'
 *        username:
 *          type: string
 *          example: 'foo@email.com'
 *        name:
 *          type: string
 *          example: 'Foo Bar'
*/

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    summary: Retrieves a user by a given id
 *    security:
 *      - BearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the user you are attempting to retrieve
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: User found with the given id parameter
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/UserModel'
 *      401:
 *        description: Unauthorized
 *      404:
 *          description: User with this id has not been found
 */
router.get('/:id', jwt, (req, res) => {
    const user = users.find(u => u.id === req.params.id);

    if (user) {
        res.send(user);
    } else {
        res.sendStatus(404);
    }
});

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Retrieves all users
 *    produces:
 *      - application/json
 *    security:
 *      - BearerAuth: []
 *    responses:
 *      200:
 *        description: Users found
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UserModel'
 *      401:
 *        description: Unauthorized
*/
router.get('/', jwt, (req, res) => {
    return res.send(users);
});

module.exports = router;
