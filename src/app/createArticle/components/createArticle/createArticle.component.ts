import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { createArticleAction } from "../../store/actions/createArticle.action";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";

@Component({
    selector: 'mc-create-article',
    templateUrl: './createArticle.component.html'
})
export class CreateArticleComponent implements OnInit {
    public isSubmiting$: Observable<boolean>;
    public backendErrors$: Observable<BackendErrorsInterface | null>;

    public initialValues:ArticleInputInterface = {
        title: '',
        description: '',
        body: '',
        tagList: []
    }

    constructor(private store: Store) {}
    
    ngOnInit(): void {
        this.isSubmiting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    public onSubmit = (articleInput: ArticleInputInterface) => {
        this.store.dispatch(createArticleAction({articleInput}));
    }
}