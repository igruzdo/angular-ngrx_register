import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { SaveArticleResponseInterface } from "src/app/shared/types/saveArticleResponse.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class EditArticleService {
    constructor(private http: HttpClient) {}

    public updateArticle = (articleInput: ArticleInputInterface, slug:string): Observable<ArticleInterface> => {
        const fullUrl =`${environment.apiUrl}/articles/${slug}`;

        return this.http.put<SaveArticleResponseInterface>(fullUrl, articleInput).pipe(
            map((response: SaveArticleResponseInterface) => response.article)
        )
    }
}