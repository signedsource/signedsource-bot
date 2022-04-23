"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const graceful_fs_1 = __importDefault(require("graceful-fs"));
const path_1 = __importDefault(require("path"));
const Config_1 = __importDefault(require("./src/utils/Config"));
const Logger_js_1 = __importDefault(require("./src/utils/Logger.js"));
require('dotenv').config({ path: path_1.default.join(__dirname, "..", ".env") });
const token = process.env.TOKEN;
const cmds = [];
const cmdFiles = graceful_fs_1.default.readdirSync(Config_1.default.commandsDistFolder).filter(f => f.endsWith('.js'));
const rest = new rest_1.REST({ version: '9' }).setToken(token);
(async () => {
    try {
        for await (const file of cmdFiles) {
            const cmd = require(`${Config_1.default.commandsDistFolder}/${file}`);
            cmds.push(cmd.default.data.toJSON());
        }
        await rest.put(v9_1.Routes.applicationGuildCommands(Config_1.default.clientId, Config_1.default.guildId), { body: cmds });
        Logger_js_1.default.info("Slash Commands (/) have been deployed");
    }
    catch (error) {
        console.log(error);
        Logger_js_1.default.error(error);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZGVwbG95LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMENBQXVDO0FBQ3ZDLDZDQUE4QztBQUM5Qyw4REFBNkI7QUFDN0IsZ0RBQXdCO0FBRXhCLGdFQUF3QztBQUN4QyxzRUFBMkM7QUFFM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLE1BQU0sS0FBSyxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQ3hDLE1BQU0sSUFBSSxHQUFlLEVBQUUsQ0FBQztBQUM1QixNQUFNLFFBQVEsR0FBRyxxQkFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzFGLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXhELENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDUixJQUFJO1FBQ0EsSUFBSSxLQUFLLEVBQUUsTUFBTSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQy9CLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLGdCQUFNLENBQUMsa0JBQWtCLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDeEM7UUFFRCxNQUFNLElBQUksQ0FBQyxHQUFHLENBQ1YsV0FBTSxDQUFDLHdCQUF3QixDQUFDLGdCQUFNLENBQUMsUUFBUSxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2hFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUNqQixDQUFDO1FBRUYsbUJBQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztLQUN4RDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixtQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2QjtBQUNMLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRVNUIH0gZnJvbSBcIkBkaXNjb3JkanMvcmVzdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiZGlzY29yZC1hcGktdHlwZXMvdjlcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJncmFjZWZ1bC1mc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9zcmMvdXRpbHMvQ29uZmlnXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4vc3JjL3V0aWxzL0xvZ2dlci5qc1wiO1xyXG5cclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKHsgcGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcIi5lbnZcIikgfSk7XHJcbmNvbnN0IHRva2VuOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5UT0tFTjtcclxuY29uc3QgY21kczogQXJyYXk8YW55PiA9IFtdO1xyXG5jb25zdCBjbWRGaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGNvbmZpZy5jb21tYW5kc0Rpc3RGb2xkZXIpLmZpbHRlcihmID0+IGYuZW5kc1dpdGgoJy5qcycpKTtcclxuY29uc3QgcmVzdCA9IG5ldyBSRVNUKHsgdmVyc2lvbjogJzknIH0pLnNldFRva2VuKHRva2VuKTtcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgZmlsZSBvZiBjbWRGaWxlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjbWQgPSByZXF1aXJlKGAke2NvbmZpZy5jb21tYW5kc0Rpc3RGb2xkZXJ9LyR7ZmlsZX1gKTtcclxuICAgICAgICAgICAgY21kcy5wdXNoKGNtZC5kZWZhdWx0LmRhdGEudG9KU09OKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgcmVzdC5wdXQoXHJcbiAgICAgICAgICAgIFJvdXRlcy5hcHBsaWNhdGlvbkd1aWxkQ29tbWFuZHMoY29uZmlnLmNsaWVudElkLCBjb25maWcuZ3VpbGRJZCksXHJcbiAgICAgICAgICAgIHsgYm9keTogY21kcyB9LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiU2xhc2ggQ29tbWFuZHMgKC8pIGhhdmUgYmVlbiBkZXBsb3llZFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbn0pKCk7Il19