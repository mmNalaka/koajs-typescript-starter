// External imports
import Koa from "Koa";

import config from "./config";
import middleware from "./middlewares";

const app = new Koa();

// Give the opportunity to passe configurations to the middlewares
const middleWareConfig = {};

app.use(middleware(middleWareConfig));

app.use(async ctx => {
  ctx.log.info("something else");
  ctx.body = "hello world this is koa";
});

const startServer = async () => {
  try {
    await app.listen(config.app.port, () => {
      console.log(`Listning on post ${config.app.port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
