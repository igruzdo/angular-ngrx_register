import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { LoginRequesInterface } from "../../types/loginRequest.interface";
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