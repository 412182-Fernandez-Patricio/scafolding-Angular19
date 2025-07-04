import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Lista} from './features/common/lista/lista';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'scafolding-angular19';
}
