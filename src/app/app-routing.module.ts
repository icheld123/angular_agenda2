import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApadrinarComponent } from './feature/apadrinar-component/apadrinar-component.component';
import { FormularioComponentComponent } from './feature/formulario-component/formulario-component.component';
import { InicioComponentComponent } from './feature/inicio-component/inicio-component.component';
import { PeluditosComponent } from './feature/peluditos-component/peluditos-component.component';


const routes: Routes = [

  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio',component:InicioComponentComponent},
  {path: 'adoptar',component:FormularioComponentComponent},
  {path: 'peluditos',component:PeluditosComponent},
  {path: 'apadrinar',component:ApadrinarComponent}
  // {path: 'gatos',component:GatosComponentComponent},
  // {path: 'perros',component:PerrosComponentComponent},
  // {path: 'nosotros',component:EquipoComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
