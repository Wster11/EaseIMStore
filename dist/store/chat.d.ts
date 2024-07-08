export declare const useChatStore: import("pinia").StoreDefinition<"chat", import("pinia")._UnwrapAll<Pick<{
    conn: import("easemob-websdk").EasemobChat.Connection;
    login: (p: {
        user: string;
        pwd?: string;
        accessToken?: string;
        agoraToken?: string;
        success?: (res: any) => void;
        error?: (res: any) => void;
    }) => Promise<import("easemob-websdk").EasemobChat.LoginResult>;
    close: () => void;
    getChatConn: () => import("easemob-websdk").EasemobChat.Connection;
}, "conn">>, Pick<{
    conn: import("easemob-websdk").EasemobChat.Connection;
    login: (p: {
        user: string;
        pwd?: string;
        accessToken?: string;
        agoraToken?: string;
        success?: (res: any) => void;
        error?: (res: any) => void;
    }) => Promise<import("easemob-websdk").EasemobChat.LoginResult>;
    close: () => void;
    getChatConn: () => import("easemob-websdk").EasemobChat.Connection;
}, never>, Pick<{
    conn: import("easemob-websdk").EasemobChat.Connection;
    login: (p: {
        user: string;
        pwd?: string;
        accessToken?: string;
        agoraToken?: string;
        success?: (res: any) => void;
        error?: (res: any) => void;
    }) => Promise<import("easemob-websdk").EasemobChat.LoginResult>;
    close: () => void;
    getChatConn: () => import("easemob-websdk").EasemobChat.Connection;
}, "getChatConn" | "close" | "login">>;
