import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { filter, Observable, Subscription, tap } from "rxjs";
import { logoutAction } from "src/app/auth/store/actions/sync.action";
import { updateCurrentUserAction } from "src/app/auth/store/actions/updateCurrentUser.action";
import { currentUserSelector } from "src/app/auth/store/selectors";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { CurrentUserInputInterface } from "src/app/shared/types/currentUserInput.interface";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";

@Component({
    selector: 'ms-settings',
    templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {
    public currentUser: CurrentUserInterface;
    public currentUserSubscription: Subscription;
    public form: FormGroup;
    public isSubmiting$: Observable<boolean>;
    public backendErrors$: Observable<BackendErrorsInterface | null>;

    constructor(private fb: FormBuilder, private store: Store) {}
    
    ngOnInit(): void {
        this.initialiseValues();
        this.initialiseListeners();
    }
    ngOnDestroy(): void {
        this.currentUserSubscription.unsubscribe();
    }

    private initialiseListeners = (): void => {
        this.currentUserSubscription = this.store.pipe(
            select(currentUserSelector), 
            filter(Boolean),
            tap((currentUser: CurrentUserInterface) => {
                this.currentUser = currentUser;
            }),
            tap(() => {
                this.initialiseForm();
            })
        ).subscribe();
    }

    private initialiseForm = (): void => {
        this.form = this.fb.group({
            image: this.currentUser.image,
            userName: this.currentUser.username,
            bio: this.currentUser.bio,
            email: this.currentUser.email,
            password: '',
        })
    }

    private initialiseValues = (): void => {
        this.isSubmiting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    public submit = (): void => {
        const currentUserInput: CurrentUserInputInterface = {
            ...this.currentUser,
            ...this.form.value,
        }
        this.store.dispatch(updateCurrentUserAction({currentUserInput}))
    }

    public logout = (): void => {
        this.store.dispatch(logoutAction())
    }
}