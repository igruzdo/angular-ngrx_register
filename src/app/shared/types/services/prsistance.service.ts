import { Injectable } from "@angular/core";

@Injectable()
export class PrsistanceSrvice {
    public set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch(e) {
            console.error('Error saving to LS', e);
        }
    }

    public get(key): any {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch(e) {
            console.error('Error getting from LS', e);
            return null;
        }
    }
}