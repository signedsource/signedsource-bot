const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const activityHandler = async (client, channel, applicationId) => {
    return new Promise((res, rej) => {
        try {
            const response = fetch(`https://discord.com/api/v9/channels/${channel.id}/invites`, {
                method: 'POST',
                body: JSON.stringify({
                    max_age: 86400,
                    max_uses: 0,
                    target_application_id: applicationId,
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot ${client.token}`,
                    "Content-Type": "application/json"
                }
            }).then(resp => resp.json());

            res(response);
        } catch (err) {
            rej(err);
        }    
    });
}

module.exports = activityHandler;