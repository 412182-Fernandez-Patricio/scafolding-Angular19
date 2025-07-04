import {Component, OnInit} from '@angular/core';
import {Dummy} from '../../../core/models/dummy';
import {DummyService} from '../../../core/services/dummy-service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista implements OnInit{

  list: Dummy[]= []

  constructor(private dummyService: DummyService) {
  }

  ngOnInit() {
    this.dummyService.getAllDummies().subscribe({
      next: (dummies) =>{
        this.list = dummies
        console.log(this.list)
      },
      error: (error) =>{
        alert(error.message)
      }
    })
  }


}
