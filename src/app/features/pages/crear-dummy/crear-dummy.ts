import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatInputModule, MatLabel, MatSuffix} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import {DummyService} from '../../../core/services/dummy-service';


@Component({
  selector: 'app-crear-dummy',
  imports: [
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
  templateUrl: './crear-dummy.html',
  styleUrl: './crear-dummy.css'
})
export class CrearDummy {
  dummy_field: string = '';
  fecha: Date = new Date();

  constructor(private dummyService: DummyService) {
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      alert('Completa todos los campos')
      return
    }
    //le paso fecha, pero no la uso :|
    this.dummyService.createDummy(this.dummy_field, this.fecha).subscribe({
      next: (dummy) => {
        console.log("DUMMY CREADO:", dummy)
        alert("DUMMY CREADO")
      },
      error:(error) =>{
        console.error(error.message)
      }
    })

    return;
  }
}
