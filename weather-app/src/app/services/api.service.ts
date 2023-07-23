import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }


getWeather(location: string) {
  return this.http.get('http://api.weatherstack.com/current?access_key=5a87923e7859603168d362c0a141a20a&query=' + location)
}
}
