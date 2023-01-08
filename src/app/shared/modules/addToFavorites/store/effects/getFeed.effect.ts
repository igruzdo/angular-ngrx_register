import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { AddToFavoritesService } from "../../services/addToFavorites.service";
import { addToFavoritesAction, addToFavoritesActionFalure, addToFavoritesActionSuccess } from "../actions/addToFavorites.actions";

@Injectable()
export class AddToFavoritesEffect {
    addToFavorites$ = createEffect(() => this.actions$.pipe(
        ofType(addToFavoritesAction),
        switchMap(({isFavorited, slug}) => {
            const article$ = isFavorited ? this.addToFavoritesService.removeFromFavorites(slug) : this.addToFavoritesService.addToFavorites(slug)
            return article$.pipe(
                map((article: ArticleInterface) => {
                    return addToFavoritesActionSuccess({article});
                })
            )
        }),
        catchError(() => {
            return of(addToFavoritesActionFalure());
        })
    ))

    constructor(
        private actions$: Actions, 
        private addToFavoritesService: AddToFavoritesService, 
    ) {}
}