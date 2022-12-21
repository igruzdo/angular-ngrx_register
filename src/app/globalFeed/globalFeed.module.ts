import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BannerModule } from "../shared/modules/banner/banner.module";
import { FeedModule } from "../shared/modules/feed/feed.module";
import { PopularTagsModule } from "../shared/modules/popularTags/popularTags.module";
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
        RouterModule.forChild(routes),
        BannerModule,
        PopularTagsModule
    ],
    declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}