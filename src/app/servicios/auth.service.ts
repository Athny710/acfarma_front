import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../modelos/proveedor.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string="https://localhost:443";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    const payload = new HttpParams().set("user", form.user).set("pass", form.pass);
    let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.http.post<ResponseI>("https://localhost:443/login", payload, {headers})
  }

  getproveedores(){
    let headers = new HttpHeaders({});
    return this.http.get<Proveedor[]>("https://localhost:443/proveedores/listar", {headers});
    }
}
