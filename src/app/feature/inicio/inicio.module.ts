
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IgxCarouselModule, IgxSliderModule } from "igniteui-angular";
import { NgxPaginationModule } from "ngx-pagination";
import { EquipoComponentComponent } from "./components/equipo-component/equipo-component.component";
import { InicioComponentComponent } from "./components/inicio-component/inicio-component.component";
import { ModalComponentComponent } from "./components/modal-component/modal-component.component";
import { SliderComponentComponent } from "./components/slider-component/slider-component.component";

@NgModule({
  declarations: [
    InicioComponentComponent,
    ModalComponentComponent,
    EquipoComponentComponent,
    SliderComponentComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    IgxCarouselModule,
    IgxSliderModule
  ],
  providers: [
  ]
})
export class InicioModule {}
