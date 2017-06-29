import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.route';
import { GameComponent } from './components/game/game.component';
import { GamePageComponent } from './pages/game/game-page.component';
import { HomeComponent } from './pages/home/home.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
