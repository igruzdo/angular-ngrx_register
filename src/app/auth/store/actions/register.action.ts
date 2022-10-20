import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterRequesInterface } from "../../types/registerRequest.interface";
import { ActionsTypes } from "../actions.types";

export const registerAction = createAction(
    ActionsTypes.REGISTER, 
    props<{request: RegisterRequesInterface}>()
)

export const registerSuccessAction = createAction(
    ActionsTypes.REGISTER_SUCCESS, 
    props<{currentUser: CurrentUserInterface}>()
)

export const registerFalureAction = createAction(
    ActionsTypes.REGISTER_FALURE,
    props<{errors: BackendErrorsInterface}>()
)