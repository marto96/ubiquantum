import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DirectoriosComponent } from './directorios/directorios.component';
import { DirectorioComponent } from './directorio/directorio.component';



@NgModule({
  declarations: [
    DirectoriosComponent,
    DirectorioComponent
  ],
  exports:[
DirectorioComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
