import { Component,OnInit } from '@angular/core';
import { DirectorioService } from '../services/directorio.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private directorioService: DirectorioService ) {}

  ngOnInit(){
    this.directorioService.getTopHeadlines()
    .subscribe( (resp: RespuestaTopHeadLines) =>{
      console.log('noticias', resp);
    });
  }
}
