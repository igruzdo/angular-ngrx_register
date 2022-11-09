import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { currentUserSelector, isAnonimusSelector, isLoggedInSelector } from "src/app/auth/store/selectors";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Component({
    selector: 'mc-topBar',
    templateUrl: './topBar.component.html',
    styleUrls: ['./topBar.component.scss']
})
export class TopBarComponent implements OnInit{
    isLoggedIn$: Observable<boolean>;
    isAnonimus$: Observable<boolean>;
    currentUser$: Observable<CurrentUserInterface | null>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
        this.isAnonimus$ = this.store.pipe(select(isAnonimusSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
    }
}