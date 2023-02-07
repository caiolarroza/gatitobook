import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  private readonly API = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario): any {
    return this.http.post(`${this.API}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<any> {
    return this.http.get(`${this.API}/user/exists/${nomeUsuario}`);
  }
}
