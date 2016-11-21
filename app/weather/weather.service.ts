import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const APPID = '755046cd2b6e57beaa7e45fa835e9257';

@Injectable()
export class WeatherService {

  dogWalkingWeathers = ['partly-cloudy-day', 'cloudy', 'clear-day', 'partly-cloudy-night', 'clear-night'];

  constructor(private jsonp: Jsonp) {}

  getWeather(lat, long): Observable<any[]> {
    let baseUrl='https://api.darksky.net/forecast/';
    return this.jsonp.get(baseUrl + APPID + '/' + lat + ',' + long + '?callback=JSONP_CALLBACK')
                     .map(response => this.prepareData(response))
                     .catch(this.handleError);
  }

  private prepareData(res: any) {
    let data = res.json();
    data.currently.dogWalking = this.setDogWalking(data.currently.icon, data.currently.time);
    console.log(data.currently);
    return data.currently || { };
  }

  private setDogWalking(weather,time) {
    var date = new Date(time*1000);
    var hours = date.getHours();
    if (this.dogWalkingWeathers.indexOf(weather) > -1) {
      if (hours >= 12 && hours <=14) {
        return 2;
      }
      return 1;
    }
    return 0;
  }

  private handleError (error: any) {
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
