import {Component, OnInit} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../../services/navigation.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-glitch-art',
    templateUrl: './glitch-art.component.html',
    styleUrls: [
        '../project-page.scss',
        './glitch-art.component.scss']
})
export class GlitchArtComponent implements OnInit {
    constructor(private navigationService: NavigationService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle('Glitch Art Generator | Adam Fuhrer');

        this.navigationService.emitBreadcrumbItems([
            {
                text: 'HOME',
                routerLink: '/',
                isActive: false
            } as Breadcrumb,
            {
                text: 'GLITCH ART GENERATOR',
                routerLink: '/glitch-art-generator',
                isActive: true
            } as Breadcrumb
        ]);
    }
}
