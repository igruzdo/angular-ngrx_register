import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PopularTagsStateInterface } from "./effects/popularTagsState.interface";

export const popularTagsFettureSelector = createFeatureSelector<PopularTagsStateInterface>('popularTags');
export const popularTagsSelector = createSelector(
    popularTagsFettureSelector,
    (poplarTagsState: PopularTagsStateInterface) => poplarTagsState.data
)

export const isLoadingSelector = createSelector(
    popularTagsFettureSelector,
    (poplarTagsState: PopularTagsStateInterface) => poplarTagsState.isLoading
)

export const errorSelector = createSelector(
    popularTagsFettureSelector,
    (poplarTagsState: PopularTagsStateInterface) => poplarTagsState.error
)