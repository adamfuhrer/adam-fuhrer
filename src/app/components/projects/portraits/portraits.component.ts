import {Component, OnInit} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../../services/navigation.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-portraits',
    templateUrl: './portraits.component.html',
    styleUrls: [
        '../project-page.scss',
        './portraits.component.scss'
    ]
})
export class PortraitsComponent implements OnInit {
    constructor(private navigationService: NavigationService,
                private titleService: Title,
                private metaService: Meta) {
    }

    ngOnInit() {
        this.titleService.setTitle('28 Portraits by 28 Photographers');

        this.navigationService.emitBreadcrumbItems([
            {
                text: 'HOME',
                routerLink: '/',
                isActive: false
            } as Breadcrumb,
            {
                text: '28 PORTRAITS',
                routerLink: '/28-portraits-by-28-photographers',
                isActive: true
            } as Breadcrumb
        ]);
    }

}
