import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
      dummyField
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

  createDummy(dummyField:string): Observable<Dummy>{
    const dummyDto = {
      dummyField
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
}
