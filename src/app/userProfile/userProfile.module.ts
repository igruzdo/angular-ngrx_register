import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FeedModule } from "../shared/modules/feed/feed.module";
import { UserProfileComponent } from "./components/userProfile/userProfile.component";
import { UserProfileService } from "./services/userProfile.service";
import { GetUserProfileEffect } from "./store/effects/getUserProfile.effect";
import { redusers } from "./store/reducers";

const routes: Route[] = [
    {
        path: 'profiles/:slug/favorites',
        component: UserProfileComponent,
    },
    {
        path: 'profiles/:slug',
        component: UserProfileComponent,
    },


]

@NgModule({
    imports: [
        CommonModule,
        FeedModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([GetUserProfileEffect]),
        StoreModule.forFeature('userProfile', redusers)
    ],
    declarations: [UserProfileComponent],
    providers: [UserProfileService]
})
export class UserProfileModule {}
