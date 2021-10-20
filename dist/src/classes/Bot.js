"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Constants_1 = require("../utils/Constants");
const Logger_js_1 = __importDefault(require("../utils/Logger.js"));
const Config_1 = __importDefault(require("../utils/Config"));
const graceful_fs_1 = __importDefault(require("graceful-fs"));
class Bot {
    token;
    options;
    client;
    config;
    constructor() {
        this.token = Constants_1.token;
        this.options = Constants_1.options;
        this.config = Config_1.default;
        this.client = new discord_js_1.Client(this.options);
        //@ts-ignore
        this.client.commands = new discord_js_1.Collection();
        this.client.on("warn", (warn) => {
            Logger_js_1.default.warn(warn);
        });
        this.client.on("error", (error) => {
            Logger_js_1.default.error(error);
        });
        const cmds = [];
        const cmdFiles = graceful_fs_1.default.readdirSync(this.config.commandsFolder).filter(f => f.endsWith('.js'));
        const evnFiles = graceful_fs_1.default.readdirSync(this.config.eventsFolder).filter(f => f.endsWith('.js'));
        for (const file of cmdFiles) {
            const cmd = require(`${this.config.commandsFolder}/${file}`);
            cmds.push(cmd.default.data.toJSON());
            //@ts-ignore
            this.client.commands.set(cmd.default.data.name, cmd);
        }
        for (const file of evnFiles) {
            const evn = require(`${this.config.eventsFolder}/${file}`);
            if (evn.default.once) {
                this.client.once(evn.default.name, async (...args) => {
                    await evn.default.run(...args);
                });
            }
            else {
                this.client.on(evn.default.name, async (...args) => {
                    await evn.default.run(this.client, ...args);
                });
            }
        }
        this.client.login(this.token);
    }
}
exports.default = Bot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsYXNzZXMvQm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQStEO0FBRS9ELGtEQUFvRDtBQUNwRCxtRUFBd0M7QUFDeEMsNkRBQXFDO0FBRXJDLDhEQUE2QjtBQUU3QixNQUFxQixHQUFHO0lBQ3BCLEtBQUssQ0FBUztJQUNkLE9BQU8sQ0FBZ0I7SUFDdkIsTUFBTSxDQUFTO0lBQ2YsTUFBTSxDQUFhO0lBRW5CO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG1CQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZDLFlBQVk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUNwQyxtQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ25DLG1CQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQWUsRUFBRSxDQUFDO1FBQzVCLE1BQU0sUUFBUSxHQUFHLHFCQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sUUFBUSxHQUFHLHFCQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXpGLEtBQUssTUFBTSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRXJDLFlBQVk7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDekIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUUzRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTtvQkFDakQsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFO29CQUMvQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNKO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSjtBQW5ERCxzQkFtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQsIENsaWVudE9wdGlvbnMsIENvbGxlY3Rpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuaW1wb3J0IHsgdG9rZW4sIG9wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL3V0aWxzL0xvZ2dlci5qc1wiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi91dGlscy9Db25maWdcIjtcclxuaW1wb3J0IENvbmZpZ1R5cGUgZnJvbSBcIi4uL2ludGVyZmFjZXMvQ29uZmlnVHlwZVwiO1xyXG5pbXBvcnQgZnMgZnJvbSAnZ3JhY2VmdWwtZnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90IHtcclxuICAgIHRva2VuOiBzdHJpbmc7XHJcbiAgICBvcHRpb25zOiBDbGllbnRPcHRpb25zO1xyXG4gICAgY2xpZW50OiBDbGllbnQ7XHJcbiAgICBjb25maWc6IENvbmZpZ1R5cGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgQ2xpZW50KHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuY2xpZW50LmNvbW1hbmRzID0gbmV3IENvbGxlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGllbnQub24oXCJ3YXJuXCIsICh3YXJuOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbG9nZ2VyLndhcm4od2Fybik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbGllbnQub24oXCJlcnJvclwiLCAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjbWRzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICAgICAgY29uc3QgY21kRmlsZXMgPSBmcy5yZWFkZGlyU3luYyh0aGlzLmNvbmZpZy5jb21tYW5kc0ZvbGRlcikuZmlsdGVyKGYgPT4gZi5lbmRzV2l0aCgnLmpzJykpO1xyXG4gICAgICAgIGNvbnN0IGV2bkZpbGVzID0gZnMucmVhZGRpclN5bmModGhpcy5jb25maWcuZXZlbnRzRm9sZGVyKS5maWx0ZXIoZiA9PiBmLmVuZHNXaXRoKCcuanMnKSk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBjbWRGaWxlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjbWQgPSByZXF1aXJlKGAke3RoaXMuY29uZmlnLmNvbW1hbmRzRm9sZGVyfS8ke2ZpbGV9YCk7XHJcbiAgICAgICAgICAgIGNtZHMucHVzaChjbWQuZGVmYXVsdC5kYXRhLnRvSlNPTigpKTtcclxuXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLmNsaWVudC5jb21tYW5kcy5zZXQoY21kLmRlZmF1bHQuZGF0YS5uYW1lLCBjbWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGV2bkZpbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2biA9IHJlcXVpcmUoYCR7dGhpcy5jb25maWcuZXZlbnRzRm9sZGVyfS8ke2ZpbGV9YCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZuLmRlZmF1bHQub25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQub25jZShldm4uZGVmYXVsdC5uYW1lLCBhc3luYyAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGV2bi5kZWZhdWx0LnJ1biguLi5hcmdzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQub24oZXZuLmRlZmF1bHQubmFtZSwgYXN5bmMgKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBldm4uZGVmYXVsdC5ydW4odGhpcy5jbGllbnQsIC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2xpZW50LmxvZ2luKHRoaXMudG9rZW4pO1xyXG4gICAgfVxyXG59Il19