# Swagger Docs

- Swagger UI Express - https://www.npmjs.com/package/swagger-ui-express
- Swagger JSDocs - https://github.com/Surnet/swagger-jsdoc/blob/HEAD/docs/GETTING-STARTED.md
- OpenAPI documentation - https://swagger.io/docs/specification/about/

## Running the project

``` bash
npm install
npm start
# To run the project in watch mode use the following command
npm run watch
```

If you have [SAM Local](https://github.com/awslabs/aws-sam-cli) installed you can run the following command to run this as a local lambda

``` bash
npm run serverless
```

After running the project navigate to http://localhost:3000/api-docs to see the Swagger Docs for the test application.
