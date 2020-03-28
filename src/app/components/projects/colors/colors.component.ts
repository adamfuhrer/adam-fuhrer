import { Component, OnInit } from '@angular/core';
import {Breadcrumb, NavigationService} from '../../../services/navigation.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: [
      '../project-page.scss',
      './colors.component.scss'
  ]
})
export class ColorsComponent implements OnInit {
    constructor(private navigationService: NavigationService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle('colors.lol | Adam Fuhrer');

        this.navigationService.emitBreadcrumbItems([
            {
                text: 'HOME',
                routerLink: '/',
                isActive: false
            } as Breadcrumb,
            {
                text: 'COLORS.LOL',
                routerLink: '/colors-lol',
                isActive: true
            } as Breadcrumb
        ]);
    }
}
