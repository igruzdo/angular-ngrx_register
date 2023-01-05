import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { CreateArticleService } from "../../services/createArticle.service";
import { createArticleAction, createArticleFalureAction, createArticleSuccessAction } from "../actions/createArticle.action";
import { ArticleInterface } from "src/app/shared/types/article.interface";

@Injectable()
export class CreateArticleEffect {
    createArticle$ = createEffect(() => this.actions$.pipe(
        ofType(createArticleAction),
        switchMap(({articleInput}) => {
            return this.createArticleService.createArticle(articleInput).pipe(
                map((article: ArticleInterface) => {
                    return createArticleSuccessAction({article})
                })
            )
        }),
        catchError((errorResponse: HttpErrorResponse) => {
            return of(createArticleFalureAction({errors: errorResponse.error.errors}))
        })
    ))

    redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({article}) => {
            this.router.navigate(['/articles', article.slug])
        })
    ), {
        dispatch: false,
    })

    constructor(
        private actions$: Actions, 
        private createArticleService: CreateArticleService, 
        private router: Router
    ) {}
}