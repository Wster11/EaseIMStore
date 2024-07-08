export declare const useBlockStore: import("pinia").StoreDefinition<"block", import("pinia")._UnwrapAll<Pick<{
    blockList: import("@vue/composition-api").Ref<string[]>;
    blockUser: (userId: string) => Promise<import("easemob-websdk").EasemobChat.AsyncResult<import("easemob-websdk").EasemobChat.OperateResult>>;
    unBlockUser: (userId: string) => Promise<void>;
    getBlockList: () => void;
    clear: () => void;
}, "blockList">>, Pick<{
    blockList: import("@vue/composition-api").Ref<string[]>;
    blockUser: (userId: string) => Promise<import("easemob-websdk").EasemobChat.AsyncResult<import("easemob-websdk").EasemobChat.OperateResult>>;
    unBlockUser: (userId: string) => Promise<void>;
    getBlockList: () => void;
    clear: () => void;
}, never>, Pick<{
    blockList: import("@vue/composition-api").Ref<string[]>;
    blockUser: (userId: string) => Promise<import("easemob-websdk").EasemobChat.AsyncResult<import("easemob-websdk").EasemobChat.OperateResult>>;
    unBlockUser: (userId: string) => Promise<void>;
    getBlockList: () => void;
    clear: () => void;
}, "clear" | "blockUser" | "unBlockUser" | "getBlockList">>;
