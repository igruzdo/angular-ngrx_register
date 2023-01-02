import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { combineLatest, map, Observable, Subscription } from "rxjs";
import { currentUserSelector } from "../auth/store/selectors";
import { ArticleInterface } from "../shared/types/article.interface";
import { CurrentUserInterface } from "../shared/types/currentUser.interface";
import { deleteArticleAction } from "./store/actions/deleteArticle.action";
import { getArticleAction } from "./store/actions/getArticle.action";
import { articleSelector, errorSelector, isLoadingSelector } from "./store/selectors";

@Component({
    selector: 'mc-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
    private slug: string;
    public article: ArticleInterface | null;
    private articleSubscribtion: Subscription;
    public isLoading$: Observable<boolean>;
    public error$: Observable<string | null>
    public isAuthor$: Observable<boolean>

    constructor(private store: Store, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.initializedValues();
        this.initializeListeners();
        this.fetchData();
    }

    ngOnDestroy(): void {
        this.articleSubscribtion.unsubscribe();
    }

    private fetchData = ():void  => {
        this.store.dispatch(getArticleAction({slug: this.slug}));
    }

    private initializeListeners = ():void => {
        this.articleSubscribtion = this.store.pipe(select(articleSelector)).subscribe((article: ArticleInterface | null) => {
            this.article = article;
        })
    }

    public deleteArticle = (): void => {
        this.store.dispatch(deleteArticleAction({slug: this.slug}))
    }

    private initializedValues = ():void  => {
        this.slug = this.route.snapshot.paramMap.get('slug')
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.isAuthor$ = combineLatest([
            this.store.pipe(select(articleSelector)),
            this.store.pipe(select(currentUserSelector)),
        ]).pipe(
            map(([article, currentUser]: [ArticleInterface, CurrentUserInterface]) => {
                if(!article || !currentUser) {
                    return false;
                } 
                return currentUser.username === article.author.username
            })
        )
    }

}
