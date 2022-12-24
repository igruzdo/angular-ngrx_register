import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { tap } from "rxjs";

@Component({
    selector: 'mc-tag-feed',
    templateUrl: './tagFeed.component.html',
    styleUrls: ['./tagFeed.component.scss']
})
export class TagFeedComponent implements OnInit {
    public tagName: string;
    public apiUrl: string;
    constructor(private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.route.params.pipe(
            tap((params: Params) => {
                this.tagName = params["slug"];
                this.apiUrl = `/articles?tag=${this.tagName}`
            })
        ).subscribe()
    }
}
