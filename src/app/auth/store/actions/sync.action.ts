import { createAction } from "@ngrx/store";
import { ActionsTypes } from "../actions.types";

export const logoutAction = createAction(
    ActionsTypes.LOGOUT,

)