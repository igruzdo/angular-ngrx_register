import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { GetArticleResponseInterface } from "src/app/shared/types/getArticleResponse.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class AddToFavoritesService {

    constructor(private http: HttpClient) {}

    public addToFavorites = (slug: string): Observable<ArticleInterface> => {
        const URL = this.getUrl(slug)
        return this.http.post<GetArticleResponseInterface>(URL, {}).pipe(
            map((data) => this.getArticle(data))
        )
    }

    public removeFromFavorites = (slug: string): Observable<ArticleInterface> => {
        const URL = this.getUrl(slug);
        return this.http.delete<GetArticleResponseInterface>(URL).pipe(
            map((data) => this.getArticle(data))
        )
    }

    private getUrl = (slug: string): string => {
        return `${environment.apiUrl}/articles/${slug}/favorite`
    }

    private getArticle = (res: GetArticleResponseInterface): ArticleInterface => {
        return res.article;
    }
}