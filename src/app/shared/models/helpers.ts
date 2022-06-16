import { Router } from '@angular/router';

export class RouteHelpers {
  public static isHomePage(router: Router) {
    console.log(router.url);
    return router.url == '/';
  }
}
