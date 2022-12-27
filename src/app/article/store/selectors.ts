import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ArticleStateInterface } from "../types/articleState.interface";

export const articleFeatureSevector = createFeatureSelector<ArticleStateInterface>('article');

export const isLoadingSelector = createSelector(articleFeatureSevector, (articleState: ArticleStateInterface) => 
    articleState.isLoading
);

export const errorSelector = createSelector(articleFeatureSevector, (articleState: ArticleStateInterface) => 
    articleState.error
);

export const articleSelector = createSelector(articleFeatureSevector, (articleState: ArticleStateInterface) => 
    articleState.data
);