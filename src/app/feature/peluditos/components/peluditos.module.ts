
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "src/app/shared/shared.modulo";
import { AnimalesService } from "../../shared/service/animales.service";
import { FiltroComponentComponent } from "./filtro-component/filtro-component.component";
import { PeluditosComponent } from "./peluditos-component/peluditos-component.component";

@NgModule({
  declarations: [
    FiltroComponentComponent,
    PeluditosComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [
    AnimalesService
  ]
})
export class PeluditosModule {}
