"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const winston_1 = __importDefault(require("winston"));
const logger = winston_1.default.createLogger({
    transports: [new winston_1.default.transports.Console()],
    format: winston_1.default.format.printf(log => {
        const date = new Date();
        let times = [date.getHours(), date.getMinutes(), date.getSeconds()];
        times = times.map(t => {
            if (t < 10)
                t = '0' + t;
            return t;
        });
        const time = chalk_1.default.yellow(chalk_1.default.italic(times.join(":"))) + " ";
        const message = `${log.message}`;
        if (log.level === 'info')
            return time + chalk_1.default.greenBright(`[${log.level.toUpperCase()}] `) + message;
        else if (log.level === 'warn')
            return time + chalk_1.default.yellow(`[${log.level.toUpperCase()}] `) + message;
        else if (log.level === 'error')
            return time + chalk_1.default.red(`[${log.level.toUpperCase()}]`) + message;
        else if (log.level === 'debug')
            return time + chalk_1.default.blue(`[${log.level.toUpperCase()}]`) + message;
        else
            return time + `[${log.level.toUpperCase()}]` + message;
    }),
    level: "info"
});
exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUUxQixzREFBOEI7QUFFOUIsTUFBTSxNQUFNLEdBQVcsaUJBQU8sQ0FBQyxZQUFZLENBQUM7SUFDeEMsVUFBVSxFQUFFLENBQUUsSUFBSSxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBRTtJQUNoRCxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxLQUFLLEdBQVEsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRSxDQUFDO1FBQzNFLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUMsZUFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDL0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFakMsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLE1BQU07WUFBRSxPQUFPLElBQUksR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO2FBQ3RHLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxNQUFNO1lBQUUsT0FBTyxJQUFJLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNoRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssT0FBTztZQUFFLE9BQU8sSUFBSSxHQUFHLGVBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDN0YsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLE9BQU87WUFBRSxPQUFPLElBQUksR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDOztZQUM5RixPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxPQUFPLENBQUM7SUFDMUQsQ0FBQyxDQUFDO0lBQ0YsS0FBSyxFQUFFLE1BQU07Q0FDaEIsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnd2luc3Rvbic7XHJcbmltcG9ydCB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xyXG5cclxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XHJcbiAgICB0cmFuc3BvcnRzOiBbIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSgpIF0sXHJcbiAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LnByaW50Zihsb2cgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB0aW1lczogYW55ID0gWyBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSBdO1xyXG4gICAgICAgIHRpbWVzID0gdGltZXMubWFwKHQgPT4geyBcclxuICAgICAgICAgICAgaWYgKHQgPCAxMCkgdCA9ICcwJyArIHQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lID0gY2hhbGsueWVsbG93KGNoYWxrLml0YWxpYyh0aW1lcy5qb2luKFwiOlwiKSkpICsgXCIgXCI7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGAke2xvZy5tZXNzYWdlfWA7XHJcblxyXG4gICAgICAgIGlmIChsb2cubGV2ZWwgPT09ICdpbmZvJykgcmV0dXJuIHRpbWUgKyBjaGFsay5ncmVlbkJyaWdodChgWyR7bG9nLmxldmVsLnRvVXBwZXJDYXNlKCl9XSBgKSArIG1lc3NhZ2U7XHJcblx0XHRlbHNlIGlmIChsb2cubGV2ZWwgPT09ICd3YXJuJykgcmV0dXJuIHRpbWUgKyBjaGFsay55ZWxsb3coYFske2xvZy5sZXZlbC50b1VwcGVyQ2FzZSgpfV0gYCkgKyBtZXNzYWdlO1xyXG5cdFx0ZWxzZSBpZiAobG9nLmxldmVsID09PSAnZXJyb3InKSByZXR1cm4gdGltZSArIGNoYWxrLnJlZChgWyR7bG9nLmxldmVsLnRvVXBwZXJDYXNlKCl9XWApICsgbWVzc2FnZTtcclxuXHRcdGVsc2UgaWYgKGxvZy5sZXZlbCA9PT0gJ2RlYnVnJykgcmV0dXJuIHRpbWUgKyBjaGFsay5ibHVlKGBbJHtsb2cubGV2ZWwudG9VcHBlckNhc2UoKX1dYCkgKyBtZXNzYWdlO1xyXG5cdFx0ZWxzZSByZXR1cm4gdGltZSArIGBbJHtsb2cubGV2ZWwudG9VcHBlckNhc2UoKX1dYCArIG1lc3NhZ2U7XHJcbiAgICB9KSxcclxuICAgIGxldmVsOiBcImluZm9cIlxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjsiXX0=