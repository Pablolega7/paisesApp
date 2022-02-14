import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
    li{
      cursor:pointer;
    }

    `
  ]
})
export class PorPaisComponent{

  termnino:string="";
  hayError:boolean= false;
  paises:Pais[]=[];
  paisesSugeridos:Pais[]=[]


  constructor(private paisService:PaisService){}
    buscar(termino:string){
      this.hayError=false
      this.termnino=termino;
      
      this.paisService.buscarPais(this.termnino).subscribe(paises=>{
        console.log(paises);
        this.paises=paises;
        },(err)=>{ this.hayError=true
        });
    }
    sugerencias(termino:string){
      this.hayError=false;
      this.paisService.buscarPais(termino).subscribe(paises=> this.paisesSugeridos=paises);
     }
  }
