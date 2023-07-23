import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

getWeather() {
  return this.http.get("http://api.weatherstack.com/access_key=5a87923e7859603168d362c0a141a20a")
}
}
