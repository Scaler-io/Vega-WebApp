import { Router } from '@angular/router';

export class RouteHelpers {
  public static isHomePage(router: Router) {
    return router.url === '/';
  }
}
