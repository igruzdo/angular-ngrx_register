import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FeedService } from "../../services/feed.service";
import { getFeedAction, getFeedFalureAction, getFeedSuccessAction } from "../actions/getFeed.action";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";

@Injectable()
export class GetFeedEffect {
    getFeed$ = createEffect(() => this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({url}) => {
            return this.feedService.getFeed(url).pipe(
                map((feed: GetFeedResponseInterface) => {
                    return getFeedSuccessAction({feed});
                })
            )
        }),
        catchError(() => {
            return of( getFeedFalureAction());
        })
    ))

    constructor(
        private actions$: Actions, 
        private feedService: FeedService, 
    ) {}
}