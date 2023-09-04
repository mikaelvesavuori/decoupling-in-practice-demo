import { PathParams, rest, RestRequest } from 'msw';

//const SWAPI_PEOPLE_ENDPOINT = `https://swapi.dev/api/people/*`;
const SWAPI_PEOPLE_ENDPOINT_LUKE = `https://swapi.dev/api/people/1`;
const SWAPI_PEOPLE_ENDPOINT_SEBULBA = `https://swapi.dev/api/people/41`;

import lukeResponse from '../../testdata/response-swapi-people-luke-skywalker.json';
import sebulbaResponse from '../../testdata/response-swapi-people-sebulba.json';

const MsgSetMswInterceptedDataFromApi = (url: string) =>
  `[MSW] - Mocking intercepted fetch request data from API: ${url}`;

const logInterceptedRequest = (req: RestRequest<any, PathParams>) =>
  console.log(MsgSetMswInterceptedDataFromApi(req.url.href));

export const handlers = [
  rest.get(SWAPI_PEOPLE_ENDPOINT_LUKE, (req, res, ctx) => {
    logInterceptedRequest(req);
    return res(ctx.status(200), ctx.json(lukeResponse));
  }),

  rest.get(SWAPI_PEOPLE_ENDPOINT_SEBULBA, (req, res, ctx) => {
    logInterceptedRequest(req);
    return res(ctx.status(200), ctx.json(sebulbaResponse));
  })
];
