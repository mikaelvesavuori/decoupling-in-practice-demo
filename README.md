# Decoupling in Practice demo

Based on [Testable Systems Starter](https://github.com/mikaelvesavuori/testable-systems-starter), a sample project to use in testing workshops with the theme of testing and building "more testable" distributed (serverless) systems.

Relevant theoretical materials include:

- [Distributed Systems — Key Concepts & Patterns](https://engineering.klarna.com/distributed-systems-key-concepts-patterns-d4d5236b9816)
- [Fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)

Other good, practical material includes:

- [Understand Legacy Code](https://understandlegacycode.com) is great, see for example [A quick way to add tests when code has database or HTTP calls](https://understandlegacycode.com/blog/quick-way-to-add-tests-when-code-does-side-effects/)
- [You Don't Hate Mocks; You Hate Side-Effects](https://blog.thecodewhisperer.com/permalink/you-dont-hate-mocks-you-hate-side-effects)

_Based on the [minimalist-serverless-starter](https://github.com/mikaelvesavuori/minimalist-serverless-starter) project._

## Configurations

Configurations for ESLint and Prettier are reasonable starting points. The TypeScript config is very strict to get the most out of TS features. Serverless Framework is optimized ([ARM architecture](https://aws.amazon.com/blogs/aws/aws-lambda-functions-powered-by-aws-graviton2-processor-run-your-functions-on-arm-and-get-up-to-34-better-price-performance/); short log retention; no versioning), [CORS-activated](https://www.serverless.com/blog/cors-api-gateway-survival-guide/), and set to safer-than-default settings.

## Structure

The application starting point (the handler) is located at `src/handler.ts` and a first demonstrational test is at `tests/unit/demo.test.ts`. The rest of the tests and other "finished" materials are in the `__finished__` folder and might need updates to their import paths when you place them in the root again.

## Prerequisites

- Recent [Node.js](https://nodejs.org/en/) (ideally 18+) installed.
- Amazon Web Services (AWS) account with sufficient permissions so that you can deploy infrastructure. A naive but simple policy would be full rights for CloudWatch, Lambda, API Gateway, and S3.
- Ideally some experience with [Serverless Framework](https://www.serverless.com) as that's what we will use to deploy the service and infrastructure.

## Installation

Clone, fork, or download the repo as you normally would. Run `npm install`.

## Commands

- `npm start`: Run application locally
- `npm test`: Test the business/application logic with Jest
- `npm run build`: Package application with Serverless Framework
- `npm run deploy`: Deploy application to AWS with Serverless Framework
- `npm run teardown`: Remove stack from AWS

## Running locally

Using `npm start` you can start using the local endpoint `http://localhost:3000/greet` to call the service.

### Starting version

```bash
curl http://localhost:3000/start?id=1
```

### Greet

```bash
curl http://localhost:3000/greet?id=1 -H 'X-Client-Version: 2'
```

### Schema

```bash
curl http://localhost:3000/schema?version=2.0.0
```
