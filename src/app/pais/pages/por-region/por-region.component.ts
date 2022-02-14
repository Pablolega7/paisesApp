import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent  {

  regiones:string[]=["africa", "americas", "asia", "europe", "oceania"];
  regionActiva:string="";
  paises:Pais[]=[]

  constructor(private PaisService:PaisService) { }

  getClaseCss(region:string):string{
    return (region===this.regionActiva)?'btn btn-primary':'btn-outline-primary'
  };

  activarRegion(region:string){
    this.regionActiva=region;
    this.paises=[];
    this.PaisService.buscarRegion(region).subscribe(paises=>{
      this.paises=paises;
    })
  };
  

  

}
