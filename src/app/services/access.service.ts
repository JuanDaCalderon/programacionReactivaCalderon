import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User, postUser } from '../other/users';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.get('https://629415d0089f87a57ac8f2a2.mockapi.io/api/v1/usuarios')
      .pipe(
        map(data => {
          for (const id in data) {
            if( data[id].email ===  user.email){
              if( data[id].password ===  user.password){
                return data;
              }
              else{
                return 'Constraseña incorrecta';
              }
            }
          }
          return 'No se encontró ningún usuario con este email';
        }),
        catchError(err => {
          let message: string;
          message = 'Error intentando hacer Log In, intenta más tarde'
          return throwError(() => message);
        })
      )
  }

  signup(user: postUser) {
    return this.http.post('https://629415d0089f87a57ac8f2a2.mockapi.io/api/v1/usuarios', user)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(err => {
          let message: string;
          message = 'Error intentando crear el usuario, intenta más tarde'
          return throwError(() => message);
        })
      )
  }
}
