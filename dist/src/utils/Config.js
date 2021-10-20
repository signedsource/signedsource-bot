"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config = {
    eventsFolder: path_1.default.join(__dirname, "..", "events"),
    commandsFolder: path_1.default.join(__dirname, "..", "commands"),
    eventsDistFolder: "./src/events",
    commandsDistFolder: "./src/commands",
    guildId: "886754649741357109",
    clientId: "888483479447273482",
    inviteURL: "dsc.gg/signedsource",
    version: "5.2.1",
    roles: {
        member: "888495520820125716",
        staff: "888484518191829093",
        signedteam: "888487089623150633",
        publicist: "890721592789835827",
        ceo: "887083808992669766",
        asignableRoles: [
            "888512901562925066",
            "888514696104275968",
            "888513751932887041",
            "888543801587662878",
            "888519273838944298",
            "888510117157437461",
            "888508286436012132",
            "888505358807629824",
            "888531035082600499",
            "888512471554465802"
        ]
    },
    logos: {
        default: "https://media.discordapp.net/attachments/888939883471728690/889189571382886490/SignedSourceLogo.png?width=302&height=294"
    },
    channels: {
        verification: "888354587269009468",
        tickets: "888901284952956989",
        welcome: "888462553460654140",
        ticketsCategory: "888906855563272242",
        suggestions: "888537663085367337",
        commands: "889617163957203035",
        roles: "888755997433294848",
        privateVoice: "898977183710740571",
        privateVoiceCategory: "898976746035105813"
    },
    messages: {
        botStarted: "Bot is up",
        botStatus: "SignedSource %s - Official Bot",
        notEnoughPermissions: "You don't have the necessary permissions to run this command or this command isn't capable of running in this channel",
        minimumOfDeletedMessages: "You must provide 1 or more messages to delete",
        deletedMessages: "%s messages have been deleted.",
        welcomeTitle: "Welcome to SignedSource",
        welcome: "Welcome %s! Read <#888461544235622450> and <#888471817373761626>, if you want to give yourself a role go to <#888755997433294848> for more info.",
        goodbyeTitle: "Return soon!",
        goodbye: "Bye %s :(, we hope you return soon",
        supportTicketMessage: ":flag_es: Porfavor espera pacientemente a que un staff o miembro de SignedSource te atienda\n\n:flag_us: Please wait patiently until a staff or SignedSource member helps you",
        applyTicketMessage: ":flag_es: Porfavor, rellene las preguntas mencionadas en el siguiente mensaje para iniciar su postulación\n\n:flag_us: Please fill up the questions mentioned in the next message for initiating your apply.",
        questionsApply: [
            "**Complete the questions in relation of what rank you want to apply**\n",
            "__**SignedSource Team**__",
            "Requisites: ```md\nBe at least 13 years old.",
            "Must know at least the basics of coding",
            "Must know how to use Git & GitHub at least in a basic level```",
            "1. What is your GitHub username?: ",
            "2. How old are you?: ",
            "3. How much time avalible do you have / free time: ",
            "4. In what languages do you code?: ",
            "5. In terms of numbers, how would you rate you from 1 to 10?: ",
            "6. Why should we select you instead of others?:\n",
            "__**Staff Team**__",
            "Requisites: ```md\nHave 2 - 3 or more weeks in the server.",
            "Have at least 2000 messages in the server.",
            "Must be active",
            "Be at least 13 years old and be mature.```",
            "Why do you want to be a Staff in our community?: ",
            "How old are you?: ",
            "What are the basic commands to mute/warn someone and with what bot?: ",
            "What would you do if there is a raid on the server?: ",
            "What is your knowledge of tecnology?:",
            "What would you do if someone is flooding in general chat?: \n",
            "__***Your answers must be in Spanish (:flag_es:) or English (:flag_us:)***__"
        ],
        suggestionsEmbedTitle: "A new suggestion has been submited",
        suggestionsEmbedDescription: "**From:** __%s__\n**Suggestion:** __%s__",
        suggestionSent: "Your suggestion has been sent!",
        noExecutedCommands: "The user hasn't run any slash commands",
        isntVerified: "The user isn't verified",
        isVerified: "The user is verified",
        connectingGateway: "Connecting to the gateway, please wait",
        tokenGathered: "A token has been gathered, connecting through that token",
        botConnected: "The token provided was valid, the bot has been initialized",
        reminderOfBumpNotify: "Good, I will remind you when you can bump the server again!",
        canBumpAgain: "You can bump again the server! To bump it just type `!d bump` and it should be bumped!",
        cantBump: "The server can't be bumped now, please wait",
        skipCrashOnPresenceUpdate: "Someone changed their presence, but the bot didn't like it, skipping crash",
        welcomeUserCommand: [
            ":flag_us: Hey! Hope you are having a great day!",
            "As always, let me give you some useful tips to get started in the server:\n",
            "You should check <#888461544235622450> & <#888471817373761626> for better understanding of how the server works",
            "(being the rules channel the most important one, as our moderation is based on that)",
            "In case you want to apply to staff, or get support, don't hesitate to go to <#888901284952956989> and open a ticket\n\n",
            ":flag_es: Hey! Espero que estes teniendo un maravilloso día",
            "Como siempre, déjame darte unos tips para empezar en el servidor:\n",
            "Deberías revisar <#888461544235622450> y <#888471817373761626> para entender mejor como funciona el servidor",
            "(sobretodo el canal de reglas, el cual es el más importante, ya que nuestra moderación se basa de este)",
            "En caso de que quieras postularte al staff, o obtener ayuda / soporte, no lo pienses 2 veces y ve al canal <#888901284952956989> y abre un ticket"
        ]
    }
};
exports.default = config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUd4QixNQUFNLE1BQU0sR0FBZTtJQUN2QixZQUFZLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztJQUNsRCxjQUFjLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztJQUN0RCxnQkFBZ0IsRUFBRSxjQUFjO0lBQ2hDLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFFBQVEsRUFBRSxvQkFBb0I7SUFDOUIsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxPQUFPLEVBQUUsT0FBTztJQUNoQixLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLEtBQUssRUFBRSxvQkFBb0I7UUFDM0IsVUFBVSxFQUFFLG9CQUFvQjtRQUNoQyxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsY0FBYyxFQUFFO1lBQ1osb0JBQW9CO1lBQzdCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1NBQ2Q7S0FDSjtJQUNELEtBQUssRUFBRTtRQUNILE9BQU8sRUFBRSwwSEFBMEg7S0FDdEk7SUFDRCxRQUFRLEVBQUU7UUFDTixZQUFZLEVBQUUsb0JBQW9CO1FBQ2xDLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixlQUFlLEVBQUUsb0JBQW9CO1FBQ3JDLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLFlBQVksRUFBRSxvQkFBb0I7UUFDbEMsb0JBQW9CLEVBQUUsb0JBQW9CO0tBQzdDO0lBQ0QsUUFBUSxFQUFFO1FBQ04sVUFBVSxFQUFFLFdBQVc7UUFDdkIsU0FBUyxFQUFFLGdDQUFnQztRQUMzQyxvQkFBb0IsRUFBRSx1SEFBdUg7UUFDN0ksd0JBQXdCLEVBQUUsK0NBQStDO1FBQ3pFLGVBQWUsRUFBRSxnQ0FBZ0M7UUFDakQsWUFBWSxFQUFFLHlCQUF5QjtRQUN2QyxPQUFPLEVBQUUsa0pBQWtKO1FBQzNKLFlBQVksRUFBRSxjQUFjO1FBQzVCLE9BQU8sRUFBRSxvQ0FBb0M7UUFDN0Msb0JBQW9CLEVBQUUsK0tBQStLO1FBQ3JNLGtCQUFrQixFQUFFLDhNQUE4TTtRQUNsTyxjQUFjLEVBQUU7WUFDWix5RUFBeUU7WUFDekUsMkJBQTJCO1lBQzNCLDhDQUE4QztZQUM5Qyx5Q0FBeUM7WUFDekMsZ0VBQWdFO1lBQ2hFLG9DQUFvQztZQUNwQyx1QkFBdUI7WUFDdkIscURBQXFEO1lBQ3JELHFDQUFxQztZQUNyQyxnRUFBZ0U7WUFDaEUsbURBQW1EO1lBQ25ELG9CQUFvQjtZQUNwQiw0REFBNEQ7WUFDNUQsNENBQTRDO1lBQzVDLGdCQUFnQjtZQUNoQiw0Q0FBNEM7WUFDNUMsbURBQW1EO1lBQ25ELG9CQUFvQjtZQUNwQix1RUFBdUU7WUFDdkUsdURBQXVEO1lBQ3ZELHVDQUF1QztZQUN2QywrREFBK0Q7WUFDL0QsOEVBQThFO1NBQ2pGO1FBQ0QscUJBQXFCLEVBQUUsb0NBQW9DO1FBQzNELDJCQUEyQixFQUFFLDBDQUEwQztRQUN2RSxjQUFjLEVBQUUsZ0NBQWdDO1FBQ2hELGtCQUFrQixFQUFFLHdDQUF3QztRQUM1RCxZQUFZLEVBQUUseUJBQXlCO1FBQ3ZDLFVBQVUsRUFBRSxzQkFBc0I7UUFDbEMsaUJBQWlCLEVBQUUsd0NBQXdDO1FBQzNELGFBQWEsRUFBRSwwREFBMEQ7UUFDekUsWUFBWSxFQUFFLDREQUE0RDtRQUMxRSxvQkFBb0IsRUFBRSw2REFBNkQ7UUFDbkYsWUFBWSxFQUFFLHdGQUF3RjtRQUN0RyxRQUFRLEVBQUUsNkNBQTZDO1FBQ3ZELHlCQUF5QixFQUFFLDRFQUE0RTtRQUN2RyxrQkFBa0IsRUFBRTtZQUNoQixpREFBaUQ7WUFDakQsNkVBQTZFO1lBQzdFLGlIQUFpSDtZQUNqSCxzRkFBc0Y7WUFDdEYseUhBQXlIO1lBQ3pILDZEQUE2RDtZQUM3RCxxRUFBcUU7WUFDckUsOEdBQThHO1lBQzlHLHlHQUF5RztZQUN6RyxtSkFBbUo7U0FDdEo7S0FDSjtDQUNKLENBQUE7QUFFRCxrQkFBZSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgQ29uZmlnVHlwZSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9Db25maWdUeXBlXCI7XHJcblxyXG5jb25zdCBjb25maWc6IENvbmZpZ1R5cGUgPSB7XHJcbiAgICBldmVudHNGb2xkZXI6IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJldmVudHNcIiksXHJcbiAgICBjb21tYW5kc0ZvbGRlcjogcGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImNvbW1hbmRzXCIpLFxyXG4gICAgZXZlbnRzRGlzdEZvbGRlcjogXCIuL3NyYy9ldmVudHNcIixcclxuICAgIGNvbW1hbmRzRGlzdEZvbGRlcjogXCIuL3NyYy9jb21tYW5kc1wiLFxyXG4gICAgZ3VpbGRJZDogXCI4ODY3NTQ2NDk3NDEzNTcxMDlcIixcclxuICAgIGNsaWVudElkOiBcIjg4ODQ4MzQ3OTQ0NzI3MzQ4MlwiLFxyXG4gICAgaW52aXRlVVJMOiBcImRzYy5nZy9zaWduZWRzb3VyY2VcIixcclxuICAgIHZlcnNpb246IFwiNS4yLjFcIixcclxuICAgIHJvbGVzOiB7XHJcbiAgICAgICAgbWVtYmVyOiBcIjg4ODQ5NTUyMDgyMDEyNTcxNlwiLFxyXG4gICAgICAgIHN0YWZmOiBcIjg4ODQ4NDUxODE5MTgyOTA5M1wiLFxyXG4gICAgICAgIHNpZ25lZHRlYW06IFwiODg4NDg3MDg5NjIzMTUwNjMzXCIsXHJcbiAgICAgICAgcHVibGljaXN0OiBcIjg5MDcyMTU5Mjc4OTgzNTgyN1wiLFxyXG4gICAgICAgIGNlbzogXCI4ODcwODM4MDg5OTI2Njk3NjZcIixcclxuICAgICAgICBhc2lnbmFibGVSb2xlczogW1xyXG4gICAgICAgICAgICBcIjg4ODUxMjkwMTU2MjkyNTA2NlwiLFxyXG5cdFx0XHRcIjg4ODUxNDY5NjEwNDI3NTk2OFwiLFxyXG5cdFx0XHRcIjg4ODUxMzc1MTkzMjg4NzA0MVwiLFxyXG5cdFx0XHRcIjg4ODU0MzgwMTU4NzY2Mjg3OFwiLFxyXG5cdFx0XHRcIjg4ODUxOTI3MzgzODk0NDI5OFwiLFxyXG5cdFx0XHRcIjg4ODUxMDExNzE1NzQzNzQ2MVwiLFxyXG5cdFx0XHRcIjg4ODUwODI4NjQzNjAxMjEzMlwiLFxyXG5cdFx0XHRcIjg4ODUwNTM1ODgwNzYyOTgyNFwiLFxyXG5cdFx0XHRcIjg4ODUzMTAzNTA4MjYwMDQ5OVwiLFxyXG5cdFx0XHRcIjg4ODUxMjQ3MTU1NDQ2NTgwMlwiXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIGxvZ29zOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJodHRwczovL21lZGlhLmRpc2NvcmRhcHAubmV0L2F0dGFjaG1lbnRzLzg4ODkzOTg4MzQ3MTcyODY5MC84ODkxODk1NzEzODI4ODY0OTAvU2lnbmVkU291cmNlTG9nby5wbmc/d2lkdGg9MzAyJmhlaWdodD0yOTRcIlxyXG4gICAgfSxcclxuICAgIGNoYW5uZWxzOiB7XHJcbiAgICAgICAgdmVyaWZpY2F0aW9uOiBcIjg4ODM1NDU4NzI2OTAwOTQ2OFwiLFxyXG4gICAgICAgIHRpY2tldHM6IFwiODg4OTAxMjg0OTUyOTU2OTg5XCIsXHJcbiAgICAgICAgd2VsY29tZTogXCI4ODg0NjI1NTM0NjA2NTQxNDBcIixcclxuICAgICAgICB0aWNrZXRzQ2F0ZWdvcnk6IFwiODg4OTA2ODU1NTYzMjcyMjQyXCIsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnM6IFwiODg4NTM3NjYzMDg1MzY3MzM3XCIsXHJcbiAgICAgICAgY29tbWFuZHM6IFwiODg5NjE3MTYzOTU3MjAzMDM1XCIsXHJcbiAgICAgICAgcm9sZXM6IFwiODg4NzU1OTk3NDMzMjk0ODQ4XCIsXHJcbiAgICAgICAgcHJpdmF0ZVZvaWNlOiBcIjg5ODk3NzE4MzcxMDc0MDU3MVwiLFxyXG4gICAgICAgIHByaXZhdGVWb2ljZUNhdGVnb3J5OiBcIjg5ODk3Njc0NjAzNTEwNTgxM1wiXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBib3RTdGFydGVkOiBcIkJvdCBpcyB1cFwiLFxyXG4gICAgICAgIGJvdFN0YXR1czogXCJTaWduZWRTb3VyY2UgJXMgLSBPZmZpY2lhbCBCb3RcIixcclxuICAgICAgICBub3RFbm91Z2hQZXJtaXNzaW9uczogXCJZb3UgZG9uJ3QgaGF2ZSB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIHJ1biB0aGlzIGNvbW1hbmQgb3IgdGhpcyBjb21tYW5kIGlzbid0IGNhcGFibGUgb2YgcnVubmluZyBpbiB0aGlzIGNoYW5uZWxcIixcclxuICAgICAgICBtaW5pbXVtT2ZEZWxldGVkTWVzc2FnZXM6IFwiWW91IG11c3QgcHJvdmlkZSAxIG9yIG1vcmUgbWVzc2FnZXMgdG8gZGVsZXRlXCIsXHJcbiAgICAgICAgZGVsZXRlZE1lc3NhZ2VzOiBcIiVzIG1lc3NhZ2VzIGhhdmUgYmVlbiBkZWxldGVkLlwiLFxyXG4gICAgICAgIHdlbGNvbWVUaXRsZTogXCJXZWxjb21lIHRvIFNpZ25lZFNvdXJjZVwiLFxyXG4gICAgICAgIHdlbGNvbWU6IFwiV2VsY29tZSAlcyEgUmVhZCA8Izg4ODQ2MTU0NDIzNTYyMjQ1MD4gYW5kIDwjODg4NDcxODE3MzczNzYxNjI2PiwgaWYgeW91IHdhbnQgdG8gZ2l2ZSB5b3Vyc2VsZiBhIHJvbGUgZ28gdG8gPCM4ODg3NTU5OTc0MzMyOTQ4NDg+IGZvciBtb3JlIGluZm8uXCIsXHJcbiAgICAgICAgZ29vZGJ5ZVRpdGxlOiBcIlJldHVybiBzb29uIVwiLFxyXG4gICAgICAgIGdvb2RieWU6IFwiQnllICVzIDooLCB3ZSBob3BlIHlvdSByZXR1cm4gc29vblwiLFxyXG4gICAgICAgIHN1cHBvcnRUaWNrZXRNZXNzYWdlOiBcIjpmbGFnX2VzOiBQb3JmYXZvciBlc3BlcmEgcGFjaWVudGVtZW50ZSBhIHF1ZSB1biBzdGFmZiBvIG1pZW1icm8gZGUgU2lnbmVkU291cmNlIHRlIGF0aWVuZGFcXG5cXG46ZmxhZ191czogUGxlYXNlIHdhaXQgcGF0aWVudGx5IHVudGlsIGEgc3RhZmYgb3IgU2lnbmVkU291cmNlIG1lbWJlciBoZWxwcyB5b3VcIixcclxuICAgICAgICBhcHBseVRpY2tldE1lc3NhZ2U6IFwiOmZsYWdfZXM6IFBvcmZhdm9yLCByZWxsZW5lIGxhcyBwcmVndW50YXMgbWVuY2lvbmFkYXMgZW4gZWwgc2lndWllbnRlIG1lbnNhamUgcGFyYSBpbmljaWFyIHN1IHBvc3R1bGFjacOzblxcblxcbjpmbGFnX3VzOiBQbGVhc2UgZmlsbCB1cCB0aGUgcXVlc3Rpb25zIG1lbnRpb25lZCBpbiB0aGUgbmV4dCBtZXNzYWdlIGZvciBpbml0aWF0aW5nIHlvdXIgYXBwbHkuXCIsXHJcbiAgICAgICAgcXVlc3Rpb25zQXBwbHk6IFtcclxuICAgICAgICAgICAgXCIqKkNvbXBsZXRlIHRoZSBxdWVzdGlvbnMgaW4gcmVsYXRpb24gb2Ygd2hhdCByYW5rIHlvdSB3YW50IHRvIGFwcGx5KipcXG5cIixcclxuICAgICAgICAgICAgXCJfXyoqU2lnbmVkU291cmNlIFRlYW0qKl9fXCIsXHJcbiAgICAgICAgICAgIFwiUmVxdWlzaXRlczogYGBgbWRcXG5CZSBhdCBsZWFzdCAxMyB5ZWFycyBvbGQuXCIsXHJcbiAgICAgICAgICAgIFwiTXVzdCBrbm93IGF0IGxlYXN0IHRoZSBiYXNpY3Mgb2YgY29kaW5nXCIsXHJcbiAgICAgICAgICAgIFwiTXVzdCBrbm93IGhvdyB0byB1c2UgR2l0ICYgR2l0SHViIGF0IGxlYXN0IGluIGEgYmFzaWMgbGV2ZWxgYGBcIixcclxuICAgICAgICAgICAgXCIxLiBXaGF0IGlzIHlvdXIgR2l0SHViIHVzZXJuYW1lPzogXCIsXHJcbiAgICAgICAgICAgIFwiMi4gSG93IG9sZCBhcmUgeW91PzogXCIsXHJcbiAgICAgICAgICAgIFwiMy4gSG93IG11Y2ggdGltZSBhdmFsaWJsZSBkbyB5b3UgaGF2ZSAvIGZyZWUgdGltZTogXCIsXHJcbiAgICAgICAgICAgIFwiNC4gSW4gd2hhdCBsYW5ndWFnZXMgZG8geW91IGNvZGU/OiBcIixcclxuICAgICAgICAgICAgXCI1LiBJbiB0ZXJtcyBvZiBudW1iZXJzLCBob3cgd291bGQgeW91IHJhdGUgeW91IGZyb20gMSB0byAxMD86IFwiLFxyXG4gICAgICAgICAgICBcIjYuIFdoeSBzaG91bGQgd2Ugc2VsZWN0IHlvdSBpbnN0ZWFkIG9mIG90aGVycz86XFxuXCIsXHJcbiAgICAgICAgICAgIFwiX18qKlN0YWZmIFRlYW0qKl9fXCIsXHJcbiAgICAgICAgICAgIFwiUmVxdWlzaXRlczogYGBgbWRcXG5IYXZlIDIgLSAzIG9yIG1vcmUgd2Vla3MgaW4gdGhlIHNlcnZlci5cIixcclxuICAgICAgICAgICAgXCJIYXZlIGF0IGxlYXN0IDIwMDAgbWVzc2FnZXMgaW4gdGhlIHNlcnZlci5cIixcclxuICAgICAgICAgICAgXCJNdXN0IGJlIGFjdGl2ZVwiLFxyXG4gICAgICAgICAgICBcIkJlIGF0IGxlYXN0IDEzIHllYXJzIG9sZCBhbmQgYmUgbWF0dXJlLmBgYFwiLFxyXG4gICAgICAgICAgICBcIldoeSBkbyB5b3Ugd2FudCB0byBiZSBhIFN0YWZmIGluIG91ciBjb21tdW5pdHk/OiBcIixcclxuICAgICAgICAgICAgXCJIb3cgb2xkIGFyZSB5b3U/OiBcIixcclxuICAgICAgICAgICAgXCJXaGF0IGFyZSB0aGUgYmFzaWMgY29tbWFuZHMgdG8gbXV0ZS93YXJuIHNvbWVvbmUgYW5kIHdpdGggd2hhdCBib3Q/OiBcIixcclxuICAgICAgICAgICAgXCJXaGF0IHdvdWxkIHlvdSBkbyBpZiB0aGVyZSBpcyBhIHJhaWQgb24gdGhlIHNlcnZlcj86IFwiLFxyXG4gICAgICAgICAgICBcIldoYXQgaXMgeW91ciBrbm93bGVkZ2Ugb2YgdGVjbm9sb2d5PzpcIixcclxuICAgICAgICAgICAgXCJXaGF0IHdvdWxkIHlvdSBkbyBpZiBzb21lb25lIGlzIGZsb29kaW5nIGluIGdlbmVyYWwgY2hhdD86IFxcblwiLFxyXG4gICAgICAgICAgICBcIl9fKioqWW91ciBhbnN3ZXJzIG11c3QgYmUgaW4gU3BhbmlzaCAoOmZsYWdfZXM6KSBvciBFbmdsaXNoICg6ZmxhZ191czopKioqX19cIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNFbWJlZFRpdGxlOiBcIkEgbmV3IHN1Z2dlc3Rpb24gaGFzIGJlZW4gc3VibWl0ZWRcIixcclxuICAgICAgICBzdWdnZXN0aW9uc0VtYmVkRGVzY3JpcHRpb246IFwiKipGcm9tOioqIF9fJXNfX1xcbioqU3VnZ2VzdGlvbjoqKiBfXyVzX19cIixcclxuICAgICAgICBzdWdnZXN0aW9uU2VudDogXCJZb3VyIHN1Z2dlc3Rpb24gaGFzIGJlZW4gc2VudCFcIixcclxuICAgICAgICBub0V4ZWN1dGVkQ29tbWFuZHM6IFwiVGhlIHVzZXIgaGFzbid0IHJ1biBhbnkgc2xhc2ggY29tbWFuZHNcIixcclxuICAgICAgICBpc250VmVyaWZpZWQ6IFwiVGhlIHVzZXIgaXNuJ3QgdmVyaWZpZWRcIixcclxuICAgICAgICBpc1ZlcmlmaWVkOiBcIlRoZSB1c2VyIGlzIHZlcmlmaWVkXCIsXHJcbiAgICAgICAgY29ubmVjdGluZ0dhdGV3YXk6IFwiQ29ubmVjdGluZyB0byB0aGUgZ2F0ZXdheSwgcGxlYXNlIHdhaXRcIixcclxuICAgICAgICB0b2tlbkdhdGhlcmVkOiBcIkEgdG9rZW4gaGFzIGJlZW4gZ2F0aGVyZWQsIGNvbm5lY3RpbmcgdGhyb3VnaCB0aGF0IHRva2VuXCIsXHJcbiAgICAgICAgYm90Q29ubmVjdGVkOiBcIlRoZSB0b2tlbiBwcm92aWRlZCB3YXMgdmFsaWQsIHRoZSBib3QgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcIixcclxuICAgICAgICByZW1pbmRlck9mQnVtcE5vdGlmeTogXCJHb29kLCBJIHdpbGwgcmVtaW5kIHlvdSB3aGVuIHlvdSBjYW4gYnVtcCB0aGUgc2VydmVyIGFnYWluIVwiLFxyXG4gICAgICAgIGNhbkJ1bXBBZ2FpbjogXCJZb3UgY2FuIGJ1bXAgYWdhaW4gdGhlIHNlcnZlciEgVG8gYnVtcCBpdCBqdXN0IHR5cGUgYCFkIGJ1bXBgIGFuZCBpdCBzaG91bGQgYmUgYnVtcGVkIVwiLFxyXG4gICAgICAgIGNhbnRCdW1wOiBcIlRoZSBzZXJ2ZXIgY2FuJ3QgYmUgYnVtcGVkIG5vdywgcGxlYXNlIHdhaXRcIixcclxuICAgICAgICBza2lwQ3Jhc2hPblByZXNlbmNlVXBkYXRlOiBcIlNvbWVvbmUgY2hhbmdlZCB0aGVpciBwcmVzZW5jZSwgYnV0IHRoZSBib3QgZGlkbid0IGxpa2UgaXQsIHNraXBwaW5nIGNyYXNoXCIsXHJcbiAgICAgICAgd2VsY29tZVVzZXJDb21tYW5kOiBbXHJcbiAgICAgICAgICAgIFwiOmZsYWdfdXM6IEhleSEgSG9wZSB5b3UgYXJlIGhhdmluZyBhIGdyZWF0IGRheSFcIixcclxuICAgICAgICAgICAgXCJBcyBhbHdheXMsIGxldCBtZSBnaXZlIHlvdSBzb21lIHVzZWZ1bCB0aXBzIHRvIGdldCBzdGFydGVkIGluIHRoZSBzZXJ2ZXI6XFxuXCIsXHJcbiAgICAgICAgICAgIFwiWW91IHNob3VsZCBjaGVjayA8Izg4ODQ2MTU0NDIzNTYyMjQ1MD4gJiA8Izg4ODQ3MTgxNzM3Mzc2MTYyNj4gZm9yIGJldHRlciB1bmRlcnN0YW5kaW5nIG9mIGhvdyB0aGUgc2VydmVyIHdvcmtzXCIsXHJcbiAgICAgICAgICAgIFwiKGJlaW5nIHRoZSBydWxlcyBjaGFubmVsIHRoZSBtb3N0IGltcG9ydGFudCBvbmUsIGFzIG91ciBtb2RlcmF0aW9uIGlzIGJhc2VkIG9uIHRoYXQpXCIsXHJcbiAgICAgICAgICAgIFwiSW4gY2FzZSB5b3Ugd2FudCB0byBhcHBseSB0byBzdGFmZiwgb3IgZ2V0IHN1cHBvcnQsIGRvbid0IGhlc2l0YXRlIHRvIGdvIHRvIDwjODg4OTAxMjg0OTUyOTU2OTg5PiBhbmQgb3BlbiBhIHRpY2tldFxcblxcblwiLFxyXG4gICAgICAgICAgICBcIjpmbGFnX2VzOiBIZXkhIEVzcGVybyBxdWUgZXN0ZXMgdGVuaWVuZG8gdW4gbWFyYXZpbGxvc28gZMOtYVwiLFxyXG4gICAgICAgICAgICBcIkNvbW8gc2llbXByZSwgZMOpamFtZSBkYXJ0ZSB1bm9zIHRpcHMgcGFyYSBlbXBlemFyIGVuIGVsIHNlcnZpZG9yOlxcblwiLFxyXG4gICAgICAgICAgICBcIkRlYmVyw61hcyByZXZpc2FyIDwjODg4NDYxNTQ0MjM1NjIyNDUwPiB5IDwjODg4NDcxODE3MzczNzYxNjI2PiBwYXJhIGVudGVuZGVyIG1lam9yIGNvbW8gZnVuY2lvbmEgZWwgc2Vydmlkb3JcIixcclxuICAgICAgICAgICAgXCIoc29icmV0b2RvIGVsIGNhbmFsIGRlIHJlZ2xhcywgZWwgY3VhbCBlcyBlbCBtw6FzIGltcG9ydGFudGUsIHlhIHF1ZSBudWVzdHJhIG1vZGVyYWNpw7NuIHNlIGJhc2EgZGUgZXN0ZSlcIixcclxuICAgICAgICAgICAgXCJFbiBjYXNvIGRlIHF1ZSBxdWllcmFzIHBvc3R1bGFydGUgYWwgc3RhZmYsIG8gb2J0ZW5lciBheXVkYSAvIHNvcG9ydGUsIG5vIGxvIHBpZW5zZXMgMiB2ZWNlcyB5IHZlIGFsIGNhbmFsIDwjODg4OTAxMjg0OTUyOTU2OTg5PiB5IGFicmUgdW4gdGlja2V0XCJcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiXX0=