const router = require('express').Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    HealthModel:
 *      type: object
 *      properties:
 *        success:
 *          type: boolean
*/

/**
 * @swagger
 * /health?forceFailure={forceFailure}:
 *  get:
 *    tags:
 *      - health
 *    parameters:
 *      - in: query
 *        name: forceFailure
 *        schema:
 *          type: boolean
 *          default: false
 *          
 *    summary: Check the health of the service
 *    responses:
 *      200:
 *        description: Health returned successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/HealthModel'
 *            example:
 *              success: true
 *      500:
 *        description: Health check returned unsuccessfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/HealthModel'
 *            example:
 *              success: false
*/
router.get("/", (req, res) => {

  if(req.query.forceFailure === "true") {
    return res.status(500).send({
      success: false
    });
  }

  res.send({
    success: true
  })
})

module.exports = router;
