import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {SeikoFiveComponent} from './components/projects/watches/seiko-five/seiko-five.component';
import {RolexSubmarinerComponent} from './components/projects/watches/rolex-submariner/rolex-submariner.component';
import {MechanicalWatchesAccuracyComponent} from './components/projects/watches/mechanical-watches-accuracy/mechanical-watches-accuracy.component';
import {TheCuratedFeedComponent} from './components/projects/the-curated-feed/the-curated-feed.component';
import {ColorOfTheYearComponent} from './components/projects/color-of-the-year/color-of-the-year.component';
import {PortraitsComponent} from './components/projects/portraits/portraits.component';
import {GlitchArtComponent} from './components/projects/glitch-art/glitch-art.component';
import {CssMondrianComponent} from './components/projects/css-mondrian/css-mondrian.component';
import {ColorsComponent} from './components/projects/colors/colors.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'accuracy-of-mechanical-watches', component: MechanicalWatchesAccuracyComponent},
    {path: 'watches', redirectTo: 'accuracy-of-mechanical-watches'},
    {path: 'accuracy-of-mechanical-watches/seiko-5-sports', component: SeikoFiveComponent},
    {path: 'accuracy-of-mechanical-watches/rolex-submariner', component: RolexSubmarinerComponent},
    {path: 'the-curated-feed', component: TheCuratedFeedComponent},
    {path: 'visualizing-every-pantone-color-of-the-year', component: ColorOfTheYearComponent},
    {path: '28-portraits-by-28-photographers', component: PortraitsComponent},
    {path: 'glitch-art-generator', component: GlitchArtComponent},
    {path: 'css-mondrian', component: CssMondrianComponent},
    {path: 'colors-lol', component: ColorsComponent},
    {path: 'portraits', redirectTo: '28-portraits-by-28-photographers'},
    {path: '**', redirectTo: '', component: HomepageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
