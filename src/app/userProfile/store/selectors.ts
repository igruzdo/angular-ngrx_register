import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserProfileStateInterface } from "../types/userProfileState.interface";

export const userProfileFeatureSelectoe = createFeatureSelector<UserProfileStateInterface>('userProfile');

export const isLoadingSelector = createSelector(userProfileFeatureSelectoe, (userProfileState: UserProfileStateInterface) => 
    userProfileState.isLoading
);

export const errorSelector = createSelector(userProfileFeatureSelectoe, (userProfileState: UserProfileStateInterface) => 
    userProfileState.error
);

export const  userProfileSelector = createSelector(userProfileFeatureSelectoe, (userProfileState: UserProfileStateInterface) => 
    userProfileState.data
);