"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const Logger_js_1 = __importDefault(require("./src/utils/Logger.js"));
const Bot_js_1 = __importDefault(require("./src/classes/Bot.js"));
(async () => {
    const app = new koa_1.default();
    app.use(ctx => ctx.body = 'SignedSource');
    app.listen(3000);
    Logger_js_1.default.info('Koa listening on https://localhost:3000');
})();
new Bot_js_1.default();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXNCO0FBQ3RCLHNFQUEyQztBQUMzQyxrRUFBdUM7QUFHdkMsQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNSLE1BQU0sR0FBRyxHQUFRLElBQUksYUFBRyxFQUFFLENBQUM7SUFFM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFFMUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixtQkFBTSxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFTCxJQUFJLGdCQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJztcclxuaW1wb3J0IGxvZ2dlciBmcm9tICcuL3NyYy91dGlscy9Mb2dnZXIuanMnO1xyXG5pbXBvcnQgQm90IGZyb20gJy4vc3JjL2NsYXNzZXMvQm90LmpzJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuKGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGFwcDogS29hID0gbmV3IEtvYSgpO1xyXG5cclxuICAgIGFwcC51c2UoY3R4ID0+IGN0eC5ib2R5ID0gJ1NpZ25lZFNvdXJjZScpO1xyXG5cclxuICAgIGFwcC5saXN0ZW4oMzAwMCk7XHJcbiAgICBsb2dnZXIuaW5mbygnS29hIGxpc3RlbmluZyBvbiBodHRwczovL2xvY2FsaG9zdDozMDAwJyk7XHJcbn0pKCk7XHJcblxyXG5uZXcgQm90KCk7Il19