import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
selector:'app-weather',
templateUrl:'./weather.component.html'
})
export class WeatherComponent implements OnInit {
    private weatherSearchForm: FormGroup | undefined;
    constructor(private formBuilder: FormBuilder) { }
    ngOnInit(): void {
        this.weatherSearchForm = this.formBuilder.group({
            location: ['']
          });
    }
}