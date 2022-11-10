import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeedStateInterface } from "../types/feedState.interface";

export const feedFeatureSevector = createFeatureSelector<FeedStateInterface>('feed');

export const isLoadingSelector = createSelector(feedFeatureSevector, (feedState: FeedStateInterface) => 
    feedState.isLoading
);

export const errorSelector = createSelector(feedFeatureSevector, (feedState: FeedStateInterface) => 
    feedState.error
);

export const feedSelector = createSelector(feedFeatureSevector, (feedState: FeedStateInterface) => 
    feedState.data
);