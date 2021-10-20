"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_util_1 = __importDefault(require("node:util"));
const Config_1 = __importDefault(require("../utils/Config"));
const Logger_1 = __importDefault(require("../utils/Logger"));
exports.default = {
    name: 'ready',
    once: true,
    run: async (client) => {
        Logger_1.default.info(Config_1.default.messages.botStarted);
        client.user.setActivity(node_util_1.default.format(Config_1.default.messages.botStatus, `v${Config_1.default.version}`));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL3JlYWR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsMERBQTZCO0FBQzdCLDZEQUFxQztBQUNyQyw2REFBcUM7QUFFckMsa0JBQWU7SUFDWCxJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxJQUFJO0lBQ2IsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFjLEVBQUUsRUFBRTtRQUM3QixnQkFBTSxDQUFDLElBQUksQ0FBQyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxnQkFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0NBQ0QsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tIFwiY2hhbGtcIjtcclxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHV0aWwgZnJvbSBcIm5vZGU6dXRpbFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi91dGlscy9Db25maWdcIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vdXRpbHMvTG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAncmVhZHknLFxyXG4gICAgb25jZTogdHJ1ZSxcclxuXHRydW46IGFzeW5jIChjbGllbnQ6IENsaWVudCkgPT4ge1xyXG5cdFx0bG9nZ2VyLmluZm8oY29uZmlnLm1lc3NhZ2VzLmJvdFN0YXJ0ZWQpO1xyXG4gICAgICAgIGNsaWVudC51c2VyLnNldEFjdGl2aXR5KHV0aWwuZm9ybWF0KGNvbmZpZy5tZXNzYWdlcy5ib3RTdGF0dXMsIGB2JHtjb25maWcudmVyc2lvbn1gKSk7XHJcblx0fVxyXG59Il19