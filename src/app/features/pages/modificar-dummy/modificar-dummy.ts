import {Component, Inject} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput, MatLabel, MatSuffix} from "@angular/material/input";
import {DummyService} from '../../../core/services/dummy-service';
import {DIALOG_DATA} from '@angular/cdk/dialog';

@Component({
  selector: 'app-modificar-dummy',
    imports: [
        FormsModule
    ],
  templateUrl: './modificar-dummy.html',
  styleUrl: './modificar-dummy.css'
})
export class ModificarDummy {
  dummyId : number = 0
  dummy_field : string = ""


  constructor(private dummyService: DummyService, @Inject(DIALOG_DATA) public data: {dummyId : number}) {
    this.dummyId = data.dummyId
  }

  onSubmit(dummyForm: NgForm) {
    if (dummyForm.invalid) {
      alert('Completa todos los campos')
      return
    }
    //le paso fecha, pero no la uso :|
    this.dummyService.putDummy(this.dummyId, this.dummy_field).subscribe({
      next: (dummy) => {
        console.log("DUMMY modificado:", dummy)
        alert("DUMMY MODIFICADO")
      },
      error:(error) =>{
        console.error(error.message)
      }
    })
  }
}
