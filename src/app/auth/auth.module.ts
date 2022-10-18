import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { AuthService } from "./services/auth.service";
import { reducers } from "./store/reducers";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
]


@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        HttpClientModule
    ],
    declarations: [RegisterComponent],
})
export class AuthModule {

}