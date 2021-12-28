import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string="https://192.168.1.176:443";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    
    const payload = new HttpParams().set("user", form.user).set("pass", form.pass);

    let direction = this.url+"/login";
    
    let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.http.post<ResponseI>(direction, payload, {headers})
  }
}
