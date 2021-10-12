import { Client, GuildChannel, ThreadChannel } from "discord.js";

const _importDynamic = new Function('modulePath', 'return import(modulePath)'); 
const fetch = (...args) => _importDynamic('node-fetch').then(({ default: fetch }) => fetch(...args)); 

export default class Activity {
    client: Client;

    constructor (client: Client) {
        this.client = client;
    }

    async create(id: string | number | boolean, channel: GuildChannel | ThreadChannel | any) {
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
            } catch (err) {
                rej(err);
            }    
        });
    }
}