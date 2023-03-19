import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptarComponent } from './feature/adoptar/components/formulario-component/adoptar-component.component';
import { ApadrinarComponent } from './feature/apadrinar/components/apadrinar-component/apadrinar-component.component';
import { InicioComponentComponent } from './feature/inicio/components/inicio-component/inicio-component.component';
import { PeluditosComponent } from './feature/peluditos/components/peluditos-component/peluditos-component.component';


const routes: Routes = [

  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio',component:InicioComponentComponent},
  {path: 'adoptar',component:AdoptarComponent},
  {path: 'peluditos',component:PeluditosComponent},
  {path: 'ayudar',component:ApadrinarComponent}
  // {path: 'gatos',component:GatosComponentComponent},
  // {path: 'perros',component:PerrosComponentComponent},
  // {path: 'nosotros',component:EquipoComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
