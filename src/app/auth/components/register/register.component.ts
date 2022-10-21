import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction } from "../../store/actions/register.action";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";
import { RegisterRequesInterface } from "../../types/registerRequest.interface";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
    public form: FormGroup;
    public isSubmiting$: Observable<boolean>
    public backendErrors$: Observable<BackendErrorsInterface | null>

    constructor(
            private fb: FormBuilder,
            private store: Store,
            private authService: AuthService
        ) {

    }

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    }

    private initializeForm(): void {
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: '',
            password: ''
        })
    }

    private initializeValues(): void {
        this.isSubmiting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    public onSubmit(): void {
        const request: RegisterRequesInterface = {
            user: this.form.value
        }
        this.store.dispatch(registerAction({request}))
    }
}