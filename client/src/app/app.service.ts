import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class AppService {

    constructor(private HttpClient: HttpClient){

    }
     getWeather(){
        return this.HttpClient.get('http://localhost:3000/weather');
    }
}