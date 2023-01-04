import { Component } from "@angular/core";

@Component({
    selector: 'mc-create-article',
    templateUrl: './createArticle.component.html'
})
export class CreateArticleComponent {
    public initialValues = {
        title: 'asdasd',
        description: 'asdasd',
        body: 'ddddddddd',
        tagList: ['sadas', '12321']
    }

    public onSubmit = (res: any) => {

    }
}