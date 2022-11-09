import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeedModule } from "../shared/modules/feed/feed.module";
import { GlobalFeedComponent } from "./globalFeed.component";

const routes = [
    {
       path: '',
        component: GlobalFeedComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        FeedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}