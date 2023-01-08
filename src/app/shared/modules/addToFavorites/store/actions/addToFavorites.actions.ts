import { createAction, props } from "@ngrx/store";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ActionTypes } from "../actionTypes";

export const addToFavoritesAction =  createAction(
    ActionTypes.ADD_TO_FAVORITES,
    props<{isFavorited: boolean; slug: string}>()
)

export const addToFavoritesActionSuccess =  createAction(
    ActionTypes.ADD_TO_FAVORITES_SUCCESS,
    props<{article: ArticleInterface}>()
)

export const addToFavoritesActionFalure =  createAction(
    ActionTypes.ADD_TO_FAVORITES_FALURE
)