import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiKey: any = '51fc45b76d111699cc326ec168203804'

constructor(private http: HttpClient) { }

// Api request plus query location
getWeather(location: any) {
  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}&units=metric`)
}

}

