export default interface MessagesList extends Object {
    botStarted: string,
    botStatus: string,
    notEnoughPermissions: string,
    minimumOfDeletedMessages: string,
    deletedMessages: string,
    welcomeTitle: string,
    welcome: string,
    goodbyeTitle: string,
    goodbye: string,
    supportTicketMessage: string,
    applyTicketMessage: string,
    questionsApply: Array<string>,
    suggestionsEmbedTitle: string,
    suggestionsEmbedDescription: string,
    suggestionSent: string,
    noExecutedCommands: string,
    isntVerified: string,
    isVerified: string,
    connectingGateway: string,
    tokenGathered: string,
    botConnected: string,
    reminderOfBumpNotify: string,
    canBumpAgain: string,
    cantBump: string,
    skipCrashOnPresenceUpdate: string,
    welcomeUserCommand: Array<string>
}