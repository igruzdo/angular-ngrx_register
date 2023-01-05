import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CreateArticleStateInterface } from "./types/createArticle.interface";


export const createArticleFeatureSevector = createFeatureSelector<CreateArticleStateInterface>('createArticle');

export const isSubmittingSelector = createSelector(createArticleFeatureSevector, (createArticleState: CreateArticleStateInterface) => 
    createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(createArticleFeatureSevector, (createArticleState: CreateArticleStateInterface) => 
    createArticleState.validationErrors
);