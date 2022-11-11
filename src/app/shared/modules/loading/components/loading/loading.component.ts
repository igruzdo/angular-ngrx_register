import { Component, Input } from "@angular/core";

@Component({
    selector: 'mc-loading',
    template: '<div>{{ messageProps }}</div>'
})
export class LoadingComponent {
    @Input('nessage') messageProps: string = "Loading..."
}