import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador-padre',
  templateUrl: './contador-padre.component.html',
  styleUrls: ['./contador-padre.component.scss']
})
export class ContadorPadreComponent implements OnInit {

  contador: number = 12;
  constructor() { }
  ngOnInit(): void {
  }



}
