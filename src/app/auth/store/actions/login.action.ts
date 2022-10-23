import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { LoginRequesInterface } from "../../types/loginRequest.interface";
import { ActionsTypes } from "../actions.types";

export const loginAction = createAction(
    ActionsTypes.LOGIN,
    props<{request: LoginRequesInterface}>()
)

export const loginSuccessAction = createAction(
    ActionsTypes.LOGIN_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const loginFalureAction = createAction(
    ActionsTypes.LOGIN_FALURE,
    props<{errors: BackendErrorsInterface}>()
)