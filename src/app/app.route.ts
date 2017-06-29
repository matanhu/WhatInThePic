import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { GamePageComponent } from './pages/game/game-page.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'game/:groupNumber/:gameMinutes', component: GamePageComponent},
    { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
