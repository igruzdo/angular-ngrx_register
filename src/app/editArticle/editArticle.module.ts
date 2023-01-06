import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ArticleFormModule } from "../shared/modules/articleForm/articleForm.module";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { ArticleService as SharedArticleService } from "../shared/services/article.service";
import { EditArticleComponent } from "./components/editArticle/editArticle.component";
import { EditArticleService } from "./services/editArticle.service";
import { UpdateArticleEffect } from "./store/effects/editArticle.effect";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { reducers } from "./store/redusers";

const routes = [
    {
        path: 'articles/:slug/edit',
        component: EditArticleComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        ArticleFormModule,
        LoadingModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
        StoreModule.forFeature('editArticle', reducers),
    ],
    declarations: [EditArticleComponent],
    providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}