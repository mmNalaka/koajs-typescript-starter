import bodyParser from "koa-body";

import compose from "koa-compose";

import logger from "koa-pino-logger";

const imports = [logger];

export default (config: any) => {
  let configedMiddleWare: any = [bodyParser()];

  imports
    .filter(Boolean)
    .map(middleWare => middleWare(config))
    .forEach(middleWare => {
      configedMiddleWare.push(middleWare);
    });

  return compose(configedMiddleWare);
};
