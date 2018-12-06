import Koa from 'Koa'
import config from './config'

const app = new Koa()

const startServer = async () => {
  try {
    await app.listen(config.app.port, () => {
      console.log(`Listning on post ${config.app.port}`);
    })
  } catch (err) {
    console.log(err);
  }
}
