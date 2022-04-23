"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    name: 'messageCreate',
    once: false,
    run: async (client, message) => {
        if (message.content.toLowerCase() === "!d bump") {
            message.reply({ embeds: [
                    new discord_js_1.MessageEmbed()
                        .setTitle(":x: | Error")
                        .setDescription("This ability is disabled, come back later!")
                        .setColor("RED")
                        .setTimestamp()
                ] });
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZUNyZWF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ldmVudHMvbWVzc2FnZUNyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEyRDtBQUUzRCxrQkFBZTtJQUNYLElBQUksRUFBRSxlQUFlO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFjLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO1FBQy9DLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRTtvQkFDcEIsSUFBSSx5QkFBWSxFQUFFO3lCQUNiLFFBQVEsQ0FBQyxhQUFhLENBQUM7eUJBQ3ZCLGNBQWMsQ0FBQyw0Q0FBNEMsQ0FBQzt5QkFDNUQsUUFBUSxDQUFDLEtBQUssQ0FBQzt5QkFDZixZQUFZLEVBQUU7aUJBQ3RCLEVBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDTCxDQUFDO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCwgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdtZXNzYWdlQ3JlYXRlJyxcclxuXHRvbmNlOiBmYWxzZSxcclxuXHRydW46IGFzeW5jIChjbGllbnQ6IENsaWVudCwgbWVzc2FnZTogTWVzc2FnZSkgPT4ge1xyXG5cdFx0aWYgKG1lc3NhZ2UuY29udGVudC50b0xvd2VyQ2FzZSgpID09PSBcIiFkIGJ1bXBcIikgeyAgICAgIFxyXG4gICAgICAgICAgICBtZXNzYWdlLnJlcGx5KHsgZW1iZWRzOiBbXHJcbiAgICAgICAgICAgICAgICBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0VGl0bGUoXCI6eDogfCBFcnJvclwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihcIlRoaXMgYWJpbGl0eSBpcyBkaXNhYmxlZCwgY29tZSBiYWNrIGxhdGVyIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRDb2xvcihcIlJFRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgICAgICBdfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19