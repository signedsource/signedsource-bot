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
            return `${time} ${chalk_1.default.red(`[${log.level.toUpperCase()}]`)} ${message}`;
        else if (log.level === 'debug')
            return time + chalk_1.default.blue(`[${log.level.toUpperCase()}]`) + message;
        else
            return time + `[${log.level.toUpperCase()}]` + message;
    }),
    level: "info"
});
exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUUxQixzREFBOEI7QUFFOUIsTUFBTSxNQUFNLEdBQVcsaUJBQU8sQ0FBQyxZQUFZLENBQUM7SUFDeEMsVUFBVSxFQUFFLENBQUUsSUFBSSxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBRTtJQUNoRCxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxLQUFLLEdBQVEsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRSxDQUFDO1FBQzNFLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUMsZUFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDL0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFakMsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLE1BQU07WUFBRSxPQUFPLElBQUksR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO2FBQ3RHLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxNQUFNO1lBQUUsT0FBTyxJQUFJLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNoRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssT0FBTztZQUFFLE9BQU8sR0FBRyxJQUFJLElBQUksZUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDO2FBQ3BHLElBQUksR0FBRyxDQUFDLEtBQUssS0FBSyxPQUFPO1lBQUUsT0FBTyxJQUFJLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQzs7WUFDOUYsT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFDO0lBQzFELENBQUMsQ0FBQztJQUNGLEtBQUssRUFBRSxNQUFNO0NBQ2hCLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ3dpbnN0b24nO1xyXG5pbXBvcnQgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcclxuXHJcbmNvbnN0IGxvZ2dlcjogTG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xyXG4gICAgdHJhbnNwb3J0czogWyBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoKSBdLFxyXG4gICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5wcmludGYobG9nID0+IHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgdGltZXM6IGFueSA9IFsgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCkgXTtcclxuICAgICAgICB0aW1lcyA9IHRpbWVzLm1hcCh0ID0+IHsgXHJcbiAgICAgICAgICAgIGlmICh0IDwgMTApIHQgPSAnMCcgKyB0O1xyXG4gICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZSA9IGNoYWxrLnllbGxvdyhjaGFsay5pdGFsaWModGltZXMuam9pbihcIjpcIikpKSArIFwiIFwiO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHtsb2cubWVzc2FnZX1gO1xyXG5cclxuICAgICAgICBpZiAobG9nLmxldmVsID09PSAnaW5mbycpIHJldHVybiB0aW1lICsgY2hhbGsuZ3JlZW5CcmlnaHQoYFske2xvZy5sZXZlbC50b1VwcGVyQ2FzZSgpfV0gYCkgKyBtZXNzYWdlO1xyXG5cdFx0ZWxzZSBpZiAobG9nLmxldmVsID09PSAnd2FybicpIHJldHVybiB0aW1lICsgY2hhbGsueWVsbG93KGBbJHtsb2cubGV2ZWwudG9VcHBlckNhc2UoKX1dIGApICsgbWVzc2FnZTtcclxuXHRcdGVsc2UgaWYgKGxvZy5sZXZlbCA9PT0gJ2Vycm9yJykgcmV0dXJuIGAke3RpbWV9ICR7Y2hhbGsucmVkKGBbJHtsb2cubGV2ZWwudG9VcHBlckNhc2UoKX1dYCl9ICR7bWVzc2FnZX1gO1xyXG5cdFx0ZWxzZSBpZiAobG9nLmxldmVsID09PSAnZGVidWcnKSByZXR1cm4gdGltZSArIGNoYWxrLmJsdWUoYFske2xvZy5sZXZlbC50b1VwcGVyQ2FzZSgpfV1gKSArIG1lc3NhZ2U7XHJcblx0XHRlbHNlIHJldHVybiB0aW1lICsgYFske2xvZy5sZXZlbC50b1VwcGVyQ2FzZSgpfV1gICsgbWVzc2FnZTtcclxuICAgIH0pLFxyXG4gICAgbGV2ZWw6IFwiaW5mb1wiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyOyJdfQ==