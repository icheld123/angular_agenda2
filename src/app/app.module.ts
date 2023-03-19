import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { PeluditosModule } from './feature/peluditos/components/peluditos.module';
import { InicioModule } from './feature/inicio/inicio.module';
import { AdoptarComponent } from './feature/adoptar/components/formulario-component/adoptar-component.component';
import { ApadrinarComponent } from './feature/apadrinar/components/apadrinar-component/apadrinar-component.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AdoptarComponent,
    ApadrinarComponent
  ],
  imports: [
    AppRoutingModule,
    PeluditosModule,
    InicioModule,
    CoreModule,
    BrowserModule
  ],
  // exports: [CommonModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
