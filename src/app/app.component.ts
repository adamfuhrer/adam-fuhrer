import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
declare let ga: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router) {
        // Scroll to top of page on route change
        router.events.subscribe(nav => {
            if (nav instanceof NavigationEnd) {
                window.scrollTo(0, 0);
                ga('set', 'page', nav.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
}
