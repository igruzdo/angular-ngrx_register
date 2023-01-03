import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArticleFormModule } from "../shared/modules/articleForm/articleForm.module";
import { CreateArticleComponent } from "./components/createArticle/createArticle.component";

const routes = [
    {
        path: 'articles/new',
        component: CreateArticleComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        ArticleFormModule,
        RouterModule.forChild(routes),
    ],
    declarations: [CreateArticleComponent],
})
export class CreateArticleModule {}