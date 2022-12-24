import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { parseUrl, stringify } from "query-string";
import { Observable, Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { getFeedAction } from "./store/actions/getFeed.action";
import { errorSelector, feedSelector, isLoadingSelector } from "./store/selectors";
import { GetFeedResponseInterface } from "./types/getFeedResponse.interface";

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
    @Input('apiUrl') apiUrlProps: string;

    public isLoading$: Observable<boolean>;
    public error$: Observable<string | null>;
    public feed$: Observable<GetFeedResponseInterface | null>;
    public limit = environment.limit;
    public baseUrl: string;
    private queryParamsSubscription: Subscription;
    public currentPage: number;

    constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}
    ngOnChanges(changes: SimpleChanges): void {
        const isApiUrlChanged = !changes["apiUrlProps"].firstChange && changes["apiUrlProps"].currentValue !== changes["apiUrlProps"].previousValue;
        if(isApiUrlChanged) {
            this.fetchFeed();
        }
    }   

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.initializeValues();
        this.initializeListeners();
    }

    private initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.feed$ = this.store.pipe(select(feedSelector));
        this.baseUrl = this.router.url.split('?')[0];
    }

    private initializeListeners(): void {
        this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
            this.currentPage = Number(params["page"] || 1)
        })
        this.fetchFeed();
    }

    private fetchFeed(): void {
        const offset = (this.currentPage - 1) * this.limit;
        const prsedUrl = parseUrl(this.apiUrlProps);
        const stringifiedParams = stringify({
            limit: this.limit,
            offset,
            ...prsedUrl.query
        });
        const apiUrlWithParams = `${prsedUrl.url}?${stringifiedParams}`
        this.store.dispatch(getFeedAction({url: apiUrlWithParams}));
    }
}
