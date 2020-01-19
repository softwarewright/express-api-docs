const router = require("express").Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    LoginModel:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: 'foo@gmail.com'
 *          pattern: .+@.+\..+
 *        password:
 *          type: string
 *          example: 'qwertyu1'
 *      required:
 *        - username
 *        - password
*/

/**
 * @swagger
 * /login:
 *  post:
 *    tags:
 *      - login
 *    summary: Login endpoint for username and password combination
 *    requestBody:
 *      description: The username and password of the user
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/LoginModel'
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: User login is successful
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
*/
router.post("/", (req, res) => {
  const {username, password} = req.body;

  if(username === "foo@gmail.com" && password === "qwertyu1") {
    return res.send({ success: true});
  }

  res.sendStatus(401);
});

module.exports = router;
