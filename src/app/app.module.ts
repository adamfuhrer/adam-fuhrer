import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {SeikoFiveComponent} from './components/projects/watches/seiko-five/seiko-five.component';
import {RolexSubmarinerComponent} from './components/projects/watches/rolex-submariner/rolex-submariner.component';
import {FadeInDirective} from './directives/fade-in.directive';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MechanicalWatchesAccuracyComponent} from './components/projects/watches/mechanical-watches-accuracy/mechanical-watches-accuracy.component';
import {NavigationService} from './services/navigation.service';
import {TheCuratedFeedComponent} from './components/projects/the-curated-feed/the-curated-feed.component';
import {ColorOfTheYearComponent} from './components/projects/color-of-the-year/color-of-the-year.component';
import {ColorSwatchComponent} from './components/projects/color-of-the-year/color-swatch/color-swatch.component';
import {ColorSwatchLargeComponent} from './components/projects/color-of-the-year/color-swatch-large/color-swatch-large.component';

// Material
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        ProjectsComponent,
        SeikoFiveComponent,
        RolexSubmarinerComponent,
        FadeInDirective,
        NavigationComponent,
        MechanicalWatchesAccuracyComponent,
        TheCuratedFeedComponent,
        ColorOfTheYearComponent,
        ColorSwatchComponent,
        ColorSwatchLargeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSlideToggleModule
    ],
    providers: [
        NavigationService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
