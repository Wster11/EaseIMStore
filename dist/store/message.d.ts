import type { EasemobChat } from "easemob-websdk/Easemob-chat";
import type { MixedMessageBody } from "./types/eim";
interface ConversationMessagesInfo {
    messages: MixedMessageBody[];
    cursor: string;
    isLast: boolean;
}
export declare const useMessageStore: import("pinia").StoreDefinition<"message", import("pinia")._UnwrapAll<Pick<{
    messageMap: import("@vue/composition-api").Ref<Map<string, MixedMessageBody>>;
    conversationMessagesMap: import("@vue/composition-api").Ref<Map<string, ConversationMessagesInfo>>;
    audioInstance: any;
    getHistoryMessages: (conversation: EasemobChat.ConversationItem, cursor?: string) => Promise<void>;
    insertMessage: (msg: MixedMessageBody) => void;
    sendMessage: (msg: EasemobChat.MessageBody) => Promise<EasemobChat.SendMsgResult>;
    onMessage: (msg: MixedMessageBody) => void;
    onRecallMessage: (mid: string, from: string) => void;
    setAudioInstance: (instance: any) => void;
    recallMessage: (msg: {
        mid: string;
        to: EasemobChat.UserId;
        type?: "chat" | "groupchat" | "chatroom";
        chatType?: "singleChat" | "groupChat" | "chatRoom";
        isChatThread?: boolean;
        ext?: string;
        success?: (res: number) => void;
        fail?: (error: EasemobChat.ErrorEvent) => void;
    }) => Promise<EasemobChat.SendMsgResult>;
    insertNoticeMessage: (msg: MixedMessageBody) => void;
    clear: () => void;
}, "messageMap" | "conversationMessagesMap" | "audioInstance">>, Pick<{
    messageMap: import("@vue/composition-api").Ref<Map<string, MixedMessageBody>>;
    conversationMessagesMap: import("@vue/composition-api").Ref<Map<string, ConversationMessagesInfo>>;
    audioInstance: any;
    getHistoryMessages: (conversation: EasemobChat.ConversationItem, cursor?: string) => Promise<void>;
    insertMessage: (msg: MixedMessageBody) => void;
    sendMessage: (msg: EasemobChat.MessageBody) => Promise<EasemobChat.SendMsgResult>;
    onMessage: (msg: MixedMessageBody) => void;
    onRecallMessage: (mid: string, from: string) => void;
    setAudioInstance: (instance: any) => void;
    recallMessage: (msg: {
        mid: string;
        to: EasemobChat.UserId;
        type?: "chat" | "groupchat" | "chatroom";
        chatType?: "singleChat" | "groupChat" | "chatRoom";
        isChatThread?: boolean;
        ext?: string;
        success?: (res: number) => void;
        fail?: (error: EasemobChat.ErrorEvent) => void;
    }) => Promise<EasemobChat.SendMsgResult>;
    insertNoticeMessage: (msg: MixedMessageBody) => void;
    clear: () => void;
}, "audioInstance">, Pick<{
    messageMap: import("@vue/composition-api").Ref<Map<string, MixedMessageBody>>;
    conversationMessagesMap: import("@vue/composition-api").Ref<Map<string, ConversationMessagesInfo>>;
    audioInstance: any;
    getHistoryMessages: (conversation: EasemobChat.ConversationItem, cursor?: string) => Promise<void>;
    insertMessage: (msg: MixedMessageBody) => void;
    sendMessage: (msg: EasemobChat.MessageBody) => Promise<EasemobChat.SendMsgResult>;
    onMessage: (msg: MixedMessageBody) => void;
    onRecallMessage: (mid: string, from: string) => void;
    setAudioInstance: (instance: any) => void;
    recallMessage: (msg: {
        mid: string;
        to: EasemobChat.UserId;
        type?: "chat" | "groupchat" | "chatroom";
        chatType?: "singleChat" | "groupChat" | "chatRoom";
        isChatThread?: boolean;
        ext?: string;
        success?: (res: number) => void;
        fail?: (error: EasemobChat.ErrorEvent) => void;
    }) => Promise<EasemobChat.SendMsgResult>;
    insertNoticeMessage: (msg: MixedMessageBody) => void;
    clear: () => void;
}, "onRecallMessage" | "getHistoryMessages" | "recallMessage" | "clear" | "audioInstance" | "insertMessage" | "sendMessage" | "onMessage" | "setAudioInstance" | "insertNoticeMessage">>;
export {};
