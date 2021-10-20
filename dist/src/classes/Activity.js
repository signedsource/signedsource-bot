"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _importDynamic = new Function('modulePath', 'return import(modulePath)');
const fetch = (...args) => _importDynamic('node-fetch').then(({ default: fetch }) => fetch(...args));
class Activity {
    client;
    constructor(client) {
        this.client = client;
    }
    async create(id, channel) {
        return new Promise((res, rej) => {
            try {
                const response = fetch(`https://discord.com/api/v9/channels/${channel.id}/invites`, {
                    method: 'POST',
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: id,
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${this.client.token}`,
                        "Content-Type": "application/json",
                        "User-Agent": `discord.js/SignedSource`
                    }
                }).then(resp => resp.json());
                res(response);
            }
            catch (err) {
                rej(err);
            }
        });
    }
}
exports.default = Activity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xhc3Nlcy9BY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sY0FBYyxHQUFHLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0FBQy9FLE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUVyRyxNQUFxQixRQUFRO0lBQ3pCLE1BQU0sQ0FBUztJQUVmLFlBQWEsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUE2QixFQUFFLE9BQTJDO1FBRW5GLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDNUIsSUFBSTtnQkFDQSxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsdUNBQXVDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBRTtvQkFDaEYsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ2pCLE9BQU8sRUFBRSxLQUFLO3dCQUNkLFFBQVEsRUFBRSxDQUFDO3dCQUNYLHFCQUFxQixFQUFFLEVBQUU7d0JBQ3pCLFdBQVcsRUFBRSxDQUFDO3dCQUNkLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixRQUFRLEVBQUUsSUFBSTtxQkFDakIsQ0FBQztvQkFDRixPQUFPLEVBQUU7d0JBQ0wsZUFBZSxFQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQzNDLGNBQWMsRUFBRSxrQkFBa0I7d0JBQ2xDLFlBQVksRUFBRSx5QkFBeUI7cUJBQzFDO2lCQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFFN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWxDRCwyQkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQsIEd1aWxkQ2hhbm5lbCwgVGhyZWFkQ2hhbm5lbCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5jb25zdCBfaW1wb3J0RHluYW1pYyA9IG5ldyBGdW5jdGlvbignbW9kdWxlUGF0aCcsICdyZXR1cm4gaW1wb3J0KG1vZHVsZVBhdGgpJyk7IFxyXG5jb25zdCBmZXRjaCA9ICguLi5hcmdzKSA9PiBfaW1wb3J0RHluYW1pYygnbm9kZS1mZXRjaCcpLnRoZW4oKHsgZGVmYXVsdDogZmV0Y2ggfSkgPT4gZmV0Y2goLi4uYXJncykpOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2aXR5IHtcclxuICAgIGNsaWVudDogQ2xpZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChjbGllbnQ6IENsaWVudCkge1xyXG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZShpZDogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiwgY2hhbm5lbDogR3VpbGRDaGFubmVsIHwgVGhyZWFkQ2hhbm5lbCB8IGFueSkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGZldGNoKGBodHRwczovL2Rpc2NvcmQuY29tL2FwaS92OS9jaGFubmVscy8ke2NoYW5uZWwuaWR9L2ludml0ZXNgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhfYWdlOiA4NjQwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4X3VzZXM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldF9hcHBsaWNhdGlvbl9pZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldF90eXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb3Jhcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCb3QgJHt0aGlzLmNsaWVudC50b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJVc2VyLUFnZW50XCI6IGBkaXNjb3JkLmpzL1NpZ25lZFNvdXJjZWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmVqKGVycik7XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=