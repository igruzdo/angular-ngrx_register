import { createAction, props } from "@ngrx/store";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { ActionsTypes } from "../actions.types";

export const getCurrentUserAction = createAction(
    ActionsTypes.GET_CURRENT_USER
)

export const getCurrentUserSuccessAction = createAction(
    ActionsTypes.GET_CURRENT_USER_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const getCurrentUserFalureAction = createAction(
    ActionsTypes.GET_CURRENT_USER_FALURE
)