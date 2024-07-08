import type { EasemobChat } from "easemob-websdk";
export declare const useAppUserStore: import("pinia").StoreDefinition<"appUser", import("pinia")._UnwrapAll<Pick<{
    appUserInfo: import("@vue/composition-api").Ref<Map<string, EasemobChat.UpdateOwnUserInfoParams>>;
    getUserInfoFromStore: (userId: string) => {
        name: string;
        nickname: string | undefined;
        avatar: string;
        sign: string;
    };
    getUsersInfo: (props: {
        userIdList: string[];
        withPresence?: boolean;
    }) => Promise<unknown>;
    updateUserInfo: (params: EasemobChat.UpdateOwnUserInfoParams | EasemobChat.ConfigurableKey) => Promise<EasemobChat.AsyncResult<EasemobChat.UpdateOwnUserInfoParams>>;
    getSelfUserInfo: () => {
        name: string;
        nickname: string | undefined;
        avatar: string;
        sign: string;
    };
    clear: () => void;
}, "appUserInfo">>, Pick<{
    appUserInfo: import("@vue/composition-api").Ref<Map<string, EasemobChat.UpdateOwnUserInfoParams>>;
    getUserInfoFromStore: (userId: string) => {
        name: string;
        nickname: string | undefined;
        avatar: string;
        sign: string;
    };
    getUsersInfo: (props: {
        userIdList: string[];
        withPresence?: boolean;
    }) => Promise<unknown>;
    updateUserInfo: (params: EasemobChat.UpdateOwnUserInfoParams | EasemobChat.ConfigurableKey) => Promise<EasemobChat.AsyncResult<EasemobChat.UpdateOwnUserInfoParams>>;
    getSelfUserInfo: () => {
        name: string;
        nickname: string | undefined;
        avatar: string;
        sign: string;
    };
    clear: () => void;
}, never>, Pick<{
    appUserInfo: import("@vue/composition-api").Ref<Map<string, EasemobChat.UpdateOwnUserInfoParams>>;
    getUserInfoFromStore: (userId: string) => {
        name: string;
        nickname: string | undefined;
        avatar: string;
        sign: string;
    };
    getUsersInfo: (props: {
        userIdList: string[];
        withPresence?: boolean;
    }) => Promise<unknown>;
    updateUserInfo: (params: EasemobChat.UpdateOwnUserInfoParams | EasemobChat.ConfigurableKey) => Promise<EasemobChat.AsyncResult<EasemobChat.UpdateOwnUserInfoParams>>;
    getSelfUserInfo: () => {
        name: string;
        nickname: string | undefined;
        avatar: string;
        sign: string;
    };
    clear: () => void;
}, "updateUserInfo" | "getUserInfoFromStore" | "getUsersInfo" | "getSelfUserInfo" | "clear">>;
