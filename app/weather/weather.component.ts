import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  moduleId: module.id,
  templateUrl: 'weather.component.html',
  providers: [WeatherService]
})

export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherService){}
  weatherData: any[];
  errorMessage: string;

  ngOnInit():any {
      this.getData();
      setInterval(() => {this.getData();}, 1000*60*30);
  }

  private getData() {
    this._weatherService.getWeather(50.740746,-1.977968)
    .subscribe(data => {this.weatherData = data},
              error =>  this.errorMessage = <any>error
    );
  }
}
