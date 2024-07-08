import type { EasemobChat } from "easemob-websdk/Easemob-chat";
import type { ConversationBaseInfo } from "./types/index";
import type { MixedMessageBody } from "./types/eim";
export declare const useConversationStore: import("pinia").StoreDefinition<"conversation", import("pinia")._UnwrapAll<Pick<{
    conversationList: import("@vue/composition-api").Ref<{
        conversationId: string;
        conversationType: "singleChat" | "groupChat";
        isPinned: boolean;
        pinnedTime: number;
        lastMessage: {
            type: "read";
            chatType: "singleChat" | "groupChat";
            ackId?: string;
            mid?: string;
            groupReadCount?: {
                [x: string]: number;
            } | undefined;
            ackContent?: string;
            isChatThread?: boolean;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            deliverOnlineOnly?: boolean;
            id: string;
            to: string;
            from?: string;
        } | {
            id: string;
            mid?: string;
            ackId?: string;
            type: "delivery";
            to: string;
            from?: string;
            isChatThread?: boolean;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            deliverOnlineOnly?: boolean;
        } | {
            id: string;
            mid?: string;
            group?: string;
            type: "channel";
            time: number;
            isChatThread?: boolean;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            deliverOnlineOnly?: boolean;
            chatType: EasemobChat.ChatType;
            to: string;
            from?: string;
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "txt";
            to: string;
            msg: string;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                allowGroupAck?: boolean;
                languages?: string[];
            } | undefined;
            translations?: {
                translations: {
                    text: string;
                    to: string;
                }[];
                detectedLanguage: {
                    language: string;
                    score: number;
                };
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            modifiedInfo?: {
                operatorId: string;
                operationCount: number;
                operationTime: number;
            } | undefined;
            receiverList?: string[];
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "cmd";
            to: string;
            action: string;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "custom";
            to: string;
            customEvent: string;
            customExts: {
                [x: string]: any;
            };
            from?: string;
            roomType?: boolean;
            group?: string;
            params?: {
                [x: string]: any;
            } | undefined;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            modifiedInfo?: {
                operatorId: string;
                operationCount: number;
                operationTime: number;
            } | undefined;
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "loc";
            to: string;
            addr: string;
            buildingName: string;
            lat: number;
            lng: number;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            time: number;
            msgConfig?: {
                allowGroupAck: boolean;
            } | undefined;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
        } | {
            id: string;
            type: "img";
            time: number;
            secret?: string;
            thumb?: string;
            thumb_secret?: string;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            thumbnailWidth?: number;
            thumbnailHeight?: number;
            chatType: EasemobChat.ChatType;
            to: string;
            file?: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            } | undefined;
            width?: number;
            height?: number;
            file_length?: number;
            fileInputId?: string;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            url?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
        } | {
            id: string;
            type: "audio";
            url?: string;
            secret?: string;
            filetype?: string;
            accessToken?: string;
            group?: string;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            chatType: EasemobChat.ChatType;
            file: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            };
            filename: string;
            length?: number;
            file_length?: number;
            fileInputId?: string;
            to: string;
            from?: string;
            roomType?: boolean;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            apiUrl?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
        } | {
            id: string;
            type: "video";
            url?: string;
            secret?: string;
            thumb?: string;
            thumb_secret?: string;
            filetype?: string;
            accessToken?: string;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            group?: string;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            chatType: EasemobChat.ChatType;
            file: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            };
            filename: string;
            length?: number;
            file_length?: number;
            fileInputId?: string;
            to: string;
            from?: string;
            roomType?: boolean;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            apiUrl?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
        } | {
            id: string;
            type: "file";
            group?: string;
            url?: string;
            secret?: string;
            length?: number;
            file_length?: number;
            filetype?: string;
            accessToken?: string;
            msgConfig?: {
                allowGroupAck: boolean;
            } | undefined;
            time: number;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            isChatThread?: boolean;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            chatType: EasemobChat.ChatType;
            file: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            };
            filename?: string;
            fileInputId?: string;
            to: string;
            from?: string;
            ext?: {
                [x: string]: any;
            } | undefined;
            apiUrl?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
            receiverList?: string[];
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "combine";
            to: string;
            from?: string;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                allowGroupAck?: boolean;
                languages?: string[];
            } | undefined;
            time: number;
            isChatThread?: boolean;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            url?: string;
            secret?: string;
            file_length?: number;
            filename: string;
            title: string;
            summary: string;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            compatibleText: string;
            combineLevel: number;
            onFileUploadError?: (error: any) => void;
            onFileUploadComplete?: (data: {
                url: string;
                secret: string;
            }) => void;
        } | {
            [x: string]: never;
        } | null;
        unReadCount: number;
        marks?: Array<EasemobChat.MarkType>;
    }[]>;
    conversationParams: import("@vue/composition-api").Ref<{
        pageSize?: number;
        cursor?: string;
    }>;
    currConversation: import("@vue/composition-api").Ref<{
        conversationId: string;
        conversationType: "singleChat" | "groupChat";
    } | null>;
    clear: () => void;
    setConversationParams: (p: {
        pageSize?: number;
        cursor?: string;
    }) => void;
    getConversationList: () => Promise<EasemobChat.AsyncResult<EasemobChat.ServerConversations>>;
    deleteConversation: (conversation: EasemobChat.ConversationItem, deleteMessage?: boolean) => Promise<void>;
    getConversationById: (conversationId: string) => EasemobChat.ConversationItem | undefined;
    getConversationTime: (message: EasemobChat.ConversationItem["lastMessage"]) => any;
    markConversationRead: (conversation: ConversationBaseInfo) => Promise<void>;
    setCurrentConversation: (conversation: ConversationBaseInfo | null) => void;
    moveConversationTop: (conversation: EasemobChat.ConversationItem) => void;
    createConversation: (conversation: ConversationBaseInfo, msg: EasemobChat.MessageBody, unReadCount?: number) => EasemobChat.ConversationItem;
    updateConversationLastMessage: (conversation: ConversationBaseInfo, msg: EasemobChat.MessageBody, unReadCount?: number) => void;
    getCvsIdFromMessage: (message: MixedMessageBody) => string;
}, "conversationList" | "conversationParams" | "currConversation">>, Pick<{
    conversationList: import("@vue/composition-api").Ref<{
        conversationId: string;
        conversationType: "singleChat" | "groupChat";
        isPinned: boolean;
        pinnedTime: number;
        lastMessage: {
            type: "read";
            chatType: "singleChat" | "groupChat";
            ackId?: string;
            mid?: string;
            groupReadCount?: {
                [x: string]: number;
            } | undefined;
            ackContent?: string;
            isChatThread?: boolean;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            deliverOnlineOnly?: boolean;
            id: string;
            to: string;
            from?: string;
        } | {
            id: string;
            mid?: string;
            ackId?: string;
            type: "delivery";
            to: string;
            from?: string;
            isChatThread?: boolean;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            deliverOnlineOnly?: boolean;
        } | {
            id: string;
            mid?: string;
            group?: string;
            type: "channel";
            time: number;
            isChatThread?: boolean;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            deliverOnlineOnly?: boolean;
            chatType: EasemobChat.ChatType;
            to: string;
            from?: string;
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "txt";
            to: string;
            msg: string;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                allowGroupAck?: boolean;
                languages?: string[];
            } | undefined;
            translations?: {
                translations: {
                    text: string;
                    to: string;
                }[];
                detectedLanguage: {
                    language: string;
                    score: number;
                };
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            modifiedInfo?: {
                operatorId: string;
                operationCount: number;
                operationTime: number;
            } | undefined;
            receiverList?: string[];
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "cmd";
            to: string;
            action: string;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "custom";
            to: string;
            customEvent: string;
            customExts: {
                [x: string]: any;
            };
            from?: string;
            roomType?: boolean;
            group?: string;
            params?: {
                [x: string]: any;
            } | undefined;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            modifiedInfo?: {
                operatorId: string;
                operationCount: number;
                operationTime: number;
            } | undefined;
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "loc";
            to: string;
            addr: string;
            buildingName: string;
            lat: number;
            lng: number;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            time: number;
            msgConfig?: {
                allowGroupAck: boolean;
            } | undefined;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
        } | {
            id: string;
            type: "img";
            time: number;
            secret?: string;
            thumb?: string;
            thumb_secret?: string;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            thumbnailWidth?: number;
            thumbnailHeight?: number;
            chatType: EasemobChat.ChatType;
            to: string;
            file?: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            } | undefined;
            width?: number;
            height?: number;
            file_length?: number;
            fileInputId?: string;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            url?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
        } | {
            id: string;
            type: "audio";
            url?: string;
            secret?: string;
            filetype?: string;
            accessToken?: string;
            group?: string;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            chatType: EasemobChat.ChatType;
            file: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            };
            filename: string;
            length?: number;
            file_length?: number;
            fileInputId?: string;
            to: string;
            from?: string;
            roomType?: boolean;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            apiUrl?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
        } | {
            id: string;
            type: "video";
            url?: string;
            secret?: string;
            thumb?: string;
            thumb_secret?: string;
            filetype?: string;
            accessToken?: string;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            group?: string;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            chatType: EasemobChat.ChatType;
            file: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            };
            filename: string;
            length?: number;
            file_length?: number;
            fileInputId?: string;
            to: string;
            from?: string;
            roomType?: boolean;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            apiUrl?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
        } | {
            id: string;
            type: "file";
            group?: string;
            url?: string;
            secret?: string;
            length?: number;
            file_length?: number;
            filetype?: string;
            accessToken?: string;
            msgConfig?: {
                allowGroupAck: boolean;
            } | undefined;
            time: number;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            isChatThread?: boolean;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            chatType: EasemobChat.ChatType;
            file: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            };
            filename?: string;
            fileInputId?: string;
            to: string;
            from?: string;
            ext?: {
                [x: string]: any;
            } | undefined;
            apiUrl?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
            receiverList?: string[];
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "combine";
            to: string;
            from?: string;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                allowGroupAck?: boolean;
                languages?: string[];
            } | undefined;
            time: number;
            isChatThread?: boolean;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            url?: string;
            secret?: string;
            file_length?: number;
            filename: string;
            title: string;
            summary: string;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            compatibleText: string;
            combineLevel: number;
            onFileUploadError?: (error: any) => void;
            onFileUploadComplete?: (data: {
                url: string;
                secret: string;
            }) => void;
        } | {
            [x: string]: never;
        } | null;
        unReadCount: number;
        marks?: Array<EasemobChat.MarkType>;
    }[]>;
    conversationParams: import("@vue/composition-api").Ref<{
        pageSize?: number;
        cursor?: string;
    }>;
    currConversation: import("@vue/composition-api").Ref<{
        conversationId: string;
        conversationType: "singleChat" | "groupChat";
    } | null>;
    clear: () => void;
    setConversationParams: (p: {
        pageSize?: number;
        cursor?: string;
    }) => void;
    getConversationList: () => Promise<EasemobChat.AsyncResult<EasemobChat.ServerConversations>>;
    deleteConversation: (conversation: EasemobChat.ConversationItem, deleteMessage?: boolean) => Promise<void>;
    getConversationById: (conversationId: string) => EasemobChat.ConversationItem | undefined;
    getConversationTime: (message: EasemobChat.ConversationItem["lastMessage"]) => any;
    markConversationRead: (conversation: ConversationBaseInfo) => Promise<void>;
    setCurrentConversation: (conversation: ConversationBaseInfo | null) => void;
    moveConversationTop: (conversation: EasemobChat.ConversationItem) => void;
    createConversation: (conversation: ConversationBaseInfo, msg: EasemobChat.MessageBody, unReadCount?: number) => EasemobChat.ConversationItem;
    updateConversationLastMessage: (conversation: ConversationBaseInfo, msg: EasemobChat.MessageBody, unReadCount?: number) => void;
    getCvsIdFromMessage: (message: MixedMessageBody) => string;
}, never>, Pick<{
    conversationList: import("@vue/composition-api").Ref<{
        conversationId: string;
        conversationType: "singleChat" | "groupChat";
        isPinned: boolean;
        pinnedTime: number;
        lastMessage: {
            type: "read";
            chatType: "singleChat" | "groupChat";
            ackId?: string;
            mid?: string;
            groupReadCount?: {
                [x: string]: number;
            } | undefined;
            ackContent?: string;
            isChatThread?: boolean;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            deliverOnlineOnly?: boolean;
            id: string;
            to: string;
            from?: string;
        } | {
            id: string;
            mid?: string;
            ackId?: string;
            type: "delivery";
            to: string;
            from?: string;
            isChatThread?: boolean;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            deliverOnlineOnly?: boolean;
        } | {
            id: string;
            mid?: string;
            group?: string;
            type: "channel";
            time: number;
            isChatThread?: boolean;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            deliverOnlineOnly?: boolean;
            chatType: EasemobChat.ChatType;
            to: string;
            from?: string;
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "txt";
            to: string;
            msg: string;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                allowGroupAck?: boolean;
                languages?: string[];
            } | undefined;
            translations?: {
                translations: {
                    text: string;
                    to: string;
                }[];
                detectedLanguage: {
                    language: string;
                    score: number;
                };
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            modifiedInfo?: {
                operatorId: string;
                operationCount: number;
                operationTime: number;
            } | undefined;
            receiverList?: string[];
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "cmd";
            to: string;
            action: string;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "custom";
            to: string;
            customEvent: string;
            customExts: {
                [x: string]: any;
            };
            from?: string;
            roomType?: boolean;
            group?: string;
            params?: {
                [x: string]: any;
            } | undefined;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            modifiedInfo?: {
                operatorId: string;
                operationCount: number;
                operationTime: number;
            } | undefined;
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "loc";
            to: string;
            addr: string;
            buildingName: string;
            lat: number;
            lng: number;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            time: number;
            msgConfig?: {
                allowGroupAck: boolean;
            } | undefined;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
        } | {
            id: string;
            type: "img";
            time: number;
            secret?: string;
            thumb?: string;
            thumb_secret?: string;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            thumbnailWidth?: number;
            thumbnailHeight?: number;
            chatType: EasemobChat.ChatType;
            to: string;
            file?: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            } | undefined;
            width?: number;
            height?: number;
            file_length?: number;
            fileInputId?: string;
            from?: string;
            roomType?: boolean;
            group?: string;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            url?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
        } | {
            id: string;
            type: "audio";
            url?: string;
            secret?: string;
            filetype?: string;
            accessToken?: string;
            group?: string;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            chatType: EasemobChat.ChatType;
            file: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            };
            filename: string;
            length?: number;
            file_length?: number;
            fileInputId?: string;
            to: string;
            from?: string;
            roomType?: boolean;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            apiUrl?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
        } | {
            id: string;
            type: "video";
            url?: string;
            secret?: string;
            thumb?: string;
            thumb_secret?: string;
            filetype?: string;
            accessToken?: string;
            msgConfig?: {
                [x: string]: any;
            } | undefined;
            group?: string;
            time: number;
            isChatThread?: boolean;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            chatType: EasemobChat.ChatType;
            file: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            };
            filename: string;
            length?: number;
            file_length?: number;
            fileInputId?: string;
            to: string;
            from?: string;
            roomType?: boolean;
            success?: (data: EasemobChat.SendMsgResult) => void;
            fail?: () => void;
            ext?: {
                [x: string]: any;
            } | undefined;
            apiUrl?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
        } | {
            id: string;
            type: "file";
            group?: string;
            url?: string;
            secret?: string;
            length?: number;
            file_length?: number;
            filetype?: string;
            accessToken?: string;
            msgConfig?: {
                allowGroupAck: boolean;
            } | undefined;
            time: number;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            isChatThread?: boolean;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            chatType: EasemobChat.ChatType;
            file: {
                url: string;
                filename: string;
                filetype: string;
                data: {
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number, end?: number, contentType?: string) => Blob;
                    stream: () => ReadableStream<Uint8Array>;
                    text: () => Promise<string>;
                };
            };
            filename?: string;
            fileInputId?: string;
            to: string;
            from?: string;
            ext?: {
                [x: string]: any;
            } | undefined;
            apiUrl?: string;
            onFileUploadError?: (err: EasemobChat.ErrorEvent) => void;
            onFileUploadComplete?: (data: EasemobChat.UploadFileResult) => void;
            onFileUploadProgress?: (data: ProgressEvent) => void;
            body?: {
                url: string;
                type: string;
                filename: string;
            } | undefined;
            receiverList?: string[];
        } | {
            id: string;
            chatType: EasemobChat.ChatType;
            type: "combine";
            to: string;
            from?: string;
            ext?: {
                [x: string]: any;
            } | undefined;
            msgConfig?: {
                allowGroupAck?: boolean;
                languages?: string[];
            } | undefined;
            time: number;
            isChatThread?: boolean;
            priority?: EasemobChat.MessagePriority;
            broadcast?: boolean;
            isContentReplaced?: boolean;
            deliverOnlineOnly?: boolean;
            receiverList?: string[];
            url?: string;
            secret?: string;
            file_length?: number;
            filename: string;
            title: string;
            summary: string;
            reactions?: {
                reaction: string;
                count: number;
                op?: {
                    operator: EasemobChat.UserId;
                    reactionType: "create" | "delete";
                }[] | undefined;
                userList: EasemobChat.UserId[];
                isAddedBySelf?: boolean;
            }[] | undefined;
            chatThread?: {
                messageId: string;
                parentId: string;
                chatThreadName: {
                    [x: number]: string;
                    readonly length: number;
                    readonly numberOfItems: number;
                    appendItem: (newItem: string) => string;
                    clear: () => void;
                    getItem: (index: number) => string;
                    initialize: (newItem: string) => string;
                    insertItemBefore: (newItem: string, index: number) => string;
                    removeItem: (index: number) => string;
                    replaceItem: (newItem: string, index: number) => string;
                };
            } | undefined;
            chatThreadOverview?: {
                id: string;
                parentId: string;
                name: string;
                lastMessage: {
                    id: string;
                    from: string;
                    to: string;
                    timestamp: number;
                    payload: any;
                };
                createTimestamp: number;
                updateTimestamp: number;
                messageCount: number;
            } | undefined;
            onlineState?: EasemobChat.ONLINESTATETYPE;
            compatibleText: string;
            combineLevel: number;
            onFileUploadError?: (error: any) => void;
            onFileUploadComplete?: (data: {
                url: string;
                secret: string;
            }) => void;
        } | {
            [x: string]: never;
        } | null;
        unReadCount: number;
        marks?: Array<EasemobChat.MarkType>;
    }[]>;
    conversationParams: import("@vue/composition-api").Ref<{
        pageSize?: number;
        cursor?: string;
    }>;
    currConversation: import("@vue/composition-api").Ref<{
        conversationId: string;
        conversationType: "singleChat" | "groupChat";
    } | null>;
    clear: () => void;
    setConversationParams: (p: {
        pageSize?: number;
        cursor?: string;
    }) => void;
    getConversationList: () => Promise<EasemobChat.AsyncResult<EasemobChat.ServerConversations>>;
    deleteConversation: (conversation: EasemobChat.ConversationItem, deleteMessage?: boolean) => Promise<void>;
    getConversationById: (conversationId: string) => EasemobChat.ConversationItem | undefined;
    getConversationTime: (message: EasemobChat.ConversationItem["lastMessage"]) => any;
    markConversationRead: (conversation: ConversationBaseInfo) => Promise<void>;
    setCurrentConversation: (conversation: ConversationBaseInfo | null) => void;
    moveConversationTop: (conversation: EasemobChat.ConversationItem) => void;
    createConversation: (conversation: ConversationBaseInfo, msg: EasemobChat.MessageBody, unReadCount?: number) => EasemobChat.ConversationItem;
    updateConversationLastMessage: (conversation: ConversationBaseInfo, msg: EasemobChat.MessageBody, unReadCount?: number) => void;
    getCvsIdFromMessage: (message: MixedMessageBody) => string;
}, "deleteConversation" | "clear" | "setConversationParams" | "getConversationList" | "getConversationById" | "getConversationTime" | "markConversationRead" | "setCurrentConversation" | "moveConversationTop" | "createConversation" | "updateConversationLastMessage" | "getCvsIdFromMessage">>;
