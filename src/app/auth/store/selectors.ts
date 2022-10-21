import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from "../types/authState.interface";

export const authFeatureSevector = createFeatureSelector<AuthStateInterface>('auth');
export const isSubmittingSelector = createSelector(authFeatureSevector, (authState: AuthStateInterface) => 
    authState.isSubmitting
);

export const validationErrorsSelector = createSelector(authFeatureSevector, (authState: AuthStateInterface) => 
    authState.validationErrors
);