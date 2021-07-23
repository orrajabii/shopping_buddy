import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Register } from './Register';

@Injectable()
export class RegisterService {

constructor(private http: Http) { }

loginRequest(data: Register): Observable<any>{
  return this.http.post("https://arcane-escarpment-54741.herokuapp.com/contacts/create", data);
}

}
