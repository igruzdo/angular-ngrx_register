import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BackendErrorMessagesModule } from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { GetCurrentUserEffect } from "./store/effects/getCurrentUser.effect";
import { LoginEffect } from "./store/effects/login.effect";
import { LogoutEffect } from "./store/effects/logout.effect";
import { RegisterEffect } from "./store/effects/register.effect";
import { UpdateCurrentUserEffect } from "./store/effects/updateCurrentUser.effect";
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
        EffectsModule.forFeature([
            RegisterEffect, 
            LoginEffect, 
            GetCurrentUserEffect, 
            UpdateCurrentUserEffect,
            LogoutEffect,
        ]),
        BackendErrorMessagesModule,
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
    ],
})
export class AuthModule {

}