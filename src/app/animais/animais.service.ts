import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais, Animal } from './animais';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string):Observable<Animais>{
    const token = this.tokenService.retornToken()
    const headers = new HttpHeaders().append('x-access-token',token)

    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`,{
      headers,
    })
  }

  buscarPorId(id:number):Observable<Animal>{
    const token = this.tokenService.retornToken()
    const headers = new HttpHeaders().append('x-access-token',token)
    return this.http.get<Animal>(`${API}/photos/${id}`,{headers})
  }
}
