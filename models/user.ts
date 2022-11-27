class UserInfo {
    _id?: string;
    account: string;
    password: string;
    name: string;
    email: string;
    classNumber: number;
    loginCode?: number;
    phoneNumber?: string;
    avatar?: string;
    address?: string;
    facebookId?: string;
    userType?: number;
    birth?: number;
    gender?: number;
    registerDate?: number;
    token?: string;
    age?: number = 0;
    lastLogin?: number;
    status?:number;
    constructor(args?: any) {
        if (!args) {
            args = {};
        }
        this._id = args._id ?? undefined;
        this.account = args.account ?? "";
        this.name = args.name ?? "";
        this.avatar = args.avatar ?? "";
        this.classNumber = args.classNumber ?? 0;
        this.loginCode = args.loginCode ?? -1;
        this.email = args.email ?? "";
        this.phoneNumber = args.phoneNumber ?? "";
        this.password = args.password ?? "";
        this.address = args.address ?? "";
        this.facebookId = args.facebookId ?? "";
        this.userType = args.userType ?? 0;
        this.birth = args.birth ?? 0;
        this.gender = args.gender ?? 0;
        this.registerDate = args.registerDate ?? 0;
        this.token = args.token ?? "";
        this.lastLogin = args.lastLogin ?? Date.now()
        this.status = args.status ?? 1;
    }
}


export { UserInfo };

