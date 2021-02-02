import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { SalidaAlgoritmo } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class DataAlgoritmosService {

  constructor(private httpClient : HttpClient) { }

  ///base: string = "http://localhost:3000/"

  getSalidaAlgoritmos() : Observable<Array<SalidaAlgoritmo>>
  {
    return this.httpClient.get<Array<SalidaAlgoritmo>>(`/algoritmos/salida/`)//se llama al proxy
    
  }
}
