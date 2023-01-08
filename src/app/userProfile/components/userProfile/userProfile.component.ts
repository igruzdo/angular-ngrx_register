import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { combineLatest, filter, map, Observable, Subscription } from "rxjs";
import { currentUserSelector } from "src/app/auth/store/selectors";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { getUserProfileAction } from "../../store/getUserProfile.action";
import { errorSelector, isLoadingSelector, userProfileSelector } from "../../store/selectors";

@Component({
    selector: 'mc-user-profile',
    templateUrl: './userProfile.component.html'
})
export class UserProfileComponent implements OnInit, OnDestroy {
    public userProfile: ProfileInterface;
    public isLoading$: Observable<boolean>;
    public error$: Observable<string | null>;
    private userProfileSubscription: Subscription;
    private slug: string;
    public isCurrentUserProfile$: Observable<boolean>;

    constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}

    ngOnDestroy(): void {
        this.userProfileSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.initializeValue();
        this.initializeListeners();
    }
    private initializeListeners = (): void => {
        this.userProfileSubscription = this.store.pipe(select(userProfileSelector)).subscribe((userProfile: ProfileInterface) => {
            this.userProfile = userProfile;
        });

        this.route.params.subscribe((params: Params) => {
            this.slug = params['slug'];
            this.fetchData();
        })
    }

    private initializeValue = (): void => {
        this.slug = this.route.snapshot.paramMap.get('slug');
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.isCurrentUserProfile$ = combineLatest([
            this.store.pipe(select(currentUserSelector), filter(Boolean)),
            this.store.pipe(select(userProfileSelector), filter(Boolean)),
        ]).pipe(
            map(([currentUser, userProfile]: [CurrentUserInterface, ProfileInterface]) => {
                return currentUser.username === userProfile.username
            })
        )
    }

    public getApiUrl = (): string => {
        const isFavorited = this.router.url.includes('favorites');
        return isFavorited ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;
    }

    private fetchData = (): void => {
        this.store.dispatch(getUserProfileAction({slug: this.slug}))
    }
}