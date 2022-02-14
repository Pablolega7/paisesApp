
import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';




@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termnino:string="";
  hayError:boolean= false;
  paises:Pais[]=[];


  constructor(private PaisService:PaisService){

  }
    buscar(termino:string){
      this.hayError=false
      this.termnino=termino;
      

      this.PaisService.buscarCapital(this.termnino).subscribe(paises=>{
        this.paises=paises;
        },(err)=>{ this.hayError=true
        });
      
    }

}
