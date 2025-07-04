import {Component, inject} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Dummy} from '../../../core/models/dummy';
import {Dialog} from '@angular/cdk/dialog';
import {DummyService} from '../../../core/services/dummy-service';
import {ModificarDummy} from '../modificar-dummy/modificar-dummy';
import {FormsModule, NgForm} from '@angular/forms';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatInputModule, MatLabel, MatSuffix} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-lista-dummies',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatSuffix,
    MatIcon
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './lista-dummies.html',
  styleUrl: './lista-dummies.css'
})
export class ListaDummies {
  list: Dummy[]= []
  private modificarDummyDialog = inject(Dialog)
  toggleActivo: boolean = false;
  fecha: Date | undefined;
  dummyField: string | undefined;

  constructor(private dummyService: DummyService) {
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

  onSubmit() {
    if (this.toggleActivo){
      this.dummyService.getDummyByDummyFieldOrFecha(this.dummyField, this.fecha).subscribe({
        next: (dummies) => {
          this.list = dummies
        },
        error: (error) => {
          console.error(error.message)
        }
      })
    }else{
      this.dummyService.getAllDummies().subscribe({
        next: (dummies) =>{
          this.list = dummies
        },
        error: (error) =>{
          alert(error.message)
        }
      })
    }
  }
  limpiarFiltros() {
    this.fecha = undefined
    this.dummyField = undefined
  }
}
