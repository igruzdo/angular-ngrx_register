import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EditArticleStateInterface } from "./types/editArticle.interface";


export const editArticleFeatureSevector = createFeatureSelector<EditArticleStateInterface>('editArticle');

export const isSubmittingSelector = createSelector(editArticleFeatureSevector, (editArticleState: EditArticleStateInterface) => 
    editArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(editArticleFeatureSevector, (editArticleState: EditArticleStateInterface) => 
    editArticleState.validationErrors
);

export const isLoadingSelector = createSelector(editArticleFeatureSevector, (editArticleState: EditArticleStateInterface) => 
    editArticleState.isLoading
);

export const articleSelector = createSelector(editArticleFeatureSevector, (editArticleState: EditArticleStateInterface) => 
    editArticleState.article
);