import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { CurrentUserInputInterface } from "src/app/shared/types/currentUserInput.interface";
import { ActionsTypes } from "../actions.types";

export const updateCurrentUserAction = createAction(
    ActionsTypes.UPDATE_CURRENT_USER,
    props<{currentUserInput: CurrentUserInputInterface}>()
)

export const updateCurrentUserSuccessAction = createAction(
    ActionsTypes.UPDATE_CURRENT_USER_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const updateCurrentUserFalureAction = createAction(
    ActionsTypes.UPDATE_CURRENT_USER_FALURE,
    props<{errors: BackendErrorsInterface}>()
)