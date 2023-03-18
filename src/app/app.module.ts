import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxCarouselModule, IgxSliderModule } from "igniteui-angular";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponentComponent } from './core/components/navbar-component/navbar-component.component';
import { ToolbarComponent } from './core/components/toolbar-component/toolbar-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpgeneralService } from './shared/service/httpgeneral.service';
import { InicioComponentComponent } from './feature/inicio-component/inicio-component.component';
import { FormularioComponentComponent } from './feature/formulario-component/formulario-component.component';
import { PeluditosComponent } from './feature/peluditos-component/peluditos-component.component';
import { ModalComponentComponent } from './feature/modal-component/modal-component.component';
import { ApadrinarComponent } from './feature/apadrinar-component/apadrinar-component.component';
import { SliderComponentComponent } from './feature/inicio-component/slider-component/slider-component.component';
import { FiltroComponentComponent } from './feature/peluditos-component/filtro-component/filtro-component.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponentComponent,
    FormularioComponentComponent,
    PeluditosComponent,
    NavbarComponentComponent,
    ToolbarComponent,
    ModalComponentComponent,
    SliderComponentComponent,
    ApadrinarComponent,
    FiltroComponentComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    IgxCarouselModule,
    IgxSliderModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HttpgeneralService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
