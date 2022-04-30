import { Component, OnInit } from '@angular/core';
import { PipesService } from 'src/app/shared/servicios/pipes.service';

@Component({
  selector: 'app-b-pipescustoms',
  templateUrl: './b-pipescustoms.component.html',
  styleUrls: ['./b-pipescustoms.component.scss']
})
export class BPipescustomsComponent implements OnInit {
  
  esOscuro:boolean = true;
  valorIva:number = 0;

  constructor(private pipeService:PipesService) { }

  ngOnInit(): void {}

  cambiarModo(){
    this.pipeService.cambiarModo();
    this.esOscuro = this.pipeService.esOscuro;
  }


  

}
