import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Lista} from './features/common/lista/lista';
import {CrearDummy} from './features/pages/crear-dummy/crear-dummy';
import {ListaDummies} from './features/pages/lista-dummies/lista-dummies';
import {NavBar} from './features/pages/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lista, CrearDummy, ListaDummies, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'scafolding-angular19';
}
