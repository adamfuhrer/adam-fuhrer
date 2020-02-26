import {Component, HostBinding, OnInit} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    @HostBinding('class.is-swinging') isSwinging = false;

    constructor(private navigationService: NavigationService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle('Adam Fuhrer | UX Developer');

        // Don't show breadcrumbs on homepage
        this.navigationService.emitBreadcrumbItems([]);
    }

    onGhostClick() {
        this.isSwinging = true;

        setTimeout(() => {
            this.isSwinging = false;
        }, 4000);
    }
}
