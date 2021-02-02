import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalidaAlgoritmo } from 'src/app/interfaces/interfaces';
import { DataAlgoritmosService } from 'src/app/services/data-algoritmos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  salidasAlgoritmo : Observable<Array<SalidaAlgoritmo>>;
  constructor(private dataAlServ : DataAlgoritmosService) { }

  ngOnInit() {


    this.salidasAlgoritmo = this.dataAlServ.getSalidaAlgoritmos()
  }

}
