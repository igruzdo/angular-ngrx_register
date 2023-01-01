import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMessageModule } from "../shared/modules/errorMessage/errorMessage.module";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { TagListModule } from "../shared/modules/tagList/tagList.module";
import { ArticleService as SharedArticleService } from "../shared/services/article.service";
import { ArticleComponent } from "./article.component";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { reducers } from "./store/reducer";

const routes = [
    {
        path: 'articles/:slug',
        component: ArticleComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetArticleEffect]),
        StoreModule.forFeature('article', reducers),
        RouterModule,
        ErrorMessageModule,
        LoadingModule,
        TagListModule,
        RouterModule.forChild(routes),
    ],
    declarations: [ArticleComponent],
    exports: [ArticleComponent],
    providers: [SharedArticleService]
})
export class ArticleModule {}