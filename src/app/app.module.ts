import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { BannerComponent } from './views/banner/banner.component';
import { MenuComponent } from './views/menu/menu.component';
import { CarrosselComponent } from './views/carrossel/carrossel.component';
import { NatalComponent } from './views/natal/natal.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { EquipamentosComponent } from './views/equipamentos/equipamentos.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { ContatoComponent } from './views/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    MenuComponent,
    CarrosselComponent,
    NatalComponent,
    JogosComponent,
    EquipamentosComponent,
    SobreComponent,
    ContatoComponent
  ],

  // importações do site angular/material
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
