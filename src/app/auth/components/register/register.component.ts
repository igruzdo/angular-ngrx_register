import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
    public form: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.initializeForm()
    }

    private initializeForm(): void {
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: '',
            password: ''
        })
    }

    public onSubmit(): void {

        console.log(this.form.value)
    }
}