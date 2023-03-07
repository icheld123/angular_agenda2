import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponentComponent } from './equipo-component/equipo-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { GatosComponentComponent } from './gatos-component/gatos-component.component';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { PerrosComponentComponent } from './perros-component/perros-component.component';

const routes: Routes = [
  {path: '',component:InicioComponentComponent},
  {path: 'formulario-adopcion',component:FormularioComponentComponent},
  {path: 'gatos',component:GatosComponentComponent},
  {path: 'perros',component:PerrosComponentComponent},
  {path: 'nosotros',component:EquipoComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
