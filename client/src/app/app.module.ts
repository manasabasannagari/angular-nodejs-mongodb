import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from 'src/weather/weather.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
