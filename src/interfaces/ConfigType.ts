import ChannelsList from "./ChannelsList";
import MessagesList from "./MessagesList";
import RolesList from "./RolesList";
import LogosList from "./LogosList";
import { PathLike } from "fs";

export default interface ConfigType extends Object {
    eventsFolder: PathLike,
    commandsFolder: PathLike,
    inviteURL: string,
    version: string,
    roles: RolesList,
    logos: LogosList,
    clientId: string,
    guildId: string
    channels: ChannelsList,
    messages: MessagesList
}