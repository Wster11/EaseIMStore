import type { EasemobChat } from "easemob-websdk/Easemob-chat";
import type { ContactNotice } from "./types/eim";
export declare const useContactStore: import("pinia").StoreDefinition<"contact", import("pinia")._UnwrapAll<Pick<{
    contacts: import("@vue/composition-api").Ref<{
        userId: EasemobChat.UserId;
        remark: string;
    }[]>;
    contactsNoticeInfo: import("@vue/composition-api").Ref<{
        list: {
            type: "subscribe" | "unsubscribed" | "subscribed";
            to: string;
            from: string;
            status?: string;
            ext: "invited" | "agreed" | "refused" | "deleted" | "added";
            time: number;
        }[];
        unReadCount: number;
    }>;
    viewedUserInfo: import("@vue/composition-api").Ref<{
        userId: EasemobChat.UserId;
        remark: string;
    }>;
    getContacts: () => void;
    addContact: (userId: string) => Promise<void>;
    deleteContact: (userId: string) => Promise<void>;
    addContactNotice: (msg: ContactNotice) => void;
    declineContactInvite: (userId: string) => Promise<void>;
    acceptContactInvite: (userId: string) => Promise<void>;
    addStoreContact: (user: EasemobChat.ContactItem) => void;
    setViewedUserInfo: (user: EasemobChat.ContactItem) => void;
    setContactRemark: (userId: string, remark: string) => Promise<void>;
    deepGetUserInfo: (userIdList: string[], pageNum?: number) => void;
    clearContactNoticeUnReadCount: () => void;
    clear: () => void;
}, "contacts" | "contactsNoticeInfo" | "viewedUserInfo">>, Pick<{
    contacts: import("@vue/composition-api").Ref<{
        userId: EasemobChat.UserId;
        remark: string;
    }[]>;
    contactsNoticeInfo: import("@vue/composition-api").Ref<{
        list: {
            type: "subscribe" | "unsubscribed" | "subscribed";
            to: string;
            from: string;
            status?: string;
            ext: "invited" | "agreed" | "refused" | "deleted" | "added";
            time: number;
        }[];
        unReadCount: number;
    }>;
    viewedUserInfo: import("@vue/composition-api").Ref<{
        userId: EasemobChat.UserId;
        remark: string;
    }>;
    getContacts: () => void;
    addContact: (userId: string) => Promise<void>;
    deleteContact: (userId: string) => Promise<void>;
    addContactNotice: (msg: ContactNotice) => void;
    declineContactInvite: (userId: string) => Promise<void>;
    acceptContactInvite: (userId: string) => Promise<void>;
    addStoreContact: (user: EasemobChat.ContactItem) => void;
    setViewedUserInfo: (user: EasemobChat.ContactItem) => void;
    setContactRemark: (userId: string, remark: string) => Promise<void>;
    deepGetUserInfo: (userIdList: string[], pageNum?: number) => void;
    clearContactNoticeUnReadCount: () => void;
    clear: () => void;
}, never>, Pick<{
    contacts: import("@vue/composition-api").Ref<{
        userId: EasemobChat.UserId;
        remark: string;
    }[]>;
    contactsNoticeInfo: import("@vue/composition-api").Ref<{
        list: {
            type: "subscribe" | "unsubscribed" | "subscribed";
            to: string;
            from: string;
            status?: string;
            ext: "invited" | "agreed" | "refused" | "deleted" | "added";
            time: number;
        }[];
        unReadCount: number;
    }>;
    viewedUserInfo: import("@vue/composition-api").Ref<{
        userId: EasemobChat.UserId;
        remark: string;
    }>;
    getContacts: () => void;
    addContact: (userId: string) => Promise<void>;
    deleteContact: (userId: string) => Promise<void>;
    addContactNotice: (msg: ContactNotice) => void;
    declineContactInvite: (userId: string) => Promise<void>;
    acceptContactInvite: (userId: string) => Promise<void>;
    addStoreContact: (user: EasemobChat.ContactItem) => void;
    setViewedUserInfo: (user: EasemobChat.ContactItem) => void;
    setContactRemark: (userId: string, remark: string) => Promise<void>;
    deepGetUserInfo: (userIdList: string[], pageNum?: number) => void;
    clearContactNoticeUnReadCount: () => void;
    clear: () => void;
}, "getContacts" | "addContact" | "deleteContact" | "acceptContactInvite" | "declineContactInvite" | "setContactRemark" | "clear" | "addContactNotice" | "addStoreContact" | "setViewedUserInfo" | "deepGetUserInfo" | "clearContactNoticeUnReadCount">>;
