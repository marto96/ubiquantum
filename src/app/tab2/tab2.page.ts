import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../services/directorio.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
directorio: Datum[] = [];

  constructor(private directorioService: DirectorioService ) {}

  ngOnInit() {
    this.directorioService.getTopHeadlines()
    .subscribe( (resp: RespuestaTopHeadLines) =>{
      console.log('directorio', resp.data);
     // this.directorio = resp.data;
      this.directorio.push(...resp.data);
    });
  }
}
