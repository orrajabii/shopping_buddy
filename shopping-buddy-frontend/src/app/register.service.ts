import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Register } from './Register';

@Injectable()
export class RegisterService {

constructor(private http: HttpCl) { }

loginRequest(data: Register): Observable<any>{
  return this.http.post<any>(https://arcane-escarpment-54741.herokuapp.com/contacts/create, data);
}

}
