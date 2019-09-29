import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss'],
})
export class DirectorioComponent implements OnInit {
  @Input() directorio: Datum[] = [];

  constructor() { }

  ngOnInit() {}

}
