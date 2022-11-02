import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrsistanceSrvice } from "src/app/shared/types/services/prsistance.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private persistanceService: PrsistanceSrvice
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.persistanceService.get('accessToken')
        req = req.clone({
            setHeaders: {
                Authorization: token ? `Token ${token}` : ''
            }
        })

        return next.handle(req)
    }
}