import { CommonModule} from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponentComponent } from "./components/navbar-component/navbar-component.component";
import { ToolbarComponent } from "./components/toolbar-component/toolbar-component.component";
import { HttpgeneralService } from "./services/httpgeneral.service";
import { FooterComponent } from './components/footer-component/footer-component.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    NavbarComponentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    NavbarComponentComponent,
    FooterComponent
  ],
  providers: [
    HttpgeneralService
  ]
})
export class CoreModule {}
