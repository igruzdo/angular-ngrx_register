import { createAction, props } from "@ngrx/store";
import { RegisterRequesInterface } from "../../types/registerRequest.interface";
import { ActionsTypes } from "../actions.types";

export const registerAction = createAction(
        ActionsTypes.REGISTER, 
        props<RegisterRequesInterface>()
    )