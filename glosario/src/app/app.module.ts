import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { TipodatoModule } from './tipodato/tipodato.module';
import { DirectivasModule } from './directivas/directivas.module';
import { FormulariosModule } from './formularios/formularios.module';
import { SassModule } from './sass/sass.module';
import { RutasModule } from './rutas/rutas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    FormsModule,
    TipodatoModule,
    DirectivasModule,
    FormulariosModule,
    SassModule,
    RutasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
