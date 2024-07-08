import type { EasemobChat } from "easemob-websdk/Easemob-chat";
import type { GroupNotice } from "./types/eim";
export declare const useGroupStore: import("pinia").StoreDefinition<"group", import("pinia")._UnwrapAll<Pick<{
    joinedGroupList: import("@vue/composition-api").Ref<{
        affiliationsCount?: number;
        groupName: string;
        groupId: string;
        role?: "member" | "admin" | "owner";
        disabled: boolean;
        approval: boolean;
        allowInvites: boolean;
        description: string;
        maxUsers: number;
        public: boolean;
    }[]>;
    getJoinedGroupListParams: import("@vue/composition-api").Ref<{
        pageNum: number;
        pageSize: number;
        needAffiliations?: boolean;
        needRole?: boolean;
        success?: (res: EasemobChat.AsyncResult<EasemobChat.BaseGroupInfo[] | EasemobChat.GroupInfo[]>) => void;
        error?: (error: EasemobChat.ErrorEvent) => void;
    }>;
    viewedGroupInfo: import("@vue/composition-api").Ref<{
        affiliationsCount?: number;
        groupName: string;
        groupId: string;
        role?: "member" | "admin" | "owner";
        disabled: boolean;
        approval: boolean;
        allowInvites: boolean;
        description: string;
        maxUsers: number;
        public: boolean;
    }>;
    groupNoticeInfo: import("@vue/composition-api").Ref<{
        list: {
            operation: "create" | "destroy" | "requestToJoin" | "acceptRequest" | "joinPublicGroupDeclined" | "inviteToJoin" | "acceptInvite" | "rejectInvite" | "removeMember" | "unblockMember" | "updateInfo" | "memberPresence" | "memberAbsence" | "directJoined" | "changeOwner" | "setAdmin" | "removeAdmin" | "muteMember" | "unmuteMember" | "updateAnnouncement" | "deleteAnnouncement" | "uploadFile" | "deleteFile" | "addUserToAllowlist" | "removeAllowlistMember" | "muteAllMembers" | "unmuteAllMembers" | "memberAttributesUpdate";
            id: string;
            from: string;
            name?: string;
            detail?: {
                name?: string;
                description?: string;
                public?: boolean;
                approval?: boolean;
                allowInvites?: boolean;
                maxUsers?: number;
                inviteNeedConfirm?: boolean;
                ext?: string;
                lastModified?: number;
            } | undefined;
            memberCount?: number;
            time: number;
        }[];
        unReadCount: number;
    }>;
    groupDetailMap: import("@vue/composition-api").Ref<Map<string, EasemobChat.GroupDetailInfo>>;
    destroyGroup: (groupId: string) => Promise<EasemobChat.AsyncResult<EasemobChat.DestroyGroupResult>>;
    setViewedGroupInfo: (group: EasemobChat.GroupInfo) => void;
    getJoinedGroupList: () => void;
    applyJoinGroup: (groupId: string) => Promise<EasemobChat.AsyncResult<EasemobChat.CommonRequestResult>>;
    createGroup: (params: {
        data: {
            groupname: string;
            desc: string;
            members: EasemobChat.UserId[];
            public: boolean;
            approval: boolean;
            allowinvites: boolean;
            inviteNeedConfirm: boolean;
            maxusers: number;
            ext?: string;
        };
        success?: (res: EasemobChat.AsyncResult<EasemobChat.CreateGroupResult>) => void;
        error?: (error: EasemobChat.ErrorEvent) => void;
    }) => Promise<EasemobChat.AsyncResult<EasemobChat.CreateGroupResult>>;
    getGroupInfo: (groupId: string | string[]) => Promise<EasemobChat.AsyncResult<EasemobChat.GroupDetailInfo[]>>;
    setJoinedGroupList: (groups: EasemobChat.GroupInfo[]) => void;
    addGroupNotice: (event: GroupNotice) => void;
    removeStoreGroup: (groupId: string) => void;
    inviteJoinGroup: (groupId: string, members: string[]) => Promise<EasemobChat.AsyncResult<EasemobChat.InviteUsersToGroupResult[]>>;
    removeUserFromGroup: (groupId: string, members: string[]) => Promise<EasemobChat.AsyncResult<EasemobChat.RemoveGroupMemberResult[]>>;
    getGroupMembers: (groupId: string, pageNum: number) => Promise<EasemobChat.AsyncResult<EasemobChat.GroupMember[]>>;
    clearGroupNoticeUnReadCount: () => void;
    leaveGroup: (groupId: string) => Promise<EasemobChat.AsyncResult<{
        result: true;
    }>>;
    clear: () => void;
}, "joinedGroupList" | "getJoinedGroupListParams" | "viewedGroupInfo" | "groupNoticeInfo" | "groupDetailMap">>, Pick<{
    joinedGroupList: import("@vue/composition-api").Ref<{
        affiliationsCount?: number;
        groupName: string;
        groupId: string;
        role?: "member" | "admin" | "owner";
        disabled: boolean;
        approval: boolean;
        allowInvites: boolean;
        description: string;
        maxUsers: number;
        public: boolean;
    }[]>;
    getJoinedGroupListParams: import("@vue/composition-api").Ref<{
        pageNum: number;
        pageSize: number;
        needAffiliations?: boolean;
        needRole?: boolean;
        success?: (res: EasemobChat.AsyncResult<EasemobChat.BaseGroupInfo[] | EasemobChat.GroupInfo[]>) => void;
        error?: (error: EasemobChat.ErrorEvent) => void;
    }>;
    viewedGroupInfo: import("@vue/composition-api").Ref<{
        affiliationsCount?: number;
        groupName: string;
        groupId: string;
        role?: "member" | "admin" | "owner";
        disabled: boolean;
        approval: boolean;
        allowInvites: boolean;
        description: string;
        maxUsers: number;
        public: boolean;
    }>;
    groupNoticeInfo: import("@vue/composition-api").Ref<{
        list: {
            operation: "create" | "destroy" | "requestToJoin" | "acceptRequest" | "joinPublicGroupDeclined" | "inviteToJoin" | "acceptInvite" | "rejectInvite" | "removeMember" | "unblockMember" | "updateInfo" | "memberPresence" | "memberAbsence" | "directJoined" | "changeOwner" | "setAdmin" | "removeAdmin" | "muteMember" | "unmuteMember" | "updateAnnouncement" | "deleteAnnouncement" | "uploadFile" | "deleteFile" | "addUserToAllowlist" | "removeAllowlistMember" | "muteAllMembers" | "unmuteAllMembers" | "memberAttributesUpdate";
            id: string;
            from: string;
            name?: string;
            detail?: {
                name?: string;
                description?: string;
                public?: boolean;
                approval?: boolean;
                allowInvites?: boolean;
                maxUsers?: number;
                inviteNeedConfirm?: boolean;
                ext?: string;
                lastModified?: number;
            } | undefined;
            memberCount?: number;
            time: number;
        }[];
        unReadCount: number;
    }>;
    groupDetailMap: import("@vue/composition-api").Ref<Map<string, EasemobChat.GroupDetailInfo>>;
    destroyGroup: (groupId: string) => Promise<EasemobChat.AsyncResult<EasemobChat.DestroyGroupResult>>;
    setViewedGroupInfo: (group: EasemobChat.GroupInfo) => void;
    getJoinedGroupList: () => void;
    applyJoinGroup: (groupId: string) => Promise<EasemobChat.AsyncResult<EasemobChat.CommonRequestResult>>;
    createGroup: (params: {
        data: {
            groupname: string;
            desc: string;
            members: EasemobChat.UserId[];
            public: boolean;
            approval: boolean;
            allowinvites: boolean;
            inviteNeedConfirm: boolean;
            maxusers: number;
            ext?: string;
        };
        success?: (res: EasemobChat.AsyncResult<EasemobChat.CreateGroupResult>) => void;
        error?: (error: EasemobChat.ErrorEvent) => void;
    }) => Promise<EasemobChat.AsyncResult<EasemobChat.CreateGroupResult>>;
    getGroupInfo: (groupId: string | string[]) => Promise<EasemobChat.AsyncResult<EasemobChat.GroupDetailInfo[]>>;
    setJoinedGroupList: (groups: EasemobChat.GroupInfo[]) => void;
    addGroupNotice: (event: GroupNotice) => void;
    removeStoreGroup: (groupId: string) => void;
    inviteJoinGroup: (groupId: string, members: string[]) => Promise<EasemobChat.AsyncResult<EasemobChat.InviteUsersToGroupResult[]>>;
    removeUserFromGroup: (groupId: string, members: string[]) => Promise<EasemobChat.AsyncResult<EasemobChat.RemoveGroupMemberResult[]>>;
    getGroupMembers: (groupId: string, pageNum: number) => Promise<EasemobChat.AsyncResult<EasemobChat.GroupMember[]>>;
    clearGroupNoticeUnReadCount: () => void;
    leaveGroup: (groupId: string) => Promise<EasemobChat.AsyncResult<{
        result: true;
    }>>;
    clear: () => void;
}, never>, Pick<{
    joinedGroupList: import("@vue/composition-api").Ref<{
        affiliationsCount?: number;
        groupName: string;
        groupId: string;
        role?: "member" | "admin" | "owner";
        disabled: boolean;
        approval: boolean;
        allowInvites: boolean;
        description: string;
        maxUsers: number;
        public: boolean;
    }[]>;
    getJoinedGroupListParams: import("@vue/composition-api").Ref<{
        pageNum: number;
        pageSize: number;
        needAffiliations?: boolean;
        needRole?: boolean;
        success?: (res: EasemobChat.AsyncResult<EasemobChat.BaseGroupInfo[] | EasemobChat.GroupInfo[]>) => void;
        error?: (error: EasemobChat.ErrorEvent) => void;
    }>;
    viewedGroupInfo: import("@vue/composition-api").Ref<{
        affiliationsCount?: number;
        groupName: string;
        groupId: string;
        role?: "member" | "admin" | "owner";
        disabled: boolean;
        approval: boolean;
        allowInvites: boolean;
        description: string;
        maxUsers: number;
        public: boolean;
    }>;
    groupNoticeInfo: import("@vue/composition-api").Ref<{
        list: {
            operation: "create" | "destroy" | "requestToJoin" | "acceptRequest" | "joinPublicGroupDeclined" | "inviteToJoin" | "acceptInvite" | "rejectInvite" | "removeMember" | "unblockMember" | "updateInfo" | "memberPresence" | "memberAbsence" | "directJoined" | "changeOwner" | "setAdmin" | "removeAdmin" | "muteMember" | "unmuteMember" | "updateAnnouncement" | "deleteAnnouncement" | "uploadFile" | "deleteFile" | "addUserToAllowlist" | "removeAllowlistMember" | "muteAllMembers" | "unmuteAllMembers" | "memberAttributesUpdate";
            id: string;
            from: string;
            name?: string;
            detail?: {
                name?: string;
                description?: string;
                public?: boolean;
                approval?: boolean;
                allowInvites?: boolean;
                maxUsers?: number;
                inviteNeedConfirm?: boolean;
                ext?: string;
                lastModified?: number;
            } | undefined;
            memberCount?: number;
            time: number;
        }[];
        unReadCount: number;
    }>;
    groupDetailMap: import("@vue/composition-api").Ref<Map<string, EasemobChat.GroupDetailInfo>>;
    destroyGroup: (groupId: string) => Promise<EasemobChat.AsyncResult<EasemobChat.DestroyGroupResult>>;
    setViewedGroupInfo: (group: EasemobChat.GroupInfo) => void;
    getJoinedGroupList: () => void;
    applyJoinGroup: (groupId: string) => Promise<EasemobChat.AsyncResult<EasemobChat.CommonRequestResult>>;
    createGroup: (params: {
        data: {
            groupname: string;
            desc: string;
            members: EasemobChat.UserId[];
            public: boolean;
            approval: boolean;
            allowinvites: boolean;
            inviteNeedConfirm: boolean;
            maxusers: number;
            ext?: string;
        };
        success?: (res: EasemobChat.AsyncResult<EasemobChat.CreateGroupResult>) => void;
        error?: (error: EasemobChat.ErrorEvent) => void;
    }) => Promise<EasemobChat.AsyncResult<EasemobChat.CreateGroupResult>>;
    getGroupInfo: (groupId: string | string[]) => Promise<EasemobChat.AsyncResult<EasemobChat.GroupDetailInfo[]>>;
    setJoinedGroupList: (groups: EasemobChat.GroupInfo[]) => void;
    addGroupNotice: (event: GroupNotice) => void;
    removeStoreGroup: (groupId: string) => void;
    inviteJoinGroup: (groupId: string, members: string[]) => Promise<EasemobChat.AsyncResult<EasemobChat.InviteUsersToGroupResult[]>>;
    removeUserFromGroup: (groupId: string, members: string[]) => Promise<EasemobChat.AsyncResult<EasemobChat.RemoveGroupMemberResult[]>>;
    getGroupMembers: (groupId: string, pageNum: number) => Promise<EasemobChat.AsyncResult<EasemobChat.GroupMember[]>>;
    clearGroupNoticeUnReadCount: () => void;
    leaveGroup: (groupId: string) => Promise<EasemobChat.AsyncResult<{
        result: true;
    }>>;
    clear: () => void;
}, "createGroup" | "getGroupInfo" | "destroyGroup" | "leaveGroup" | "clear" | "setViewedGroupInfo" | "getJoinedGroupList" | "applyJoinGroup" | "setJoinedGroupList" | "addGroupNotice" | "removeStoreGroup" | "inviteJoinGroup" | "removeUserFromGroup" | "getGroupMembers" | "clearGroupNoticeUnReadCount">>;
