import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {SeikoFiveComponent} from './components/projects/watches/seiko-five/seiko-five.component';
import {RolexSubmarinerComponent} from './components/projects/watches/rolex-submariner/rolex-submariner.component';
import {MechanicalWatchesAccuracyComponent} from './components/projects/watches/mechanical-watches-accuracy/mechanical-watches-accuracy.component';
import {TheCuratedFeedComponent} from './components/projects/the-curated-feed/the-curated-feed.component';
import {ColorOfTheYearComponent} from './components/projects/color-of-the-year/color-of-the-year.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'accuracy-of-mechanical-watches', component: MechanicalWatchesAccuracyComponent},
    {path: 'accuracy-of-mechanical-watches/seiko-5-sports', component: SeikoFiveComponent},
    {path: 'accuracy-of-mechanical-watches/rolex-submariner', component: RolexSubmarinerComponent},
    {path: 'the-curated-feed', component: TheCuratedFeedComponent},
    {path: 'visualizing-every-pantone-color-of-the-year', component: ColorOfTheYearComponent},
    {path: '**', redirectTo: '', component: HomepageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
