import { Action, createReducer, on } from "@ngrx/store";
import { FeedStateInterface } from "../types/feedState.interface";
import { getFeedAction, getFeedFalureAction, getFeedSuccessAction } from "./actions/getFeed.action";

const initialState: FeedStateInterface = {
    isLoading: false,
    error: null,
    data: null,
}

const feedReducer = createReducer(
    initialState,
    on(getFeedAction, (state: FeedStateInterface) => ({
        ...state,
        isLoading: true
    })),
    on(getFeedSuccessAction, (state: FeedStateInterface, action) => ({
        ...state,
        isLoading: false,
        data: action.feed
    })),
    on(getFeedFalureAction, (state: FeedStateInterface) => ({
        ...state,
        isLoading: false,
    })),
)

export function reducers(state: FeedStateInterface, action: Action) {
    return feedReducer(state, action);
}