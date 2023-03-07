import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxCarouselModule, IgxSliderModule } from "igniteui-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { EquipoComponentComponent } from './equipo-component/equipo-component.component';
import { GatosComponentComponent } from './gatos-component/gatos-component.component';
import { PerrosComponentComponent } from './perros-component/perros-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { SliderComponentComponent } from './inicio-component/slider-component/slider-component.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponentComponent,
    FormularioComponentComponent,
    EquipoComponentComponent,
    GatosComponentComponent,
    PerrosComponentComponent,
    NavbarComponentComponent,
    ModalComponentComponent,
    SliderComponentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    IgxCarouselModule,
    IgxSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
