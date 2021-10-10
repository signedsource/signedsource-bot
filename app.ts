import Koa from 'koa';
import logger from './src/utils/Logger.js';
import Bot from './src/classes/Bot.js';

(async () => {
    const app: Koa = new Koa();

    app.use(ctx => ctx.body = 'SignedSource');

    app.listen(3000);
    logger.info('Koa listening on https://localhost:3000');
})();

new Bot();