import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ondestroy',
  templateUrl: './ondestroy.component.html',
  styleUrls: ['./ondestroy.component.scss'],
})
export class OndestroyComponent implements OnDestroy {
  constructor(private rutas: Router) {}
  ngOnDestroy(): void {
    alert('Seguro que quieres salir?');
  }
  salir() {
    this.rutas.navigate(['']);
  }
}
