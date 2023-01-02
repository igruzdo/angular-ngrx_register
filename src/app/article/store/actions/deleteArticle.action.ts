import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const deleteArticleAction = createAction(ActionTypes.DELETE_ARTICLE, props<{slug: string}>());

export const deleteArticleSuccessAction = createAction(ActionTypes.DELETE_ARTICLE_SUCCESS);

export const deleteArticleFalureAction = createAction(ActionTypes.DELETE_ARTICLE_FALURE);

