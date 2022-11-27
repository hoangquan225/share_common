export default class TTCSconfig {
    static LOGIN_FAILED = -1;
    static LOGIN_SUCCESS = 0;
    static LOGIN_ACCOUNT_IS_USED = 1;
    static LOGIN_ACCOUNT_NOT_EXIST = 2;
    static LOGIN_WRONG_PASSWORD = 3;
    static LOGIN_WRONG_PROVIDER = 4;
    static LOGIN_ACCOUNT_NOT_ACTIVATED = 5;
    static LOGIN_TOKEN_INVALID = 8;
    static LOGIN_WAIT_FOR_EMAIL_VERIFICATION = 9;

    static UserStatus = Object.freeze({
        NOT_ACTIVATED: -2,
        DELETED: -1,
        NORMAL: 0
    })
}