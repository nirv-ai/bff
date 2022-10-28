# BFF

## core componets

- typescript
  - [tsc options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
  - [ts-node & nodemon blog](https://blog.logrocket.com/configuring-nodemon-with-typescript/)
- [yarn](https://yarnpkg.com/getting-started/recipes)
  - make sure you read this to get the sdks & plugins
- [express v 4](https://expressjs.com/en/starter/installing.html)
  - 5 is still in beta
  - [examples](https://github.com/expressjs/express/tree/master/examples)
  - [express json](https://expressjs.com/en/api.html#express.json)
    - replacement for body-parser.json
  - [express urlencoded](https://expressjs.com/en/api.html#express.urlencoded)
    - replacement for body-parser.urlencoded
  - [express error handling](https://expressjs.com/en/guide/error-handling.html)
- [husky](https://github.com/typicode/husky)
  - on dev make sure to run `yarn exec husky install`
- [postman](https://www.postman.com/downloads/)
- [nodemon](https://github.com/remy/nodemon)
- [helmet](https://github.com/helmetjs/helmet)
  - [docs](https://helmetjs.github.io/)
  - [csp evaluator](https://csp-evaluator.withgoogle.com/)
    - make sure to check this after modifying helmet options
- [cookie parser](https://github.com/expressjs/cookie-parser)
  - [cookie](https://github.com/jshttp/cookie)
- logger
  - [pino pretty](https://github.com/pinojs/pino-pretty)
  - [pino](https://github.com/pinojs/pino/blob/master/docs/web.md#pino-with-express)
  - [pino http](https://github.com/pinojs/pino-http#logger-options)
- [express-validator](https://github.com/express-validator/express-validator)
  - [docs](https://express-validator.github.io/docs/)
  - [use schemas](https://express-validator.github.io/docs/schema-validation.html)

### TODO

- [json web token](https://github.com/auth0/node-jsonwebtoken)
  - [good readme](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)
- [pg-promise](https://vitaly-t.github.io/pg-promise/)
- openapi
  - [swagger ui express](https://github.com/scottie1984/swagger-ui-express)
  - [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)
    - [v7 docs](https://github.com/Surnet/swagger-jsdoc/tree/v7/docs)
  - [good readme](https://javascript.plainenglish.io/how-to-implement-and-use-swagger-in-nodejs-d0b95e765245)
- [express session](https://github.com/expressjs/session)
- [express multer for form data](https://github.com/expressjs/multer)
  - set this up when accepting uploads from users, e.g. images
- [node rate limiter](https://github.com/animir/node-rate-limiter-flexible)
- [webpack]
  - TODO: have to set this up eventually

## todo

- [checkout this boilerplate](https://github.com/w3tecch/express-typescript-boilerplate/blob/develop/nodemon.json)
