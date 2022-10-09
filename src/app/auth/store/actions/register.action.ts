import { createAction, props } from "@ngrx/store";
import { ActionsTypes } from "../actions.types";

export const registerAction = createAction(
        ActionsTypes.REGISTER, 
        props<{username: string; email: string; password: string}>()
    )