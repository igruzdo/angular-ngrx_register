import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { BackendErrorMessagesModule } from "../shared/types/modules/backendErrorMessages/backendErrorMessages.module";
import { LoginComponent } from "./components/login/login.component";
import { AuthService } from "./services/auth.service";
import { GetCurrentUserEffect } from "./store/effects/getCurrentUSer.effect";
import { LoginEffect } from "./store/effects/login.effect";
import { RegisterEffect } from "./store/effects/register.effect";
import { reducers } from "./store/reducers";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]


@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        HttpClientModule,
        EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
        BackendErrorMessagesModule,
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
})
export class AuthModule {

}