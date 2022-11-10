import { Component, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getFeedAction } from "./store/actions/getFeed.action";
import { errorSelector, feedSelector, isLoadingSelector } from "./store/selectors";
import { GetFeedResponseInterface } from "./types/getFeedResponse.interface";

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
    @Input('apiUrl') apiUrlProps: string;

    public isLoading$: Observable<boolean>;
    public error$: Observable<string | null>;
    public feed$: Observable<GetFeedResponseInterface | null>;

    constructor(private store: Store){}

    ngOnInit(): void {
        this.initializeValues();
        this.fetchData();
        this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
    }

    private initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.feed$ = this.store.pipe(select(feedSelector));
    }

    private fetchData(): void {
        
    }
}
