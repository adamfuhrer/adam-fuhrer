import {Component, HostBinding, Inject, OnInit} from '@angular/core';
import {Breadcrumb, NavigationService} from '../../../services/navigation.service';
import {Meta, Title} from '@angular/platform-browser';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-color-of-the-year',
    templateUrl: './color-of-the-year.component.html',
    styleUrls: [
        '../project-page.scss',
        './color-of-the-year.component.scss'
    ]
})
export class ColorOfTheYearComponent implements OnInit {
    @HostBinding('class.is-hiding-color-bar') isHidingColorBar = false;
    colorSwatches = [];

    constructor(private navigationService: NavigationService,
                private titleService: Title,
                private metaService: Meta,
                @Inject(DOCUMENT) private document: any) {
        this.metaService.addTags([
            { property: 'og:title', content: 'Visualizing Every Pantone Color of the Year'},
            { property: 'og:description', content: 'Matching 22 Colors to imagery from some of my favourite artists and photographers.'},
            { property: 'og:image', content: 'https://adamfuhrer.com/assets/images/pantone/all-colors.jpg'},
            { property: 'og:url', content: 'https://adamfuhrer.com/visualizing-every-pantone-color-of-the-year'},
            { name: 'twitter:title', content: 'Visualizing Every Pantone Color of the Year' },
            { name: 'twitter:description', content: 'Matching 22 Colors to imagery from some of my favourite artists and photographers.' },
            { name: 'twitter:image', content: 'https://adamfuhrer.com/assets/images/pantone/all-colors.jpg'},
            { name: 'twitter:url', content: 'https://adamfuhrer.com/visualizing-every-pantone-color-of-the-year'},
            { name: 'twitter:card', content: 'summary'},
            { name: 'facebook:title', content: 'Visualizing Every Pantone Color of the Year' },
            { name: 'facebook:description', content: 'Matching 22 Colors to imagery from some of my favourite artists and photographers.' },
            { name: 'facebook:image', content: 'https://adamfuhrer.com/assets/images/pantone/all-colors.jpg'},
            { name: 'facebook:url', content: 'https://adamfuhrer.com/visualizing-every-pantone-color-of-the-year'}
        ]);
    }

    ngOnInit() {
        this.titleService.setTitle('Visualizing Every Pantone Color of the Year');

        this.navigationService.emitBreadcrumbItems([
            {
                text: 'HOME',
                routerLink: '/',
                isActive: false
            } as Breadcrumb,
            {
                text: 'PANTONE COLOR OF THE YEAR',
                routerLink: '/visualizing-every-pantone-color-of-the-year',
                isActive: true
            } as Breadcrumb
        ]);

        // Colors
        this.colorSwatches = [
            {
                color: '#0F4C81',
                year: '2020'
            },
            {
                color: '#FF6F61',
                year: '2019'
            },
            {
                color: '#5F4B8B',
                year: '2018'
            },
            {
                color: '#88B04B',
                year: '2017'
            },
            {
                color: '#92A8D1',
                secondColor: '#F7CAC9',
                year: '2016'
            },
            {
                color: '#955251',
                year: '2015'
            },
            {
                color: '#B163A3',
                year: '2014'
            },
            {
                color: '#009473',
                year: '2013'
            },
            {
                color: '#DD4124',
                year: '2012'
            },
            {
                color: '#D94F70',
                year: '2011'
            },
            {
                color: '#45B5AA',
                year: '2010'
            },
            {
                color: '#F0C05A',
                year: '2009'
            },
            {
                color: '#5A5B9F',
                year: '2008'
            },
            {
                color: '#9B1B30',
                year: '2007'
            },
            {
                color: '#DECDBE',
                year: '2006'
            },
            {
                color: '#53B0AE',
                year: '2005'
            },
            {
                color: '#E2583E',
                year: '2004'
            },
            {
                color: '#7BC4C4',
                year: '2003'
            },
            {
                color: '#BF1932',
                year: '2002'
            },
            {
                color: '#C74375',
                year: '2001'
            },
            {
                color: '#9BB7D4',
                year: '2000'
            }
        ];
    }

    onScrollToTopClick() {
        window.scroll({top: 0, behavior: 'smooth'});
    }

    onShowColorsToggleChange(event: MatSlideToggleChange) {
        this.isHidingColorBar = event.checked;
    }
}
