import { createReducer, on, Action } from "@ngrx/store";
import { UserProfileStateInterface } from "../types/userProfileState.interface";
import { getUserProfileAction, getUserProfileActionFalure, getUserProfileActionSuccess } from "./getUserProfile.action";

const initialState: UserProfileStateInterface = {
    isLoading: false,
    data: null,
    error: null
}

const userProfileReducer = createReducer(
    initialState,
    on(getUserProfileAction, (state: UserProfileStateInterface) => ({
        ...state,
        isLoading: true,
    })),
    on(getUserProfileActionSuccess, (state: UserProfileStateInterface, action) => ({
        ...state,
        isLoading: false,
        data: action.userProfile
    })),
    on(getUserProfileActionFalure, (state: UserProfileStateInterface) => ({
        ...state,
        isLoading: false,
    })),
)

export function redusers(state: UserProfileStateInterface, action: Action) {
    return userProfileReducer(state, action)
}