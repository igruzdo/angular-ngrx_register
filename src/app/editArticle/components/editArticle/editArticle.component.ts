import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { filter, map, Observable } from "rxjs";
import { createArticleAction } from "src/app/createArticle/store/actions/createArticle.action";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { updateArticleAction } from "../../store/actions/editArticle.action";
import { getArticleAction } from "../../store/actions/getArticle.action";
import { articleSelector, isLoadingSelector, isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";

@Component({
    selector: 'mc-edit-article',
    templateUrl: './editArticle.component.html'
})
export class EditArticleComponent implements OnInit {
    public isSubmiting$: Observable<boolean>;
    public isLoading$: Observable<boolean>;
    public article$: Observable<ArticleInputInterface>;
    public backendErrors$: Observable<BackendErrorsInterface | null>;
    private slug: string;

    public initialValues$: Observable<ArticleInputInterface>

    constructor(private store: Store, private route: ActivatedRoute) {}
    
    ngOnInit(): void {
        this.initialiseValues();
        this.fetchData();
    }
    private fetchData = (): void => {
        this.store.dispatch(getArticleAction({slug: this.slug}))
    }
    private initialiseValues = (): void => {
        this.slug = this.route.snapshot.paramMap.get('slug');
        this.isSubmiting$ = this.store.pipe(select(isSubmittingSelector));
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
        this.initialValues$ = this.store.pipe(
            select(articleSelector), 
            filter(Boolean),
            map((article: ArticleInterface) => ({
                title: article.title,
                description: article.description,
                body: article.body,
                tagList: article.tagList,
            }))
        )
    }

    public onSubmit = (articleInput: ArticleInputInterface) => {
        this.store.dispatch(updateArticleAction({articleInput, slug: this.slug}));
    }
}