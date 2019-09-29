import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directorios',
  templateUrl: './directorios.component.html',
  styleUrls: ['./directorios.component.scss'],
})
export class DirectoriosComponent implements OnInit {
@Input() directorio: Datum[] = [];
  constructor() { }

  ngOnInit() {}

}
