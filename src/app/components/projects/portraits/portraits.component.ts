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
        this.metaService.addTags([
            { property: 'og:title', content: '28 Portraits by 28 Photographers'},
            { property: 'og:description', content: 'A selection of phenomenal portrait photography.'},
            { property: 'og:url', content: 'https://adamfuhrer.com/28-portraits-by-28-photographers'},
            { name: 'twitter:title', content: '28 Portraits by 28 Photographers' },
            { name: 'twitter:description', content: 'A selection of phenomenal portrait photography.' },
            { name: 'twitter:url', content: 'https://adamfuhrer.com/28-portraits-by-28-photographers'},
            { name: 'twitter:card', content: 'summary'},
            { name: 'facebook:title', content: '28 Portraits by 28 Photographers' },
            { name: 'facebook:description', content: 'A selection of phenomenal portrait photography.' },
            { name: 'facebook:url', content: 'https://adamfuhrer.com/28-portraits-by-28-photographers'}
        ]);
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
