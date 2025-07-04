import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map, Observable, throwError} from 'rxjs';
import {Dummy} from '../models/dummy';

@Injectable({
  providedIn: 'root',
})
export class DummyService {

  http = inject(HttpClient);
  resourcePath = environment.apiPath + '/dummies';


  getDummyById(id: number): Observable<Dummy>{
    const url = this.resourcePath+`/${id}`
    return this.http.get<Dummy>(url).pipe(
      map(dummy =>{
        return dummy
      }),
      catchError(error => {
        console.error(error)
        if (error.status === 400){
          const mensaje = error.error?.message
          return throwError(() => new Error(mensaje))
        }else{
          return throwError(() => new Error("Ocurrio un error inesperado"))
        }
      })
    )
  }

  putDummy(id: number, dummyField:string): Observable<Dummy>{
    const dummyDto = {
      "dummy_field" : dummyField
    }
    const url = this.resourcePath+`/${id}`
    return this.http.put<Dummy>(url, dummyDto).pipe(
      map(dummy =>{
        return dummy
      }),
      catchError(error => {
        console.error(error)
        if (error.status === 400){
          const mensaje = error.error?.message
          return throwError(() => new Error(mensaje))
        }else{
          return throwError(() => new Error("Ocurrio un error inesperado"))
        }
      })
    )
  }

  deleteDummyById(id: number): Observable<Dummy>{
    const url = this.resourcePath+`/${id}`
    return this.http.delete<Dummy>(url).pipe(
      catchError(error => {
        console.error(error)
        if (error.status === 400){
          const mensaje = error.error?.message
          return throwError(() => new Error(mensaje))
        }else{
          return throwError(() => new Error("Ocurrio un error inesperado"))
        }
      })
    )
  }

  getAllDummies(): Observable<Dummy[]>{
    return this.http.get<Dummy[]>(this.resourcePath).pipe(
      map(dummy =>{
        return dummy
      }),
      catchError(error => {
        console.error(error)
        if (error.status === 400){
          const mensaje = error.error?.message
          return throwError(() => new Error(mensaje))
        }else{
          return throwError(() => new Error("Ocurrio un error inesperado"))
        }
      })
    )
  }

  createDummy(dummyField:string, fechaDate: Date ): Observable<Dummy>{
    const fecha = fechaDate.toISOString().slice(0, 10) //ACA PARSEAMOS DE DATE A 'yyyy-MM-dd'
    const dummyDto = {
      "dummy_field" : dummyField,
      // fecha    //aca iria la fecha, pero ahora no la mandamos
    }
    return this.http.post<Dummy>(this.resourcePath, dummyDto).pipe(
      map(dummy =>{
        return dummy
      }),
      catchError(error => {
        console.error(error)
        if (error.status === 400){
          const mensaje = error.error?.message
          return throwError(() => new Error(mensaje))
        }else{
          return throwError(() => new Error("Ocurrio un error inesperado"))
        }

      })
    )
  }

  getDummyByDummyFieldOrFecha(dummyField?: string, fechaDate?: Date){
    let params : HttpParams = new HttpParams()
    const url = this.resourcePath+"/search"

    if (dummyField){
      params = params.set("dummyField", dummyField)
    }
    if (fechaDate) {
      params = params.set("fromDate", fechaDate.toISOString().slice(0, 10))
    }

    return this.http.get<Dummy[]>(url, {params}).pipe(
      map(dummies => {
        return dummies
      }),
      catchError(error => {
        console.error(error)
        if (error.status === 400){
          return throwError(() => new Error(error.message))
        }else{
          return throwError(() => new Error("Ocurrio un error inesperado"))
        }
      })
    )


  }
}
