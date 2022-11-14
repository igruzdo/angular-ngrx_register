import { Injectable } from "@angular/core";

@Injectable()
export class UtilsServise {
    public range(start: number, end: number): number[] {
        return [...Array(end).keys()].map(el => el + start)
    }
}