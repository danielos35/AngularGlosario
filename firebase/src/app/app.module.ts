import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealtimeserviceService } from './realtimeservice.service';

// Importar modulo HTTP
import {HttpClientModule} from '@angular/common/http';
import { GuardarComponent } from './guardar/guardar.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GuardarComponent
  ],
  // Importamos también el modulo HttpClientModule para las peticiones HttpCliente
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, FormsModule
  ],


  // Importamos nuestro archivo de servicio
  providers: [RealtimeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
