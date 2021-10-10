import ChannelsList from "./ChannelsList";
import MessagesList from "./MessagesList";
import RolesList from "./RolesList";
import LogosList from "./LogosList";
import { PathLike } from "fs";

export default interface ConfigType extends Object {
    eventsFolder: PathLike,
    commandsFolder: PathLike,
    eventsDistFolder: string,
    commandsDistFolder: string,
    clientId: string,
    guildId: string
    inviteURL: string,
    version: string,
    roles: RolesList,
    logos: LogosList,
    channels: ChannelsList,
    messages: MessagesList
}