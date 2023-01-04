import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
    selector: 'mc-article-form',
    templateUrl: './articleForm.component.html'
})
export class ArticleFormComponent implements OnInit {
    @Input('initialValues') initialValuesProps: ArticleInputInterface;
    @Input ('isSubmiting') isSubmitingProps: boolean;
    @Input ('errors') errorsProps: BackendErrorsInterface | null;

    @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

    public form: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    private initializeForm = (): void => {
        this.form = this.fb.group({
            title: this.initialValuesProps.title,
            description: this.initialValuesProps.description,
            body: this.initialValuesProps.body,
            taglist: this.initialValuesProps.tagList.join(' ')
        })
    };
    public onSubmit = (): void => {
        this.articleSubmitEvent.emit(this.form.value)
    } 
}