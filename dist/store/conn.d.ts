import type { EasemobChat, EasemobChatStatic } from "easemob-websdk/Easemob-chat";
export declare const useConnStore: import("pinia").StoreDefinition<"conn", import("pinia")._UnwrapAll<Pick<{
    conn: EasemobChat.Connection;
    setChatConn: (connection: EasemobChat.Connection) => void;
    getChatConn: () => EasemobChat.Connection;
    initChatSDK: (config: EasemobChat.ConnectionParameters) => EasemobChat.Connection;
    getChatSDK: () => EasemobChatStatic;
}, "conn">>, Pick<{
    conn: EasemobChat.Connection;
    setChatConn: (connection: EasemobChat.Connection) => void;
    getChatConn: () => EasemobChat.Connection;
    initChatSDK: (config: EasemobChat.ConnectionParameters) => EasemobChat.Connection;
    getChatSDK: () => EasemobChatStatic;
}, never>, Pick<{
    conn: EasemobChat.Connection;
    setChatConn: (connection: EasemobChat.Connection) => void;
    getChatConn: () => EasemobChat.Connection;
    initChatSDK: (config: EasemobChat.ConnectionParameters) => EasemobChat.Connection;
    getChatSDK: () => EasemobChatStatic;
}, "setChatConn" | "getChatConn" | "initChatSDK" | "getChatSDK">>;
