import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebasdirectivas',
  templateUrl: './pruebasdirectivas.component.html',
  styleUrls: ['./pruebasdirectivas.component.scss']
})
export class PruebasdirectivasComponent implements OnInit {
  
  public cambiarEstilo = 'cambiarEstilo'
  constructor() { }

  ngOnInit(): void {
  }

}
