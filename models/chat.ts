import TTCSconfig from "../common/config";
import { isObject } from "../utils/validation";
import { UserInfo } from "./user";

class Chat {
    id?: string | undefined;
    idChat: string | undefined;
    userIdSend: string | undefined;
    userIdReceive: string | undefined;
    users: String[];
    content: string;
    react?: {
        type: number,
        idUser: string
    }[];
    status?: number;
    index?: number;
    userInfo?: UserInfo | null;
    createDate?: number;
    updateDate?: number;
    constructor(args?: any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.idChat = args?.idChat ?? null;
        this.userIdSend = isObject(args.userIdSend) ? new UserInfo(args.userIdSend)?._id : (args?.userIdSend ?? undefined);
        this.userIdReceive = isObject(args.userIdReceive) ? new UserInfo(args.userIdReceive)?._id : (args?.userIdReceive ?? undefined);
        this.userInfo = isObject(args.userIdSend) ? new UserInfo(args.userIdSend) : (args.userInfo ?? null);
        this.users = args?.users ?? [];
        this.content = args?.content ?? '';
        this.react = args?.react ?? [];
        this.status = args?.status ?? TTCSconfig.STATUS_PUBLIC;
        this.index = args?.index ?? 0;
        this.createDate = args?.createDate ?? Date.now();
        this.updateDate = args?.updateDate ?? Date.now();
    }
}

export { Chat };
