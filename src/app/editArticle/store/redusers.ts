import { Action, createReducer, on } from "@ngrx/store";
import { updateArticleAction, updateArticleFalureAction, updateArticleSuccessAction } from "./actions/editArticle.action";
import { getArticleAction, getArticleFalureAction, getArticleSuccessAction } from "./actions/getArticle.action";
import { EditArticleStateInterface } from "./types/editArticle.interface";

const initialState: EditArticleStateInterface = {
    isLoading: false,
    article: null,
    isSubmitting: false,
    validationErrors: null,
}

const editArticleReducer = createReducer(initialState,
    on(updateArticleAction, 
        (state): EditArticleStateInterface => ({
            ...state,
            isSubmitting: true,
        })),
    on(updateArticleSuccessAction, 
        (state): EditArticleStateInterface => ({
            ...state,
            isSubmitting: false,
        })),
    on(updateArticleFalureAction, 
        (state, action): EditArticleStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors,
        })),



    on(getArticleAction, 
        (state): EditArticleStateInterface => ({
            ...state,
            isLoading: true,
        })),
    on(getArticleSuccessAction, 
        (state, action): EditArticleStateInterface => ({
            ...state,
            isLoading: false,
            article: action.article
        })),
    on(getArticleFalureAction, 
        (state): EditArticleStateInterface => ({
            ...state,
            isLoading: false,
        })),
    )

export function reducers(state: EditArticleStateInterface, action:Action) {
    return editArticleReducer(state, action)
}