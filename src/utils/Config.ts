import path from "path";
import ConfigType from "../interfaces/ConfigType.js";

const config: ConfigType = {
    eventsFolder: path.join(__dirname, "..", "commands"),
    commandsFolder: path.join(__dirname, "..", "events"),
    guildId: "888483479447273482",
    clientId: "886754649741357109",
    inviteURL: "dsc.gg/signedsource",
    version: "5.0.0",
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
        roles: "888755997433294848"
    },
    messages: {
        botStarted: "Bot is up",
        botStatus: "SignedSource %d - Official Bot",
        notEnoughPermissions: "You don't have the necessary permissions to run this command or this command isn't capable of running in this channel",
        minimumOfDeletedMessages: "You must provide 1 or more messages to delete",
        deletedMessages: "%d messages have been deleted.",
        welcomeTitle: "Welcome to SignedSource",
        welcome: "Welcome %d! Read <#888461544235622450> and <#888471817373761626>, if you want to give yourself a role go to <#888755997433294848> for more info.",
        goodbyeTitle: "Return soon!",
        goodbye: "Bye %d :(, we hope you return soon",
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
        suggestionsEmbedDescription: "**From:** __%d__\n**Suggestion:** __%d__",
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
}

export default config;