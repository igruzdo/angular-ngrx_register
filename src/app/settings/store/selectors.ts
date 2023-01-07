import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SettingStateInterface } from "../types/settingsState.interface";

export const settingsFeatureSevector = createFeatureSelector<SettingStateInterface>('settings');

export const isSubmittingSelector = createSelector(settingsFeatureSevector, (settingsState: SettingStateInterface) => 
    settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(settingsFeatureSevector, (settingsState: SettingStateInterface) => 
    settingsState.validationErrors
);