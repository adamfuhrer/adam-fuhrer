import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProjectsComponent} from './projects/projects.component';
import {SeikoFiveComponent} from './projects/watches/seiko-five/seiko-five.component';
import {RolexSubmarinerComponent} from './projects/watches/rolex-submariner/rolex-submariner.component';
import {ProjectsBackButtonComponent} from './projects/projects-back-button/projects-back-button.component';
import {FadeInDirective} from './directives/fade-in.directive';
import {PinboardLinksComponent} from './pinboard-links/pinboard-links.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomepageComponent,
        ProjectsComponent,
        SeikoFiveComponent,
        RolexSubmarinerComponent,
        ProjectsBackButtonComponent,
        FadeInDirective,
        PinboardLinksComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
