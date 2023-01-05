import { Action, createReducer, on } from "@ngrx/store";
import { createArticleAction, createArticleFalureAction, createArticleSuccessAction } from "./actions/createArticle.action";
import { CreateArticleStateInterface } from "./types/createArticle.interface";

const initialState: CreateArticleStateInterface = {
    isSubmitting: false,
    validationErrors: null,
}

const createArticleReducer = createReducer(initialState,
    on(createArticleAction, 
        (state): CreateArticleStateInterface => ({
            ...state,
            isSubmitting: true
        })),
    on(createArticleSuccessAction, 
        (state): CreateArticleStateInterface => ({
            ...state,
            isSubmitting: false
        })),
    on(createArticleFalureAction, 
        (state, action): CreateArticleStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        }))
    )

export function reducers(state: CreateArticleStateInterface, action:Action) {
    return createArticleReducer(state, action)
}