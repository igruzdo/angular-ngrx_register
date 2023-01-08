import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { getCurrentUserAction, getCurrentUserFalureAction, getCurrentUserSuccessAction } from "./actions/getCurrentUser.action";
import { loginAction, loginFalureAction, loginSuccessAction } from "./actions/login.action";
import { registerAction, registerFalureAction, registerSuccessAction } from "./actions/register.action";
import { logoutAction } from "./actions/sync.action";
import { updateCurrentUserSuccessAction } from "./actions/updateCurrentUser.action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoading: false,
    isLoggedIn: null,
    validationErrors: null,
}

const authReducer = createReducer(
    initialState,
    on(registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(registerSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: null,
        currentUser: action.currentUser,
        isLoggedIn: true,
    })),
    on(registerFalureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
        currentUser: null,
        isLoggedIn: false,
    })),
    on(loginAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(loginSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: null,
        currentUser: action.currentUser,
        isLoggedIn: true,
    })),
    on(loginFalureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
        currentUser: null,
        isLoggedIn: false,
    })),
    on(getCurrentUserAction, (state): AuthStateInterface => ({
        ...state,
        isLoading: true,
    })),
    on(getCurrentUserSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(getCurrentUserFalureAction, (state): AuthStateInterface => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
        currentUser: null,
    })),
    on(updateCurrentUserSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isLoading: false,
        currentUser: action.currentUser,
    })),
    on(logoutAction, (): AuthStateInterface => ({
        ...initialState,
        isLoggedIn: false,
    })),
)

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
}