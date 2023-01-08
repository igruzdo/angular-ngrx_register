export enum ActionsTypes {
    REGISTER = '[Auth] Register',
    REGISTER_SUCCESS = '[Auth] Register success',
    REGISTER_FALURE = '[Auth] Register falure',

    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login success',
    LOGIN_FALURE = '[Auth] Login falure',

    GET_CURRENT_USER = '[Auth] Get current user',
    GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success',
    GET_CURRENT_USER_FALURE = '[Auth] Get current user falure',

    UPDATE_CURRENT_USER = '[Auth] Update current user',
    UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update current user success',
    UPDATE_CURRENT_USER_FALURE = '[Auth] Update current user falure',

    LOGOUT = '[Auth] Logout'
}