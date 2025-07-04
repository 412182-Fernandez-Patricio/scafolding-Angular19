import { Routes } from '@angular/router';
import {CrearDummy} from './features/pages/crear-dummy/crear-dummy';
import {ListaDummies} from './features/pages/lista-dummies/lista-dummies';

export const routes: Routes = [
  {path: "crearDummy", component: CrearDummy},
  {path: "", component: ListaDummies}
];
