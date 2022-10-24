import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { loginAction } from "../../store/actions/login.action";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";
import { LoginRequesInterface } from "../../types/loginRequest.interface";

@Component({
    selector: 'mc-login',
    templateUrl: './login.component.html',
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    public form: FormGroup;
    public isSubmiting$: Observable<boolean>
    public backendErrors$: Observable<BackendErrorsInterface | null>

    constructor(
            private fb: FormBuilder,
            private store: Store,
        ) {}

    ngOnInit(): void {
        this.initializeForm();
        this.initializeValues();
    } 

    private initializeForm(): void {
        this.form = this.fb.group({
            email: '',
            password: ''
        })
    }

    private initializeValues(): void {
        this.isSubmiting$ = this.store.pipe(select(isSubmittingSelector));
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    }

    public onSubmit(): void {
        const request: LoginRequesInterface = {
            user: this.form.value
        }
        this.store.dispatch(loginAction({request}))
    }
}