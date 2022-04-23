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
        verificationCodeEmbedTitle: "Verification code",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUd4QixNQUFNLE1BQU0sR0FBZTtJQUN2QixZQUFZLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztJQUNsRCxjQUFjLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztJQUN0RCxnQkFBZ0IsRUFBRSxjQUFjO0lBQ2hDLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFFBQVEsRUFBRSxvQkFBb0I7SUFDOUIsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxPQUFPLEVBQUUsT0FBTztJQUNoQixLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLEtBQUssRUFBRSxvQkFBb0I7UUFDM0IsVUFBVSxFQUFFLG9CQUFvQjtRQUNoQyxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsY0FBYyxFQUFFO1lBQ1osb0JBQW9CO1lBQzdCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1NBQ2Q7S0FDSjtJQUNELEtBQUssRUFBRTtRQUNILE9BQU8sRUFBRSwwSEFBMEg7S0FDdEk7SUFDRCxRQUFRLEVBQUU7UUFDTixZQUFZLEVBQUUsb0JBQW9CO1FBQ2xDLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixlQUFlLEVBQUUsb0JBQW9CO1FBQ3JDLFdBQVcsRUFBRSxvQkFBb0I7UUFDakMsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLFlBQVksRUFBRSxvQkFBb0I7UUFDbEMsb0JBQW9CLEVBQUUsb0JBQW9CO0tBQzdDO0lBQ0QsUUFBUSxFQUFFO1FBQ04sVUFBVSxFQUFFLFdBQVc7UUFDdkIsU0FBUyxFQUFFLGdDQUFnQztRQUMzQyxvQkFBb0IsRUFBRSx1SEFBdUg7UUFDN0ksd0JBQXdCLEVBQUUsK0NBQStDO1FBQ3pFLGVBQWUsRUFBRSxnQ0FBZ0M7UUFDakQsWUFBWSxFQUFFLHlCQUF5QjtRQUN2QyxPQUFPLEVBQUUsa0pBQWtKO1FBQzNKLFlBQVksRUFBRSxjQUFjO1FBQzVCLE9BQU8sRUFBRSxvQ0FBb0M7UUFDN0Msb0JBQW9CLEVBQUUsK0tBQStLO1FBQ3JNLGtCQUFrQixFQUFFLDhNQUE4TTtRQUNsTyxjQUFjLEVBQUU7WUFDWix5RUFBeUU7WUFDekUsMkJBQTJCO1lBQzNCLDhDQUE4QztZQUM5Qyx5Q0FBeUM7WUFDekMsZ0VBQWdFO1lBQ2hFLG9DQUFvQztZQUNwQyx1QkFBdUI7WUFDdkIscURBQXFEO1lBQ3JELHFDQUFxQztZQUNyQyxnRUFBZ0U7WUFDaEUsbURBQW1EO1lBQ25ELG9CQUFvQjtZQUNwQiw0REFBNEQ7WUFDNUQsNENBQTRDO1lBQzVDLGdCQUFnQjtZQUNoQiw0Q0FBNEM7WUFDNUMsbURBQW1EO1lBQ25ELG9CQUFvQjtZQUNwQix1RUFBdUU7WUFDdkUsdURBQXVEO1lBQ3ZELHVDQUF1QztZQUN2QywrREFBK0Q7WUFDL0QsOEVBQThFO1NBQ2pGO1FBQ0QscUJBQXFCLEVBQUUsb0NBQW9DO1FBQzNELDJCQUEyQixFQUFFLDBDQUEwQztRQUN2RSxjQUFjLEVBQUUsZ0NBQWdDO1FBQ2hELDBCQUEwQixFQUFFLG1CQUFtQjtRQUMvQyxrQkFBa0IsRUFBRSx3Q0FBd0M7UUFDNUQsWUFBWSxFQUFFLHlCQUF5QjtRQUN2QyxVQUFVLEVBQUUsc0JBQXNCO1FBQ2xDLGlCQUFpQixFQUFFLHdDQUF3QztRQUMzRCxhQUFhLEVBQUUsMERBQTBEO1FBQ3pFLFlBQVksRUFBRSw0REFBNEQ7UUFDMUUsb0JBQW9CLEVBQUUsNkRBQTZEO1FBQ25GLFlBQVksRUFBRSx3RkFBd0Y7UUFDdEcsUUFBUSxFQUFFLDZDQUE2QztRQUN2RCx5QkFBeUIsRUFBRSw0RUFBNEU7UUFDdkcsa0JBQWtCLEVBQUU7WUFDaEIsaURBQWlEO1lBQ2pELDZFQUE2RTtZQUM3RSxpSEFBaUg7WUFDakgsc0ZBQXNGO1lBQ3RGLHlIQUF5SDtZQUN6SCw2REFBNkQ7WUFDN0QscUVBQXFFO1lBQ3JFLDhHQUE4RztZQUM5Ryx5R0FBeUc7WUFDekcsbUpBQW1KO1NBQ3RKO0tBQ0o7Q0FDSixDQUFBO0FBRUQsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IENvbmZpZ1R5cGUgZnJvbSBcIi4uL2ludGVyZmFjZXMvQ29uZmlnVHlwZVwiO1xyXG5cclxuY29uc3QgY29uZmlnOiBDb25maWdUeXBlID0ge1xyXG4gICAgZXZlbnRzRm9sZGVyOiBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiZXZlbnRzXCIpLFxyXG4gICAgY29tbWFuZHNGb2xkZXI6IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJjb21tYW5kc1wiKSxcclxuICAgIGV2ZW50c0Rpc3RGb2xkZXI6IFwiLi9zcmMvZXZlbnRzXCIsXHJcbiAgICBjb21tYW5kc0Rpc3RGb2xkZXI6IFwiLi9zcmMvY29tbWFuZHNcIixcclxuICAgIGd1aWxkSWQ6IFwiODg2NzU0NjQ5NzQxMzU3MTA5XCIsXHJcbiAgICBjbGllbnRJZDogXCI4ODg0ODM0Nzk0NDcyNzM0ODJcIixcclxuICAgIGludml0ZVVSTDogXCJkc2MuZ2cvc2lnbmVkc291cmNlXCIsXHJcbiAgICB2ZXJzaW9uOiBcIjUuMi4xXCIsXHJcbiAgICByb2xlczoge1xyXG4gICAgICAgIG1lbWJlcjogXCI4ODg0OTU1MjA4MjAxMjU3MTZcIixcclxuICAgICAgICBzdGFmZjogXCI4ODg0ODQ1MTgxOTE4MjkwOTNcIixcclxuICAgICAgICBzaWduZWR0ZWFtOiBcIjg4ODQ4NzA4OTYyMzE1MDYzM1wiLFxyXG4gICAgICAgIHB1YmxpY2lzdDogXCI4OTA3MjE1OTI3ODk4MzU4MjdcIixcclxuICAgICAgICBjZW86IFwiODg3MDgzODA4OTkyNjY5NzY2XCIsXHJcbiAgICAgICAgYXNpZ25hYmxlUm9sZXM6IFtcclxuICAgICAgICAgICAgXCI4ODg1MTI5MDE1NjI5MjUwNjZcIixcclxuXHRcdFx0XCI4ODg1MTQ2OTYxMDQyNzU5NjhcIixcclxuXHRcdFx0XCI4ODg1MTM3NTE5MzI4ODcwNDFcIixcclxuXHRcdFx0XCI4ODg1NDM4MDE1ODc2NjI4NzhcIixcclxuXHRcdFx0XCI4ODg1MTkyNzM4Mzg5NDQyOThcIixcclxuXHRcdFx0XCI4ODg1MTAxMTcxNTc0Mzc0NjFcIixcclxuXHRcdFx0XCI4ODg1MDgyODY0MzYwMTIxMzJcIixcclxuXHRcdFx0XCI4ODg1MDUzNTg4MDc2Mjk4MjRcIixcclxuXHRcdFx0XCI4ODg1MzEwMzUwODI2MDA0OTlcIixcclxuXHRcdFx0XCI4ODg1MTI0NzE1NTQ0NjU4MDJcIlxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICBsb2dvczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwiaHR0cHM6Ly9tZWRpYS5kaXNjb3JkYXBwLm5ldC9hdHRhY2htZW50cy84ODg5Mzk4ODM0NzE3Mjg2OTAvODg5MTg5NTcxMzgyODg2NDkwL1NpZ25lZFNvdXJjZUxvZ28ucG5nP3dpZHRoPTMwMiZoZWlnaHQ9Mjk0XCJcclxuICAgIH0sXHJcbiAgICBjaGFubmVsczoge1xyXG4gICAgICAgIHZlcmlmaWNhdGlvbjogXCI4ODgzNTQ1ODcyNjkwMDk0NjhcIixcclxuICAgICAgICB0aWNrZXRzOiBcIjg4ODkwMTI4NDk1Mjk1Njk4OVwiLFxyXG4gICAgICAgIHdlbGNvbWU6IFwiODg4NDYyNTUzNDYwNjU0MTQwXCIsXHJcbiAgICAgICAgdGlja2V0c0NhdGVnb3J5OiBcIjg4ODkwNjg1NTU2MzI3MjI0MlwiLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zOiBcIjg4ODUzNzY2MzA4NTM2NzMzN1wiLFxyXG4gICAgICAgIGNvbW1hbmRzOiBcIjg4OTYxNzE2Mzk1NzIwMzAzNVwiLFxyXG4gICAgICAgIHJvbGVzOiBcIjg4ODc1NTk5NzQzMzI5NDg0OFwiLFxyXG4gICAgICAgIHByaXZhdGVWb2ljZTogXCI4OTg5NzcxODM3MTA3NDA1NzFcIixcclxuICAgICAgICBwcml2YXRlVm9pY2VDYXRlZ29yeTogXCI4OTg5NzY3NDYwMzUxMDU4MTNcIlxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgYm90U3RhcnRlZDogXCJCb3QgaXMgdXBcIixcclxuICAgICAgICBib3RTdGF0dXM6IFwiU2lnbmVkU291cmNlICVzIC0gT2ZmaWNpYWwgQm90XCIsXHJcbiAgICAgICAgbm90RW5vdWdoUGVybWlzc2lvbnM6IFwiWW91IGRvbid0IGhhdmUgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyB0byBydW4gdGhpcyBjb21tYW5kIG9yIHRoaXMgY29tbWFuZCBpc24ndCBjYXBhYmxlIG9mIHJ1bm5pbmcgaW4gdGhpcyBjaGFubmVsXCIsXHJcbiAgICAgICAgbWluaW11bU9mRGVsZXRlZE1lc3NhZ2VzOiBcIllvdSBtdXN0IHByb3ZpZGUgMSBvciBtb3JlIG1lc3NhZ2VzIHRvIGRlbGV0ZVwiLFxyXG4gICAgICAgIGRlbGV0ZWRNZXNzYWdlczogXCIlcyBtZXNzYWdlcyBoYXZlIGJlZW4gZGVsZXRlZC5cIixcclxuICAgICAgICB3ZWxjb21lVGl0bGU6IFwiV2VsY29tZSB0byBTaWduZWRTb3VyY2VcIixcclxuICAgICAgICB3ZWxjb21lOiBcIldlbGNvbWUgJXMhIFJlYWQgPCM4ODg0NjE1NDQyMzU2MjI0NTA+IGFuZCA8Izg4ODQ3MTgxNzM3Mzc2MTYyNj4sIGlmIHlvdSB3YW50IHRvIGdpdmUgeW91cnNlbGYgYSByb2xlIGdvIHRvIDwjODg4NzU1OTk3NDMzMjk0ODQ4PiBmb3IgbW9yZSBpbmZvLlwiLFxyXG4gICAgICAgIGdvb2RieWVUaXRsZTogXCJSZXR1cm4gc29vbiFcIixcclxuICAgICAgICBnb29kYnllOiBcIkJ5ZSAlcyA6KCwgd2UgaG9wZSB5b3UgcmV0dXJuIHNvb25cIixcclxuICAgICAgICBzdXBwb3J0VGlja2V0TWVzc2FnZTogXCI6ZmxhZ19lczogUG9yZmF2b3IgZXNwZXJhIHBhY2llbnRlbWVudGUgYSBxdWUgdW4gc3RhZmYgbyBtaWVtYnJvIGRlIFNpZ25lZFNvdXJjZSB0ZSBhdGllbmRhXFxuXFxuOmZsYWdfdXM6IFBsZWFzZSB3YWl0IHBhdGllbnRseSB1bnRpbCBhIHN0YWZmIG9yIFNpZ25lZFNvdXJjZSBtZW1iZXIgaGVscHMgeW91XCIsXHJcbiAgICAgICAgYXBwbHlUaWNrZXRNZXNzYWdlOiBcIjpmbGFnX2VzOiBQb3JmYXZvciwgcmVsbGVuZSBsYXMgcHJlZ3VudGFzIG1lbmNpb25hZGFzIGVuIGVsIHNpZ3VpZW50ZSBtZW5zYWplIHBhcmEgaW5pY2lhciBzdSBwb3N0dWxhY2nDs25cXG5cXG46ZmxhZ191czogUGxlYXNlIGZpbGwgdXAgdGhlIHF1ZXN0aW9ucyBtZW50aW9uZWQgaW4gdGhlIG5leHQgbWVzc2FnZSBmb3IgaW5pdGlhdGluZyB5b3VyIGFwcGx5LlwiLFxyXG4gICAgICAgIHF1ZXN0aW9uc0FwcGx5OiBbXHJcbiAgICAgICAgICAgIFwiKipDb21wbGV0ZSB0aGUgcXVlc3Rpb25zIGluIHJlbGF0aW9uIG9mIHdoYXQgcmFuayB5b3Ugd2FudCB0byBhcHBseSoqXFxuXCIsXHJcbiAgICAgICAgICAgIFwiX18qKlNpZ25lZFNvdXJjZSBUZWFtKipfX1wiLFxyXG4gICAgICAgICAgICBcIlJlcXVpc2l0ZXM6IGBgYG1kXFxuQmUgYXQgbGVhc3QgMTMgeWVhcnMgb2xkLlwiLFxyXG4gICAgICAgICAgICBcIk11c3Qga25vdyBhdCBsZWFzdCB0aGUgYmFzaWNzIG9mIGNvZGluZ1wiLFxyXG4gICAgICAgICAgICBcIk11c3Qga25vdyBob3cgdG8gdXNlIEdpdCAmIEdpdEh1YiBhdCBsZWFzdCBpbiBhIGJhc2ljIGxldmVsYGBgXCIsXHJcbiAgICAgICAgICAgIFwiMS4gV2hhdCBpcyB5b3VyIEdpdEh1YiB1c2VybmFtZT86IFwiLFxyXG4gICAgICAgICAgICBcIjIuIEhvdyBvbGQgYXJlIHlvdT86IFwiLFxyXG4gICAgICAgICAgICBcIjMuIEhvdyBtdWNoIHRpbWUgYXZhbGlibGUgZG8geW91IGhhdmUgLyBmcmVlIHRpbWU6IFwiLFxyXG4gICAgICAgICAgICBcIjQuIEluIHdoYXQgbGFuZ3VhZ2VzIGRvIHlvdSBjb2RlPzogXCIsXHJcbiAgICAgICAgICAgIFwiNS4gSW4gdGVybXMgb2YgbnVtYmVycywgaG93IHdvdWxkIHlvdSByYXRlIHlvdSBmcm9tIDEgdG8gMTA/OiBcIixcclxuICAgICAgICAgICAgXCI2LiBXaHkgc2hvdWxkIHdlIHNlbGVjdCB5b3UgaW5zdGVhZCBvZiBvdGhlcnM/OlxcblwiLFxyXG4gICAgICAgICAgICBcIl9fKipTdGFmZiBUZWFtKipfX1wiLFxyXG4gICAgICAgICAgICBcIlJlcXVpc2l0ZXM6IGBgYG1kXFxuSGF2ZSAyIC0gMyBvciBtb3JlIHdlZWtzIGluIHRoZSBzZXJ2ZXIuXCIsXHJcbiAgICAgICAgICAgIFwiSGF2ZSBhdCBsZWFzdCAyMDAwIG1lc3NhZ2VzIGluIHRoZSBzZXJ2ZXIuXCIsXHJcbiAgICAgICAgICAgIFwiTXVzdCBiZSBhY3RpdmVcIixcclxuICAgICAgICAgICAgXCJCZSBhdCBsZWFzdCAxMyB5ZWFycyBvbGQgYW5kIGJlIG1hdHVyZS5gYGBcIixcclxuICAgICAgICAgICAgXCJXaHkgZG8geW91IHdhbnQgdG8gYmUgYSBTdGFmZiBpbiBvdXIgY29tbXVuaXR5PzogXCIsXHJcbiAgICAgICAgICAgIFwiSG93IG9sZCBhcmUgeW91PzogXCIsXHJcbiAgICAgICAgICAgIFwiV2hhdCBhcmUgdGhlIGJhc2ljIGNvbW1hbmRzIHRvIG11dGUvd2FybiBzb21lb25lIGFuZCB3aXRoIHdoYXQgYm90PzogXCIsXHJcbiAgICAgICAgICAgIFwiV2hhdCB3b3VsZCB5b3UgZG8gaWYgdGhlcmUgaXMgYSByYWlkIG9uIHRoZSBzZXJ2ZXI/OiBcIixcclxuICAgICAgICAgICAgXCJXaGF0IGlzIHlvdXIga25vd2xlZGdlIG9mIHRlY25vbG9neT86XCIsXHJcbiAgICAgICAgICAgIFwiV2hhdCB3b3VsZCB5b3UgZG8gaWYgc29tZW9uZSBpcyBmbG9vZGluZyBpbiBnZW5lcmFsIGNoYXQ/OiBcXG5cIixcclxuICAgICAgICAgICAgXCJfXyoqKllvdXIgYW5zd2VycyBtdXN0IGJlIGluIFNwYW5pc2ggKDpmbGFnX2VzOikgb3IgRW5nbGlzaCAoOmZsYWdfdXM6KSoqKl9fXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zRW1iZWRUaXRsZTogXCJBIG5ldyBzdWdnZXN0aW9uIGhhcyBiZWVuIHN1Ym1pdGVkXCIsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNFbWJlZERlc2NyaXB0aW9uOiBcIioqRnJvbToqKiBfXyVzX19cXG4qKlN1Z2dlc3Rpb246KiogX18lc19fXCIsXHJcbiAgICAgICAgc3VnZ2VzdGlvblNlbnQ6IFwiWW91ciBzdWdnZXN0aW9uIGhhcyBiZWVuIHNlbnQhXCIsXHJcbiAgICAgICAgdmVyaWZpY2F0aW9uQ29kZUVtYmVkVGl0bGU6IFwiVmVyaWZpY2F0aW9uIGNvZGVcIixcclxuICAgICAgICBub0V4ZWN1dGVkQ29tbWFuZHM6IFwiVGhlIHVzZXIgaGFzbid0IHJ1biBhbnkgc2xhc2ggY29tbWFuZHNcIixcclxuICAgICAgICBpc250VmVyaWZpZWQ6IFwiVGhlIHVzZXIgaXNuJ3QgdmVyaWZpZWRcIixcclxuICAgICAgICBpc1ZlcmlmaWVkOiBcIlRoZSB1c2VyIGlzIHZlcmlmaWVkXCIsXHJcbiAgICAgICAgY29ubmVjdGluZ0dhdGV3YXk6IFwiQ29ubmVjdGluZyB0byB0aGUgZ2F0ZXdheSwgcGxlYXNlIHdhaXRcIixcclxuICAgICAgICB0b2tlbkdhdGhlcmVkOiBcIkEgdG9rZW4gaGFzIGJlZW4gZ2F0aGVyZWQsIGNvbm5lY3RpbmcgdGhyb3VnaCB0aGF0IHRva2VuXCIsXHJcbiAgICAgICAgYm90Q29ubmVjdGVkOiBcIlRoZSB0b2tlbiBwcm92aWRlZCB3YXMgdmFsaWQsIHRoZSBib3QgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcIixcclxuICAgICAgICByZW1pbmRlck9mQnVtcE5vdGlmeTogXCJHb29kLCBJIHdpbGwgcmVtaW5kIHlvdSB3aGVuIHlvdSBjYW4gYnVtcCB0aGUgc2VydmVyIGFnYWluIVwiLFxyXG4gICAgICAgIGNhbkJ1bXBBZ2FpbjogXCJZb3UgY2FuIGJ1bXAgYWdhaW4gdGhlIHNlcnZlciEgVG8gYnVtcCBpdCBqdXN0IHR5cGUgYCFkIGJ1bXBgIGFuZCBpdCBzaG91bGQgYmUgYnVtcGVkIVwiLFxyXG4gICAgICAgIGNhbnRCdW1wOiBcIlRoZSBzZXJ2ZXIgY2FuJ3QgYmUgYnVtcGVkIG5vdywgcGxlYXNlIHdhaXRcIixcclxuICAgICAgICBza2lwQ3Jhc2hPblByZXNlbmNlVXBkYXRlOiBcIlNvbWVvbmUgY2hhbmdlZCB0aGVpciBwcmVzZW5jZSwgYnV0IHRoZSBib3QgZGlkbid0IGxpa2UgaXQsIHNraXBwaW5nIGNyYXNoXCIsXHJcbiAgICAgICAgd2VsY29tZVVzZXJDb21tYW5kOiBbXHJcbiAgICAgICAgICAgIFwiOmZsYWdfdXM6IEhleSEgSG9wZSB5b3UgYXJlIGhhdmluZyBhIGdyZWF0IGRheSFcIixcclxuICAgICAgICAgICAgXCJBcyBhbHdheXMsIGxldCBtZSBnaXZlIHlvdSBzb21lIHVzZWZ1bCB0aXBzIHRvIGdldCBzdGFydGVkIGluIHRoZSBzZXJ2ZXI6XFxuXCIsXHJcbiAgICAgICAgICAgIFwiWW91IHNob3VsZCBjaGVjayA8Izg4ODQ2MTU0NDIzNTYyMjQ1MD4gJiA8Izg4ODQ3MTgxNzM3Mzc2MTYyNj4gZm9yIGJldHRlciB1bmRlcnN0YW5kaW5nIG9mIGhvdyB0aGUgc2VydmVyIHdvcmtzXCIsXHJcbiAgICAgICAgICAgIFwiKGJlaW5nIHRoZSBydWxlcyBjaGFubmVsIHRoZSBtb3N0IGltcG9ydGFudCBvbmUsIGFzIG91ciBtb2RlcmF0aW9uIGlzIGJhc2VkIG9uIHRoYXQpXCIsXHJcbiAgICAgICAgICAgIFwiSW4gY2FzZSB5b3Ugd2FudCB0byBhcHBseSB0byBzdGFmZiwgb3IgZ2V0IHN1cHBvcnQsIGRvbid0IGhlc2l0YXRlIHRvIGdvIHRvIDwjODg4OTAxMjg0OTUyOTU2OTg5PiBhbmQgb3BlbiBhIHRpY2tldFxcblxcblwiLFxyXG4gICAgICAgICAgICBcIjpmbGFnX2VzOiBIZXkhIEVzcGVybyBxdWUgZXN0ZXMgdGVuaWVuZG8gdW4gbWFyYXZpbGxvc28gZMOtYVwiLFxyXG4gICAgICAgICAgICBcIkNvbW8gc2llbXByZSwgZMOpamFtZSBkYXJ0ZSB1bm9zIHRpcHMgcGFyYSBlbXBlemFyIGVuIGVsIHNlcnZpZG9yOlxcblwiLFxyXG4gICAgICAgICAgICBcIkRlYmVyw61hcyByZXZpc2FyIDwjODg4NDYxNTQ0MjM1NjIyNDUwPiB5IDwjODg4NDcxODE3MzczNzYxNjI2PiBwYXJhIGVudGVuZGVyIG1lam9yIGNvbW8gZnVuY2lvbmEgZWwgc2Vydmlkb3JcIixcclxuICAgICAgICAgICAgXCIoc29icmV0b2RvIGVsIGNhbmFsIGRlIHJlZ2xhcywgZWwgY3VhbCBlcyBlbCBtw6FzIGltcG9ydGFudGUsIHlhIHF1ZSBudWVzdHJhIG1vZGVyYWNpw7NuIHNlIGJhc2EgZGUgZXN0ZSlcIixcclxuICAgICAgICAgICAgXCJFbiBjYXNvIGRlIHF1ZSBxdWllcmFzIHBvc3R1bGFydGUgYWwgc3RhZmYsIG8gb2J0ZW5lciBheXVkYSAvIHNvcG9ydGUsIG5vIGxvIHBpZW5zZXMgMiB2ZWNlcyB5IHZlIGFsIGNhbmFsIDwjODg4OTAxMjg0OTUyOTU2OTg5PiB5IGFicmUgdW4gdGlja2V0XCJcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZzsiXX0=