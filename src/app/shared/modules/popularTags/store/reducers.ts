import { Action, createReducer, on } from "@ngrx/store";
import { getPopularTagsAction, getPopularTagsFalureAction, getPopularTagsSuccessAction } from "./actions/getPopularTags.action";
import { PopularTagsStateInterface } from "./effects/popularTagsState.interface";

const initialState: PopularTagsStateInterface = {
    data: null,
    isLoading: false,
    error: null,
}

const popularTagsReducer = createReducer(
    initialState,
    on(getPopularTagsAction, (state): PopularTagsStateInterface => ({
        ...state,
        isLoading: true,
    })),
    on(getPopularTagsSuccessAction, (state, action): PopularTagsStateInterface => ({
        ...state,
        isLoading: false,
        data: action.popularTags
    })),
    on(getPopularTagsFalureAction, (state): PopularTagsStateInterface => ({
        ...state,
        isLoading: true,
    }))
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
    return popularTagsReducer(state, action)
}