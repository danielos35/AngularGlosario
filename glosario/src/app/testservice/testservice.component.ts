import { Component, OnInit } from '@angular/core';
import { ManualService } from '../servicios/manual.service';

@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.scss'],
})
export class TestserviceComponent implements OnInit {
  constructor(private SPmanual: ManualService) {}

  ngOnInit(): void {}

  // Trar datos mediante un get
  get datos() {
    return this.SPmanual.datosArreglo;
  }

  // Consultar mediante interfaces
}
