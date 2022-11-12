import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
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
export class FeedComponent implements OnInit, OnDestroy {
    @Input('apiUrl') apiUrlProps: string;

    public isLoading$: Observable<boolean>;
    public error$: Observable<string | null>;
    public feed$: Observable<GetFeedResponseInterface | null>;
    public limit = environment.limit;
    public baseUrl: string;
    private queryParamsSubscription: Subscription;
    public currentPage: number;

    constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.initializeValues();
        this.fetchData();
        this.store.dispatch(getFeedAction({url: this.apiUrlProps}));
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
    }

    private fetchData(): void {
        
    }
}
