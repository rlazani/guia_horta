import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MainComponent } from './componentes/main/main.component';
import { MenuFatoresComponent } from './componentes/fatores/menu-fatores/menu-fatores.component';
import { MenuCatalogoComponent } from './componentes/catalogo/menu-catalogo/menu-catalogo.component';
import { FatorComponent } from './componentes/fatores/fator/fator.component';
import { FichaComponent } from './componentes/fatores/ficha/ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    MenuFatoresComponent,
    MenuCatalogoComponent,
    FatorComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
