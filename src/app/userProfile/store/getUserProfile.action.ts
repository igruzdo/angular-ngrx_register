import { createAction, props } from "@ngrx/store";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { ActionTypes } from "./actionTypes";

export const getUserProfileAction = createAction(
    ActionTypes.GET_USER_PROFILE,
    props<{slug: string}>()
)

export const getUserProfileActionSuccess = createAction(
    ActionTypes.GET_USER_PROFILE_SUCCESS,
    props<{userProfile: ProfileInterface}>()
)

export const getUserProfileActionFalure = createAction(
    ActionTypes.GET_USER_PROFILE_FALURE
)