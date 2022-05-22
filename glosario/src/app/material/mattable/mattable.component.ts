import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.scss'],
})
export class MattableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'telefono'];
  dataSource: any = [
    {
      nombre: 'Daniel',
      apellido: 'Márquez',
      telefono: 1234,
    },
    {
      nombre: 'Daniel',
      apellido: 'Márquez',
      telefono: 1234,
    },
    {
      nombre: 'Daniel',
      apellido: 'Márquez',
      telefono: 1234,
    },
    {
      nombre: 'Daniel',
      apellido: 'Márquez',
      telefono: 1234,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
