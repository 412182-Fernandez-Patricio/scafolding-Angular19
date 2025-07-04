import {Component, inject, OnInit} from '@angular/core';
import {Dummy} from '../../../core/models/dummy';
import {DummyService} from '../../../core/services/dummy-service';
import {DatePipe} from '@angular/common';
import {Dialog} from '@angular/cdk/dialog';
import {ModificarDummy} from '../../pages/modificar-dummy/modificar-dummy';
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
  private modificarDummyDialog = inject(Dialog)
  constructor(private dummyService: DummyService) {
  }

  ngOnInit() {
    this.dummyService.getAllDummies().subscribe({
      next: (dummies) =>{
        this.list = dummies
      },
      error: (error) =>{
        alert(error.message)
      }
    })
  }

  modificar(id:number){
    this.modificarDummyDialog.open(ModificarDummy, {
      data:{
        dummyId: id
      }
    })
  }

  eliminar(id:number){
    this.dummyService.deleteDummyById(id).subscribe({
      next: (dummy) =>{
        alert("DUMMY ELIMINADO")
      },
      error: (error) =>{
        console.error(error.message)
      }
    })
  }


}
