import { Component, OnInit } from '@angular/core';
import {Breadcrumb, NavigationService} from '../../../services/navigation.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-css-mondrian',
  templateUrl: './css-mondrian.component.html',
  styleUrls: [
      '../project-page.scss',
      './css-mondrian.component.scss'
  ]
})
export class CssMondrianComponent implements OnInit {
    constructor(private navigationService: NavigationService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle('CSS Mondrian');

        this.navigationService.emitBreadcrumbItems([
            {
                text: 'HOME',
                routerLink: '/',
                isActive: false
            } as Breadcrumb,
            {
                text: 'CSS MONDRIAN',
                routerLink: '/css-mondrian',
                isActive: true
            } as Breadcrumb
        ]);
    }
}
