"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const Bot_js_1 = __importDefault(require("./src/classes/Bot.js"));
const Logger_js_1 = __importDefault(require("./src/utils/Logger.js"));
(async () => {
    const app = new koa_1.default();
    app.use(ctx => ctx.body = 'SignedSource');
    app.listen(3000);
    Logger_js_1.default.info('Koa listening on https://localhost:3000');
})();
new Bot_js_1.default();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXNCO0FBRXRCLGtFQUF1QztBQUN2QyxzRUFBMkM7QUFFM0MsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNSLE1BQU0sR0FBRyxHQUFRLElBQUksYUFBRyxFQUFFLENBQUM7SUFFM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFFMUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixtQkFBTSxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFTCxJQUFJLGdCQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJztcclxuXHJcbmltcG9ydCBCb3QgZnJvbSAnLi9zcmMvY2xhc3Nlcy9Cb3QuanMnO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vc3JjL3V0aWxzL0xvZ2dlci5qcyc7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYXBwOiBLb2EgPSBuZXcgS29hKCk7XHJcblxyXG4gICAgYXBwLnVzZShjdHggPT4gY3R4LmJvZHkgPSAnU2lnbmVkU291cmNlJyk7XHJcblxyXG4gICAgYXBwLmxpc3RlbigzMDAwKTtcclxuICAgIGxvZ2dlci5pbmZvKCdLb2EgbGlzdGVuaW5nIG9uIGh0dHBzOi8vbG9jYWxob3N0OjMwMDAnKTtcclxufSkoKTtcclxuXHJcbm5ldyBCb3QoKTsiXX0=