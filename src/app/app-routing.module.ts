import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './views/banner/banner.component';
import { CarrosselComponent } from './views/carrossel/carrossel.component';
import { ContatoComponent } from './views/contato/contato.component';
import { EquipamentosComponent } from './views/equipamentos/equipamentos.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { NatalComponent } from './views/natal/natal.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  {
    path: 'home-component',
    component: HomeComponent
  },
  {
    path: 'footer-component',
    component: FooterComponent
  },
  {
    path: 'banner-component',
    component: BannerComponent
  },
  {
    path: 'carrossel-component',
    component: CarrosselComponent
  },
  {
    path: 'natal-component',
    component: NatalComponent
  },
  {
    path: 'jogos-component',
    component: JogosComponent
  },
  {
    path: 'equipamentos-component',
    component: EquipamentosComponent
  },
  {
    path:'sobre-component',
    component: SobreComponent
  },
  {
    path: 'contato-component',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
