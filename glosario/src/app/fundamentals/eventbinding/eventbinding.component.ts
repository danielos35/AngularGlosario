import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss'],
})
export class EventbindingComponent implements OnInit {
  numero: number = 0;
  constructor() {}

  ngOnInit(): void {}

  aumentarNumero() {
    this.numero++;
  }
  reiniciar() {
    this.numero = 0;
  }
}
