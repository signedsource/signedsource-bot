"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Constants_1 = require("../utils/Constants");
const logger_1 = __importDefault(require("../utils/logger"));
const Config_js_1 = __importDefault(require("../utils/Config.js"));
const graceful_fs_1 = __importDefault(require("graceful-fs"));
class Bot {
    constructor() {
        this.token = Constants_1.token;
        this.options = Constants_1.options;
        this.config = Config_js_1.default;
        this.client = new discord_js_1.Client(this.options);
        //@ts-ignore
        this.client.commands = new discord_js_1.Collection();
        this.client.on("warn", (warn) => {
            logger_1.default.warn(warn);
        });
        this.client.on("error", (error) => {
            logger_1.default.error(error);
        });
        const cmds = [];
        const cmdFiles = graceful_fs_1.default.readdirSync(this.config.commandsFolder).filter(f => f.endsWith('.js'));
        const evnFiles = graceful_fs_1.default.readdirSync(this.config.eventsFolder).filter(f => f.endsWith('.js'));
        for (const file of cmdFiles) {
            const cmd = require(`${this.config.commandsFolder}/${file}`);
            try {
                cmds.push(cmd.data.toJSON());
            }
            catch (err) {
                cmds.push(cmd.data);
            }
            //@ts-ignore
            this.client.commands.set(cmd.data.name, cmd);
        }
        for (const file of evnFiles) {
            const evn = require(`${this.config.eventsFolder}/${file}`);
            if (evn.once) {
                this.client.once(evn.name, async (...args) => await evn.run(...args));
            }
            else {
                this.client.on(evn.name, async (...args) => await evn.run(this.client, ...args));
            }
        }
    }
}
exports.default = Bot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsYXNzZXMvQm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQStEO0FBRS9ELGtEQUFvRDtBQUNwRCw2REFBcUM7QUFDckMsbUVBQXdDO0FBRXhDLDhEQUE2QjtBQUU3QixNQUFxQixHQUFHO0lBTXBCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG1CQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZDLFlBQVk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUNwQyxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ25DLGdCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sUUFBUSxHQUFHLHFCQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sUUFBUSxHQUFHLHFCQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXpGLEtBQUssTUFBTSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0QsSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUNoQztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1lBRUQsWUFBWTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDtRQUVELEtBQUssTUFBTSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDM0QsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDcEY7U0FDSjtJQUNMLENBQUM7Q0FDSjtBQWhERCxzQkFnREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQsIENsaWVudE9wdGlvbnMsIENvbGxlY3Rpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuaW1wb3J0IHsgdG9rZW4sIG9wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL3V0aWxzL2xvZ2dlclwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi91dGlscy9Db25maWcuanNcIjtcclxuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gXCIuLi91dGlscy9Db25maWcuanNcIjtcclxuaW1wb3J0IGZzIGZyb20gJ2dyYWNlZnVsLWZzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdCB7XHJcbiAgICB0b2tlbjogc3RyaW5nO1xyXG4gICAgb3B0aW9uczogQ2xpZW50T3B0aW9ucztcclxuICAgIGNsaWVudDogQ2xpZW50O1xyXG4gICAgY29uZmlnOiBDb25maWdUeXBlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IENsaWVudCh0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLmNsaWVudC5jb21tYW5kcyA9IG5ldyBDb2xsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xpZW50Lm9uKFwid2FyblwiLCAod2Fybjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKHdhcm4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xpZW50Lm9uKFwiZXJyb3JcIiwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgY21kcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNtZEZpbGVzID0gZnMucmVhZGRpclN5bmModGhpcy5jb25maWcuY29tbWFuZHNGb2xkZXIpLmZpbHRlcihmID0+IGYuZW5kc1dpdGgoJy5qcycpKTtcclxuICAgICAgICBjb25zdCBldm5GaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHRoaXMuY29uZmlnLmV2ZW50c0ZvbGRlcikuZmlsdGVyKGYgPT4gZi5lbmRzV2l0aCgnLmpzJykpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgY21kRmlsZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY21kID0gcmVxdWlyZShgJHt0aGlzLmNvbmZpZy5jb21tYW5kc0ZvbGRlcn0vJHtmaWxlfWApO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY21kcy5wdXNoKGNtZC5kYXRhLnRvSlNPTigpKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjbWRzLnB1c2goY21kLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLmNsaWVudC5jb21tYW5kcy5zZXQoY21kLmRhdGEubmFtZSwgY21kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBldm5GaWxlcykge1xyXG4gICAgICAgICAgICBjb25zdCBldm4gPSByZXF1aXJlKGAke3RoaXMuY29uZmlnLmV2ZW50c0ZvbGRlcn0vJHtmaWxlfWApO1xyXG4gICAgICAgICAgICBpZiAoZXZuLm9uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50Lm9uY2UoZXZuLm5hbWUsIGFzeW5jICguLi5hcmdzKSA9PiBhd2FpdCBldm4ucnVuKC4uLmFyZ3MpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50Lm9uKGV2bi5uYW1lLCBhc3luYyAoLi4uYXJncykgPT4gYXdhaXQgZXZuLnJ1bih0aGlzLmNsaWVudCwgLi4uYXJncykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19