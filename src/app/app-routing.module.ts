import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { MenuCatalogoComponent } from './componentes/catalogo/menu-catalogo/menu-catalogo.component';
import { MenuFatoresComponent } from './componentes/fatores/menu-fatores/menu-fatores.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuComponent } from './componentes/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'menu-catalogo',
    component: MenuCatalogoComponent,
  },
  {
    path: 'menu-fatores',
    component: MenuFatoresComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
