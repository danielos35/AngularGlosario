import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  
  // Para rutas debemos de inicializar en el constructor, el router
  constructor(private rutas:Router){}

  irHome(){
    
    //ir al Home  
    this.rutas.navigate(['']);
  }

  irPO(){
    this.rutas.navigate(['pageOne']);
  }

  irPT(){
    this.rutas.navigate(['pageTwo']);
  }

  irPTR(){
    this.rutas.navigate(['pageThree']);
  }
}
