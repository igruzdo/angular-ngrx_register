import { Action, createReducer, on } from "@ngrx/store";
import { updateCurrentUserAction } from "src/app/auth/store/actions/updateCurrentUser.action";
import { updateArticleFalureAction, updateArticleSuccessAction } from "src/app/editArticle/store/actions/editArticle.action";
import { SettingStateInterface } from "../types/settingsState.interface";

const initialState: SettingStateInterface = {
    isSubmitting: false,
    validationErrors: null
}

const settingsReduser = createReducer(
    initialState,

    on(updateCurrentUserAction, (state): SettingStateInterface => ({
        ...state,
        isSubmitting: true,
    })),
    on(updateArticleSuccessAction, (state): SettingStateInterface => ({
        ...state,
        isSubmitting: false,
    })),
    on(updateArticleFalureAction, (state, action): SettingStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
)

export function reducers(state: SettingStateInterface, action: Action) {
    return settingsReduser(state, action)
}