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
 *    CreateUserModel:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: 'foo@email.com'
 *        name:
 *          type: string
 *          example: 'Foo Bar'
 * 
 *    UserModel:
 *      allOf:
 *        - $refs: '#/components/schemas/CreateUserModel'
 *        - type: object
 *          properties:
 *            id:
 *              type: string
 *              example: '0'
*/

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    tags:
 *      - user
 *    summary: Retrieves a user by a given id
 *    operationalId: getUserId
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
 *    tags:
 *      - user
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

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *      - user
 *    summary: Create a user
 *    operationalId: createUser
 *    requestBody:
 *      required: true
 *      description: A JSON Object to create a user
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateUserModel'
 *    responses:
 *      201:
 *        description: User create endpoint
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  description: ID of the created user
 *                  example: '0'
 *        links:
 *          GetUserByUserId:
 *            operationId: getUserId
 *            parameters:
 *              id: $response.body#/id
 *            description: The `id` value returned by creating a user
 *      401:
 *        description: Unauthorized
*/
router.post('/', (req ,res) => {
  const id = users.length;
  users.push(req.body);

  res.send({ id });
})


module.exports = router;
